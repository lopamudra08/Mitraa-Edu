import { useState } from 'react'
export default function TeacherAssignments() {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div><h1 className="page-title">Assignment Engine</h1><p className="page-subtitle" style={{margin:0}}>Create · Schedule · Publish · Evaluate</p></div>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>+ Create Assignment</button>
      </div>
      {showForm && (
        <div className="card" style={{ marginBottom: '1rem' }}>
          <div className="form-group"><label className="form-label">Title</label><input className="form-input" placeholder="Assignment title" /></div>
          <div className="form-group"><label className="form-label">Subject / Class</label><input className="form-input" defaultValue="Mathematics · 10-A" /></div>
          <div className="form-group"><label className="form-label">Due Date</label><input className="form-input" type="date" /></div>
          <div className="form-group"><label className="form-label">Max Marks</label><input className="form-input" type="number" defaultValue={20} /></div>
          <button className="btn btn-primary" onClick={() => { alert('Assignment created & published'); setShowForm(false) }}>Schedule & Publish</button>
        </div>
      )}
      <div className="card">
        <p style={{ fontSize: '0.875rem' }}>Recent: Quadratic Equations Worksheet · 10-A · Due 12 Oct · 8/32 submitted</p>
        <button className="btn btn-outline btn-sm" style={{ marginTop: '0.5rem' }} onClick={() => alert('View submissions & evaluate')}>View Submissions · Evaluate & Give Feedback</button>
      </div>
    </div>
  )
}
