// Small drawings that stand in for screenshots until real ones exist.
// Colors come from CSS classes (pv-*) in styles.css so they follow the theme.

function NotesPreview() {
  return (
    <>
      <rect className="pv-side" x="0" y="22" width="76" height="158" />
      <rect className="pv-accent" x="12" y="38" width="52" height="8" rx="4" />
      <rect className="pv-line" x="12" y="56" width="42" height="6" rx="3" />
      <rect className="pv-line" x="12" y="72" width="48" height="6" rx="3" />
      <rect className="pv-line" x="12" y="88" width="36" height="6" rx="3" />
      <rect className="pv-card" x="90" y="34" width="100" height="62" rx="8" />
      <rect className="pv-accent" x="100" y="44" width="30" height="8" rx="4" />
      <rect className="pv-line" x="100" y="62" width="78" height="5" rx="2.5" />
      <rect className="pv-line" x="100" y="74" width="60" height="5" rx="2.5" />
      <rect className="pv-card" x="202" y="34" width="100" height="62" rx="8" />
      <rect className="pv-accent2" x="212" y="44" width="30" height="8" rx="4" />
      <rect className="pv-line" x="212" y="62" width="78" height="5" rx="2.5" />
      <rect className="pv-line" x="212" y="74" width="52" height="5" rx="2.5" />
      <rect className="pv-card" x="90" y="108" width="212" height="56" rx="8" />
      <rect className="pv-accent3" x="100" y="118" width="30" height="8" rx="4" />
      <rect className="pv-line" x="100" y="136" width="170" height="5" rx="2.5" />
      <rect className="pv-line" x="100" y="148" width="120" height="5" rx="2.5" />
    </>
  )
}

function HealthPreview() {
  return (
    <>
      <rect className="pv-accent" x="14" y="31" width="14" height="4" rx="2" />
      <rect className="pv-accent" x="19" y="26" width="4" height="14" rx="2" />
      <rect className="pv-line" x="40" y="30" width="60" height="6" rx="3" />
      <rect className="pv-card" x="16" y="52" width="288" height="24" rx="12" />
      <circle className="pv-line" cx="32" cy="64" r="5" />
      <rect className="pv-line" x="46" y="61" width="90" height="6" rx="3" />
      {[0, 1, 2].map((row) => (
        <g key={row} transform={`translate(0 ${row * 32})`}>
          <rect className="pv-card" x="16" y="86" width="288" height="26" rx="8" />
          <circle className={row === 1 ? 'pv-accent2' : 'pv-accent'} cx="34" cy="99" r="8" />
          <rect className="pv-line" x="50" y="94" width="80" height="5" rx="2.5" />
          <rect className="pv-line" x="50" y="104" width="52" height="4" rx="2" />
          <rect className="pv-accent" x="248" y="92" width="44" height="14" rx="7" />
        </g>
      ))}
    </>
  )
}

function PharmacyPreview() {
  const tiles = [0, 1, 2, 3, 4, 5]
  return (
    <>
      <rect className="pv-line" x="14" y="30" width="64" height="6" rx="3" />
      <rect className="pv-accent" x="248" y="26" width="58" height="14" rx="7" />
      {tiles.map((tile) => {
        const x = 16 + (tile % 3) * 98
        const y = 52 + Math.floor(tile / 3) * 62
        return (
          <g key={tile}>
            <rect className="pv-card" x={x} y={y} width="90" height="54" rx="8" />
            <rect
              className={tile % 2 ? 'pv-accent2' : 'pv-accent'}
              x={x + 30}
              y={y + 10}
              width="30"
              height="14"
              rx="7"
              transform={`rotate(-25 ${x + 45} ${y + 17})`}
            />
            <rect className="pv-line" x={x + 12} y={y + 36} width="40" height="5" rx="2.5" />
            <rect className="pv-line" x={x + 12} y={y + 45} width="24" height="4" rx="2" />
          </g>
        )
      })}
    </>
  )
}

const previews = { notes: NotesPreview, health: HealthPreview, pharmacy: PharmacyPreview }

export default function ProjectPreview({ type, label }) {
  const Drawing = previews[type] || NotesPreview
  return (
    <svg className="project-preview" viewBox="0 0 320 180" role="img" aria-label={label}>
      <rect className="pv-bg" width="320" height="180" />
      <rect className="pv-bar" width="320" height="22" />
      <circle className="pv-dot" cx="12" cy="11" r="3" />
      <circle className="pv-dot" cx="23" cy="11" r="3" />
      <circle className="pv-dot" cx="34" cy="11" r="3" />
      <Drawing />
    </svg>
  )
}
