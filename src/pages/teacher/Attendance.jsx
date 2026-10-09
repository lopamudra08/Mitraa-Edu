import { useState } from 'react'
const students = ['Aarav Sharma', 'Diya Patel', 'Rohan Mehta', 'Ananya Singh', 'Kabir Joshi']
export default function TeacherAttendance() {
  const [records, setRecords] = useState(students.map(s => ({ name: s, status: 'present' })))
  const toggle = (i, status) => setRecords(r => r.map((x, idx) => idx === i ? { ...x, status } : x))
  return (
    <div className="fade-in">
      <h1 className="page-title">Attendance</h1>
      <p className="page-subtitle">Mark Attendance · View Records</p>
      <div className="card" style={{ padding: 0 }}>
        <table>
          <thead><tr><th>Student</th><th>Present</th><th>Absent</th><th>Late</th></tr></thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                <td><input type="radio" name={`att-${i}`} checked={r.status==='present'} onChange={() => toggle(i,'present')} /></td>
                <td><input type="radio" name={`att-${i}`} checked={r.status==='absent'} onChange={() => toggle(i,'absent')} /></td>
                <td><input type="radio" name={`att-${i}`} checked={r.status==='late'} onChange={() => toggle(i,'late')} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '1rem' }}><button className="btn btn-primary" onClick={() => alert('Attendance saved!')}>Save Attendance</button></div>
      </div>
    </div>
  )
}
