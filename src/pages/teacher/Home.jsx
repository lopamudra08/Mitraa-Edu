export default function TeacherHome() {
  return (
    <div className="fade-in">
      <h1 className="page-title">Welcome, Priya Verma</h1>
      <p className="page-subtitle">Mathematics · Class 10-A, 9-B</p>
      <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
        <div className="stat-card"><div className="stat-value">2</div><div className="stat-label">Classes Today</div></div>
        <div className="stat-card"><div className="stat-value">5</div><div className="stat-label">Pending Evaluations</div></div>
        <div className="stat-card"><div className="stat-value">3</div><div className="stat-label">Parent Queries</div></div>
        <div className="stat-card"><div className="stat-value">92%</div><div className="stat-label">Avg Attendance</div></div>
      </div>
      <div className="card"><h3>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => alert('Mark Attendance')}>Mark Attendance</button>
          <button className="btn btn-outline" onClick={() => alert('Create Assignment')}>Create Assignment</button>
          <button className="btn btn-outline" onClick={() => alert('Create Exam')}>Create Exam</button>
        </div>
      </div>
    </div>
  )
}
