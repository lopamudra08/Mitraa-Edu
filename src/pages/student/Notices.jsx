import { NOTICES } from '../../data/mockData'
export default function StudentNotices() {
  return (
    <div className="fade-in">
      <h1 className="page-title">Notices</h1>
      <p className="page-subtitle">School & class notices</p>
      <div className="card">
        {NOTICES.map(n => (
          <div key={n.id} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 500 }}>{n.title}</div>
              <span className={`badge badge-${n.priority === 'high' ? 'danger' : n.priority === 'medium' ? 'warning' : 'muted'}`}>{n.priority}</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{n.date} · {n.from}</div>
            <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>{n.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
