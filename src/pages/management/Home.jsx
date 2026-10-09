export default function ManagementHome() {
  return (
  <div className="fade-in">
  <h1 className="page-title">Institution Overview</h1>
  <p className="page-subtitle">Multi-campus · Trustee Dashboard</p>
  <div className="grid-4" style={{ marginBottom: '1.5rem' }}>
  <div className="stat-card"><div className="stat-value">4</div><div className="stat-label">Campuses</div></div>
  <div className="stat-card"><div className="stat-value">4,820</div><div className="stat-label">Total Students</div></div>
  <div className="stat-card"><div className="stat-value">₹2.4Cr</div><div className="stat-label">Fee Collection (MTD)</div></div>
  <div className="stat-card"><div className="stat-value">12</div><div className="stat-label">Open Escalations</div></div>
  </div>
  </div>
  )
}
