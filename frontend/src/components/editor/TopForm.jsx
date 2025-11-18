export default function TopForm({name,setName,form,set}) {
  return (
    <div className="controls" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:8}}>
      <input placeholder="City name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Temp" value={form.temp} onChange={e=>set("temp",+e.target.value)} />
      <input placeholder="Feels" value={form.feels} onChange={e=>set("feels",+e.target.value)} />
      <input placeholder="Humidity%" value={form.humidity} onChange={e=>set("humidity",+e.target.value)} />
      <input placeholder="Wind m/s" value={form.wind} onChange={e=>set("wind",+e.target.value)} />
      <input placeholder="Pressure" value={form.pressure} onChange={e=>set("pressure",+e.target.value)} />
      <input placeholder="Desc" value={form.desc} onChange={e=>set("desc",e.target.value)} />
      <input placeholder="Icon code" value={form.icon} onChange={e=>set("icon",e.target.value)} />
    </div>
  )
}
