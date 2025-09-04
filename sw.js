/* Honey Inbox — simple offline cache */
const CACHE = 'honey-inbox-v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest'];

/* Install: pre-cache shell */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(()=>self.skipWaiting())
  );
});

/* Activate: cleanup old caches */
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

/* Fetch: cache-first for same-origin navigations & static */
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    // Navigation requests → serve cached shell when offline
    if (e.request.mode === 'navigate') {
      e.respondWith(
        fetch(e.request).catch(()=>caches.match('./index.html'))
      );
      return;
    }
    // Static same-origin → cache-first
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request).then(r=>{
        const copy = r.clone();
        caches.open(CACHE).then(c=>c.put(e.request, copy));
        return r;
      })).catch(()=>caches.match('./index.html'))
    );
    return;
  }
  // Cross-origin: network-first, fallback to cache if present
  e.respondWith(
    fetch(e.request).catch(()=>caches.match(e.request))
  );
});
