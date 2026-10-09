import { useState } from 'react'
import { ASSIGNMENTS } from '../../data/mockData'

export default function StudentAssignments() {
  const [list, setList] = useState(ASSIGNMENTS)
  const submit = ( id) => {
  setList(prev => prev.map(a => a.id === id ? { ...a, status: 'submitted' } : a))
  alert('Work submitted successfully!')
  }
  return (
  <div className="fade-in">
  <h1 className="page-title">Assignments</h1>
  <p className="page-subtitle">View, submit and track assignment completion</p>
  <div className="card" style={{ padding: 0 }}>
  <div className="table-wrap">
  <table>
  <thead><tr><th>Title</th><th>Subject</th><th>Due Date</th><th>Status</th><th>Marks</th><th>Action</th></tr></thead>
  <tbody>
  {list.map(a => (
  <tr key={a.id}>
  <td style={{ fontWeight: 500 }}>{a.title}</td>
  <td>{a.subject}</td>
  <td>{a.dueDate}</td>
  <td><span className={`badge badge-${a.status === 'graded' ? 'success' : a.status === 'submitted' ? 'info' : a.status === 'overdue' ? 'danger' : 'warning'}`}>{a.status}</span></td>
  <td>{a.marks != null ? `${a.marks}/${a.maxMarks}` : `—/${a.maxMarks}`}</td>
  <td>
  {(a.status === 'pending' || a.status === 'overdue') && (
  <button className="btn btn-primary btn-sm" onClick={() => submit(a.id)}>Submit Work</button>
  )}
  {a.status === 'submitted' && <button className="btn btn-outline btn-sm" onClick={() => alert('Resubmit allowed if enabled by teacher')}>Resubmit</button>}
  {a.status === 'graded' && <button className="btn btn-outline btn-sm" onClick={() => alert(`Feedback: Good work. Score ${a.marks}/${a.maxMarks}`)}>View Feedback</button>}
  </td>
  </tr>
  ))}
  </tbody>
  </table>
  </div>
  </div>
  </div>
  )
}
