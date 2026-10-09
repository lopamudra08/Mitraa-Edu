export default function StudentPerformance() {
  const subjects = [
    { name: 'Mathematics', score: 78, gap: 'Quadratic applications', color: 'var(--warning)' },
    { name: 'Science', score: 85, gap: 'Chemical equations', color: 'var(--success)' },
    { name: 'English', score: 82, gap: 'Essay structure', color: 'var(--success)' },
    { name: 'History', score: 70, gap: 'Timeline events', color: 'var(--danger)' },
    { name: 'Hindi', score: 88, gap: '—', color: 'var(--success)' },
  ]
  return (
    <div>
      <h1 className="page-title">My Performance</h1>
      <p className="page-subtitle">Progress & Analytics · Learning Gaps</p>
      <div className="grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1rem' }}>Subject-wise Scores</h3>
          {subjects.map((s, i) => (
            <div key={s.name} className={`fade-in-up stagger-${i + 1}`} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                <span>{s.name}</span><span style={{ fontWeight: 600 }}>{s.score}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{
                    width: `${s.score}%`,
                    background: s.color,
                    animationDelay: `${0.1 * i}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="card fade-in-right">
          <h3 style={{ marginBottom: '1rem' }}>Learning Gaps</h3>
          {subjects.filter(s => s.gap !== '—').map((s, i) => (
            <div
              key={s.name}
              className={`fade-in-up stagger-${i + 1}`}
              style={{ padding: '0.75rem', background: '#fef3c7', borderRadius: 8, marginBottom: '0.5rem', fontSize: '0.875rem' }}
            >
              <strong>{s.name}:</strong> {s.gap}
            </div>
          ))}
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '1rem' }}>
            Recommended: Focus practice papers on identified gaps via PracticePod.
          </p>
        </div>
      </div>
    </div>
  )
}
