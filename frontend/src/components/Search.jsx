import { useState } from "react"

export default function Search({ onAdd }) {
  const [val, setVal] = useState("")
  const add = () => {
    if (!val.trim()) return
    onAdd(val.trim())
    setVal("")
  }
  return (
    <div className="controls">
      <input
        placeholder="Enter city"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && add()}
      />
      <button onClick={add}>Search</button>
    </div>
  )
}
