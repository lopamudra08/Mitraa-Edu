export default function ParentHome() {
  return (
  <div className="fade-in">
  <h1 className="page-title">Child Overview</h1>
  <p className="page-subtitle">Select Child · Academic Summary</p>
  <div className="card" style={{ marginBottom: '1rem' }}>
  <label className="form-label">Select Child</label>
  <select className="form-input" style={{ maxWidth: 300 }}><option>Aarav Sharma (Class 10-A)</option></select>
  </div>
  <div className="grid-4">
  <div className="stat-card"><div className="stat-value">86%</div><div className="stat-label">Attendance</div></div>
  <div className="stat-card"><div className="stat-value">B+</div><div className="stat-label">Overall Grade</div></div>
  <div className="stat-card"><div className="stat-value">2</div><div className="stat-label">Pending Assignments</div></div>
  <div className="stat-card"><div className="stat-value">1</div><div className="stat-label">Upcoming Exam</div></div>
  </div>
  </div>
  )
}
