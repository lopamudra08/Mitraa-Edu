export default function PrincipalHome() {
  return (
  <div className="fade-in">
  <h1 className="page-title">Academic Overview</h1>
  <p className="page-subtitle">Main Campus · Principal Dashboard</p>
  <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
  <div className="stat-card"><div className="stat-value">1,245</div><div className="stat-label">Total Students</div></div>
  <div className="stat-card"><div className="stat-value">68</div><div className="stat-label">Teaching Staff</div></div>
  <div className="stat-card"><div className="stat-value">94%</div><div className="stat-label">Avg Attendance</div></div>
  <div className="stat-card"><div className="stat-value">3</div><div className="stat-label">Open Grievances</div></div>
  </div>
  <div className="grid-2">
  <div className="card"><h3>Syllabus Progress</h3><p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>Overall curriculum plan vs actual: 78% on track</p></div>
  <div className="card"><h3>Pending Approvals</h3><p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>2 Staff · 1 Exam · 1 Other</p></div>
  </div>
  </div>
  )
}
