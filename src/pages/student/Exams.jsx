import { EXAMS } from '../../data/mockData'
export default function StudentExams() {
  return (
  <div className="fade-in">
  <h1 className="page-title">Examinations</h1>
  <p className="page-subtitle">View schedule, attempt exams (as per time), view results</p>
  <div className="grid-2">
  {EXAMS.map(e => (
  <div key={e.id} className="card">
  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
  <h3 style={{ fontSize: '1rem' }}>{e.name}</h3>
  <span className={`badge badge-${e.status === 'result-published' ? 'success' : 'info'}`}>{e.status}</span>
  </div>
  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{e.subject} · {e.date} · {e.duration}</div>
  <div style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Max: {e.maxMarks}{e.obtainedMarks != null && ` · Obtained: ${e.obtainedMarks}`}</div>
  <div style={{ marginTop: '1rem' }}>
  {e.status === 'upcoming' && <button className="btn btn-outline btn-sm" disabled>Attempt (opens on exam day)</button>}
  {e.status === 'result-published' && <button className="btn btn-primary btn-sm" onClick={() => alert(`Result: ${e.obtainedMarks}/${e.maxMarks}`)}>View Results</button>}
  </div>
  </div>
  ))}
  </div>
  </div>
  )
}
