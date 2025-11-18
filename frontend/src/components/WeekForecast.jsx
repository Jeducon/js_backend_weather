import { iconUrl } from "../utils/icons"

export default function WeekForecast({ items }) {
  if (!items?.length) return null
  return (
    <div className="card">
      <h3>7-day forecast</h3>
      <div className="fcgrid">
        {items.map((d, i) => (
          <div key={i} className="card" style={{padding:10,textAlign:"center"}}>
            <div style={{fontWeight:600}}>{d.day}</div>
            <img alt="" src={iconUrl(d.icon)} width="42" height="42" />
            <div style={{fontSize:18,fontWeight:700}}>{Math.round(d.temp)}°C</div>
            <div style={{opacity:.85}}>{d.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
