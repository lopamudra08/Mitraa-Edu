export default function StudentDownloads() {
  const files = [
    'NCERT Mathematics Class 10.pdf',
    'Science Lab Manual.pdf',
    'English Literature Notes.pdf',
    'History Timeline Chart.pdf',
  ]
  return (
    <div className="fade-in">
      <h1 className="page-title">Downloads (Study Material)</h1>
      <p className="page-subtitle">Access study materials shared by teachers</p>
      <div className="card">
        {files.map((f) => (
          <div
            key={f}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 0',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <span>📄 {f}</span>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => alert(`Downloading ${f}`)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
