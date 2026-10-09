import { MESSAGES } from '../../data/mockData'
export default function StudentMessages() {
  return (
    <div className="fade-in">
      <h1 className="page-title">Messages (Academic Doubt)</h1>
      <p className="page-subtitle">Message teachers for academic support</p>
      <div className="card">
        {MESSAGES.map(m => (
          <div key={m.id} style={{ padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 500 }}>{m.subject} {!m.read && <span className="badge badge-info">New</span>}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>From: {m.from} · {m.date}</div>
            <p style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>{m.body}</p>
          </div>
        ))}
        <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => alert('Compose message to teacher')}>+ New Message</button>
      </div>
    </div>
  )
}
