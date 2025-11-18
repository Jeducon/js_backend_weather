const opts = ["all","Clear","Cloud","Rain","Snow","Thunder"]

export default function FilterBar({ value, onChange }) {
  return (
    <div className="controls" style={{gap:8,display:"flex",flexWrap:"wrap"}}>
      {opts.map(k=>(
        <button
          key={k}
          onClick={()=>onChange(k)}
          style={{borderColor: value===k ? "#6aa1ff" : "#1c2846"}}
        >{k}</button>
      ))}
    </div>
  )
}
