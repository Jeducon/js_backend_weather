import { useState } from "react"
import TopForm from "./TopForm"
import Days from "./Days"

const empty={temp:20,feels:20,humidity:50,wind:2,pressure:1013,desc:"Clear",icon:"01d",
  forecast7:[
    {day:"Mon",temp:20,desc:"Clear",icon:"01d"},
    {day:"Tue",temp:20,desc:"Clear",icon:"01d"},
    {day:"Wed",temp:20,desc:"Clear",icon:"01d"},
    {day:"Thu",temp:20,desc:"Clear",icon:"01d"},
    {day:"Fri",temp:20,desc:"Clear",icon:"01d"},
    {day:"Sat",temp:20,desc:"Clear",icon:"01d"},
    {day:"Sun",temp:20,desc:"Clear",icon:"01d"}
  ]
}

export default function WeatherEditor({ initialName="", initialData=null, onSave, onClose }) {
  const [name,setName]=useState(initialName)
  const [form,setForm]=useState(initialData||empty)
  const set=(k,v)=>setForm({...form,[k]:v})
  const setDay=(i,p)=>{const a=[...form.forecast7]; a[i]={...a[i],...p}; setForm({...form,forecast7:a})}
  return (
    <div className="card">
      <h3>Weather editor</h3>
      <TopForm name={name} setName={setName} form={form} set={set} />
      <h4 style={{marginTop:12}}>7-day</h4>
      <Days items={form.forecast7} setDay={setDay} />
      <div className="controls" style={{marginTop:10}}>
        <button onClick={()=>onSave(name,form)}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
