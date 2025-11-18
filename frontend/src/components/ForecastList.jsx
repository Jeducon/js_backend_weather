export default function ForecastList({ forecast }) {
  return (
    <div className="card">
      <h3>Forecast</h3>
      <div className="fcgrid">
        {forecast.map((f, i) => (
          <div key={i} className="card" style={{ padding: 10 }}>
            <div>{f.time}</div>
            <div style={{ fontWeight: "bold" }}>{f.temp}°C</div>
            <div>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

