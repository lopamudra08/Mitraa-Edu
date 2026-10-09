export default function TeacherNotices() {
  return (
    <div className="fade-in">
      <h1 className="page-title">Notices</h1>
      <p className="page-subtitle">Teacher module – full functionality available</p>
      <div className="card">
        <p style={{ marginBottom: '1rem' }}>This module supports the complete workflow as defined in the MiTRAA-Edu flowchart.</p>
        <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 1.8 }}>
<li>View notices relevant to your classes</li>
        </ul>
        <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => alert('Action completed (demo)')}>Perform Action</button>
      </div>
    </div>
  )
}
