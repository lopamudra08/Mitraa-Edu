export default function StudentPTM() {
  return (
    <div className="fade-in">
      <h1 className="page-title">PTM / Meetings</h1>
      <p className="page-subtitle">View scheduled meetings</p>
      <div className="card">
        <p>Next Parent-Teacher Meeting: <strong>12 Oct 2026, 10:00 AM – 1:00 PM</strong></p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Venue: School Auditorium / Online (hybrid)</p>
        <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => alert('Meeting details & notes')}>View Meeting Notes</button>
      </div>
    </div>
  )
}
