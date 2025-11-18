export default function CityTabs({items,active,onPick,onDel}){
  if(!items.length) return null
  return (
    <div className="tabs">
      {items.map(c=>(
        <div key={c} className={`tab ${c===active?"active":""}`}>
          <span onClick={()=>onPick(c)} style={{cursor:"pointer"}}>{c}</span>
          <span className="badge" onClick={()=>onDel(c)} style={{cursor:"pointer"}}>✕</span>
        </div>
      ))}
    </div>
  )
}
