import { iconUrl } from "../utils/icons"

export default function WeatherCard({ city, data }) {
  return (
    <div className="card">
      <h2 style={{display:"flex",alignItems:"center",gap:8}}>
        <img alt="" src={iconUrl(data.icon)} width="40" height="40" />
        {city}
      </h2>
      <div className="big">{data.temp}°C</div>
      <p>{data.desc}</p>
      <div className="meta">
        <span>Feels like: {data.feels}°C</span>
        <span>Humidity: {data.humidity}%</span>
        <span>Wind: {data.wind} m/s</span>
        <span>Pressure: {data.pressure} hPa</span>
      </div>
    </div>
  )
}
