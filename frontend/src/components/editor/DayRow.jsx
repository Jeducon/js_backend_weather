export default function DayRow({i,d,setDay}) {
  return (
    <div className="card" style={{padding:10}}>
      <input value={d.day}  onChange={e=>setDay(i,{day:e.target.value})} />
      <input value={d.temp} onChange={e=>setDay(i,{temp:+e.target.value})} />
      <input value={d.desc} onChange={e=>setDay(i,{desc:e.target.value})} />
      <input value={d.icon} onChange={e=>setDay(i,{icon:e.target.value})} />
    </div>
  )
}

