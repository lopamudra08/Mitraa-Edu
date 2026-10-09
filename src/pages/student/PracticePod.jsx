import { useState } from 'react'
import { PRACTICE_PAPERS } from '../../data/mockData'
export default function StudentPracticePod() {
  const [papers, setPapers] = useState(PRACTICE_PAPERS)
  const generate = () => {
    setPapers(p => [{ id: 'PP'+Date.now(), title: 'Custom Practice Paper', subject: 'Mathematics', questions: 15, difficulty: 'medium', attempts: 0 }, ...p])
    alert('Practice paper generated!')
  }
  const attempt = (id) => {
    setPapers(p => p.map(x => x.id === id ? { ...x, attempts: x.attempts + 1, bestScore: Math.max(x.bestScore || 0, 60 + Math.floor(Math.random()*35)) } : x))
    alert('Practice attempt recorded.')
  }
  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div><h1 className="page-title">PracticePod</h1><p className="page-subtitle" style={{margin:0}}>Generate · Attempt · View Solutions</p></div>
        <button className="btn btn-primary" onClick={generate}>+ Generate Practice Paper</button>
      </div>
      <div className="grid-2">
        {papers.map(p => (
          <div key={p.id} className="card">
            <h3 style={{ fontSize: '1rem' }}>{p.title}</h3>
            <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: '0.5rem 0' }}>{p.subject} · {p.questions} Qs · {p.difficulty}</div>
            <div style={{ fontSize: '0.8125rem', marginBottom: '0.75rem' }}>Attempts: {p.attempts}{p.bestScore != null && ` · Best: ${p.bestScore}%`}</div>
            <button className="btn btn-primary btn-sm" onClick={() => attempt(p.id)}>Attempt & View Solutions</button>
          </div>
        ))}
      </div>
    </div>
  )
}
