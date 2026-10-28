const phrases = ['Web development', 'Software development', 'Laravel & Flutter']

export default function RunningText() {
  return (
    <div className="running-text" aria-hidden="true">
      <div className="running-text-track">
        {[0, 1].map((copy) => (
          <div className="running-text-group" key={copy}>
            {phrases.map((phrase) => (
              <span key={phrase}>
                {phrase}
                <b>✳</b>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
