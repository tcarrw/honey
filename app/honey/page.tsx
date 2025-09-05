export const metadata = {
  title: "Honey ↔ Illumina — boop.plnt.earth",
  description:
    "Honey as condensed time: an Illumina ↔ honey mapping (τ, E, c) visualized with Boop styling.",
  themeColor: "#0B0F19",
};

export default function Page() {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="wrap">
            <div className="brand">
              <div className="logo" aria-hidden="true" />
              <div>
                <h1>
                  Honey ↔ Illumina <span className="sub">/honey</span>
                </h1>
                <div className="sub">
                  Honey as <span className="tau">τ</span> — condensed energy across time
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="wrap">
          <section className="panel hero" aria-labelledby="eq-title">
            <span className="tag">🍯 honey = <span className="tau">τ</span></span>
            <div className="grid">
              <div className="card" id="eq-title" aria-live="polite">
                <table className="equations" role="table" aria-label="Illumina to Honey Equivalence">
                  <thead>
                    <tr>
                      <th>Illumina Equation</th>
                      <th>Physics Meaning</th>
                      <th>Honey Metaphor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="eq">τ = E / c³</td>
                      <td>Time as condensed energy</td>
                      <td><strong>Honey = nectar slowed into sweetness</strong> (sunlight captured, preserved across time)</td>
                    </tr>
                    <tr>
                      <td className="eq">τ = m / c</td>
                      <td>Time embodied as mass</td>
                      <td><strong>Honey = hive’s body of work</strong> (bee-hours crystallized into food)</td>
                    </tr>
                    <tr>
                      <td className="eq">E = c³ τ</td>
                      <td>Energy re-emerges from temporal substrate</td>
                      <td><strong>Honey fuels life</strong> — stored τ becomes usable energy when eaten</td>
                    </tr>
                    <tr>
                      <td className="eq">m = c τ</td>
                      <td>Mass arising from time substrate</td>
                      <td><strong>Honey = the weight of time</strong> (every jar is layered cycles)</td>
                    </tr>
                    <tr>
                      <td className="eq">E = m c²</td>
                      <td>Mass–energy equivalence</td>
                      <td><strong>Honey = compressed sun + flower + bee</strong> (mass infused with solar energy)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card half panel">
                <h2 style={{ margin: "0 0 10px" }}>Recursive Emergence</h2>
                <div className="flow" aria-label="Process flow Nectar to Honey">
                  <span className="node">Nectar <span className="eq">(E)</span></span>
                  <span className="arrow">⟶</span>
                  <span className="node">Bees as operators <span className="eq">(… , c)</span></span>
                  <span className="arrow">⟶</span>
                  <span className="node"><span className="tau">Honey (τ)</span></span>
                  <span className="arrow">⟶</span>
                  <span className="node">Winter survival</span>
                  <span className="arrow">⟶</span>
                  <span className="node">Spring foraging ↑ E</span>
                </div>
                <p className="sub" style={{ marginTop: 10 }}>
                  Each cycle adds stability—τ accumulates, enabling the next cycle.
                </p>
              </div>

              <div className="card half panel">
                <h2 style={{ margin: "0 0 10px" }}>Practical Use in Illumina</h2>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li><span className="pill">Honey token</span> Mark <em>stored effort</em> events in 42-day cycles.</li>
                  <li><span className="pill">Milk + Honey</span> Milk = nurture/growth; Honey = preservation/continuity.</li>
                  <li><span className="pill">Lunar cadence</span> Log “τ-gains” at full/new-moon checkpoints.</li>
                </ul>
                <div className="callout" style={{ marginTop: 14 }}>
                  <div className="badge">Tip</div>
                  <div>In notes, prefix stored-work lines with <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace" }}>🍯:</span> to tag τ events.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="panel" style={{ marginTop: 20, padding: 20 }}>
            <h2 style={{ margin: "0 0 8px" }}>Links</h2>
            <div className="actions">
              <a className="btn" href="/" aria-label="Back to Boop home">⟵ Back to Boop</a>
              <a className="btn" href="https://honey.plnt.earth" rel="noopener" aria-label="Open honey.plnt.earth">🍯 honey.plnt.earth</a>
            </div>
          </section>

          <footer>
            Standalone route · No external assets · Keyboard-accessible · Resize-responsive
          </footer>
        </main>

        <style>{`
          :root{
            --bg:#0B0F19; --bg-2:#101624; --grid:#1a2236; --text:#E5E7EB; --muted:#9CA3AF;
            --accent:#F5B301; --accent-2:#FFE27A; --pulse:#7C3AED; --aura:#00E5FF; --ok:#10B981;
            --warn:#F59E0B; --danger:#EF4444; --radius:16px;
            --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace;
            --sans: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Inter,system-ui,Arial,sans-serif;
            --shadow: 0 10px 35px rgba(0,0,0,.45), inset 0 1px 0 rgba(255,255,255,.04);
          }
          *{box-sizing:border-box}
          html,body{height:100%}
          body{
            margin:0; font-family:var(--sans); color:var(--text); background:var(--bg);
            -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; letter-spacing:.1px;
            background:
              radial-gradient(1200px 700px at 85% -10%, rgba(124,58,237,.22), transparent 60%),
              radial-gradient(900px 600px at -10% 110%, rgba(0,229,255,.18), transparent 55%),
              repeating-linear-gradient(0deg, transparent 0 28px, rgba(26,34,54,.5) 28px 29px),
              repeating-linear-gradient(90deg, transparent 0 28px, rgba(26,34,54,.5) 28px 29px),
              var(--bg-2);
          }
          a{color:var(--accent); text-decoration:none}
          a:focus-visible, button:focus-visible, [role="tab"]:focus-visible{outline:2px solid var(--aura); outline-offset:2px}
          .wrap{max-width:1080px; margin:0 auto; padding:20px}
          header{
            position:sticky; top:0; z-index:10;
            backdrop-filter: blur(8px);
            background:linear-gradient(180deg, rgba(11,15,25,.85), rgba(11,15,25,.55));
            border-bottom:1px solid rgba(255,255,255,.06);
          }
          .brand{display:flex; align-items:center; gap:14px; padding:8px 0}
          .logo{
            width:40px; height:40px; border-radius:50%;
            background:
              radial-gradient(70% 70% at 30% 30%, var(--accent-2), var(--accent) 60%, #b27600 100%);
            box-shadow:0 0 36px rgba(245,179,1,.35), inset 0 0 8px rgba(255,255,255,.35);
            position:relative; isolation:isolate;
          }
          .logo:after{
            content:""; position:absolute; inset:0; border-radius:50%;
            background:conic-gradient(from 0deg, transparent 0 60deg, rgba(0,0,0,.18) 60deg 120deg, transparent 120deg 180deg,
                                                 rgba(0,0,0,.18) 180deg 240deg, transparent 240deg 300deg, rgba(0,0,0,.18) 300deg 360deg);
            mix-blend-mode:soft-light; mask: radial-gradient(70% 70% at 50% 50%, black 54%, transparent 55%);
          }
          h1{margin:0; font-size: clamp(24px, 3.2vw, 40px); font-weight:800}
          .sub{color:var(--muted); font-size:14px}
          main{padding:28px 0 60px}
          .panel{
            background:linear-gradient(180deg, rgba(14,20,35,.9), rgba(16,22,38,.9));
            border:1px solid rgba(255,255,255,.06);
            border-radius:var(--radius); box-shadow:var(--shadow);
          }
          .hero{padding:24px; display:grid; gap:12px}
          .tag{
            align-self:start; display:inline-flex; gap:10px; align-items:center;
            font-size:12px; letter-spacing:.35px; text-transform:uppercase;
            background:rgba(245,179,1,.12); color:var(--accent);
            border:1px solid rgba(245,179,1,.35); padding:6px 12px; border-radius:999px;
          }
          .grid{display:grid; gap:20px; grid-template-columns:repeat(12,1fr)}
          .card{grid-column:span 12; padding:20px}
          @media (min-width:880px){ .half{grid-column:span 6} }
          .equations{
            width:100%; border-collapse:separate; border-spacing:0;
            overflow:hidden; border-radius:12px; border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.02)
          }
          .equations thead th{
            text-align:left; font-size:12px; letter-spacing:.4px; text-transform:uppercase; color:var(--muted);
            padding:14px 16px; background:rgba(255,255,255,.03);
            border-bottom:1px solid rgba(255,255,255,.06)
          }
          .equations td{padding:16px; vertical-align:top; border-bottom:1px dashed rgba(255,255,255,.06)}
          .equations tr:last-child td{border-bottom:none}
          .eq{font-family:var(--mono); font-feature-settings:"tnum","ss01"; font-size:15px}
          .tau{
            font-weight:800; letter-spacing:.5px;
            background: linear-gradient(90deg, var(--accent), var(--accent-2));
            -webkit-background-clip:text; background-clip:text; color:transparent;
            text-shadow: 0 0 22px rgba(245,179,1,.25);
          }
          .flow{display:flex; flex-wrap:wrap; gap:12px; align-items:center; font-family:var(--mono)}
          .node{padding:10px 12px; border-radius:10px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08)}
          .arrow{opacity:.75}
          .badge{
            display:inline-flex; gap:8px; align-items:center; padding:8px 10px; border-radius:10px;
            background:rgba(124,58,237,.12); color:#ceb9ff; border:1px solid rgba(124,58,237,.35); font-size:13px
          }
          .pill{
            display:inline-flex; align-items:center; gap:8px; padding:7px 10px; border-radius:999px;
            background:rgba(245,179,1,.12); border:1px solid rgba(245,179,1,.35); color:var(--accent); font-size:12px
          }
          .callout{
            display:flex; gap:14px; align-items:flex-start; padding:14px; border-radius:12px;
            background:linear-gradient(180deg, rgba(16,185,129,.12), rgba(16,185,129,.06));
            border:1px solid rgba(16,185,129,.35)
          }
          .actions{display:flex; gap:10px; flex-wrap:wrap}
          .btn{
            display:inline-flex; align-items:center; gap:10px; padding:10px 14px; border-radius:12px;
            background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.10); color:var(--text);
            text-decoration:none; font-weight:600; transition:transform .08s ease;
          }
          .btn:hover{transform:translateY(-1px)}
          footer{margin-top:22px; padding:16px 20px; color:var(--muted); font-size:12px; border-top:1px solid rgba(255,255,255,.06)}
        `}</style>
      </body>
    </html>
  );
}
