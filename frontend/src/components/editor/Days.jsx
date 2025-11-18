import DayRow from "./DayRow"
export default function Days({ items, setDay }) {
  return <div className="fcgrid">{items.map((d, i) => <DayRow key={i} i={i} d={d} setDay={setDay} />)}</div>
}

