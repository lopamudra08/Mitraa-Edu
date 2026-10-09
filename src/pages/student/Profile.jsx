export default function StudentProfile() {
  return (
    <div className="fade-in">
      <h1 className="page-title">My Profile & Settings</h1>
      <p className="page-subtitle">Update personal information</p>
      <div className="card" style={{ maxWidth: 480 }}>
        <div className="form-group"><label className="form-label">Full Name</label><input className="form-input" defaultValue="Aarav Sharma" /></div>
        <div className="form-group"><label className="form-label">Email</label><input className="form-input" defaultValue="aarav@mitraa.edu" /></div>
        <div className="form-group"><label className="form-label">Class</label><input className="form-input" defaultValue="Class 10-A" disabled /></div>
        <div className="form-group"><label className="form-label">Language</label><select className="form-input"><option>English</option><option>Hindi</option></select></div>
        <button className="btn btn-primary" onClick={() => alert('Profile saved')}>Save Changes</button>
      </div>
    </div>
  )
}
