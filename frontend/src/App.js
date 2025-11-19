import { useEffect, useMemo, useState } from "react"
import "./index.css"
import Search from "./components/Search"
import WeatherCard from "./components/WeatherCard"
import WeekForecast from "./components/WeekForecast"
import FilterBar from "./components/FilterBar"
import WeatherEditor from "./components/editor/Editor"

const API_URL = "https://js-backend-weather.onrender.com/weather"

const load = (k) => {
  try {
    return JSON.parse(localStorage.getItem(k))
  } catch {
    return null
  }
}
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v))

export default function App() {
  const [cities, setCities] = useState([])
  const [city, setCity] = useState("")
  const [flt, setFlt] = useState("all")
  const [edit, setEdit] = useState(false)
  const [loading, setLoading] = useState(true)

  const all = useMemo(
    () => Object.fromEntries(cities.map((c) => [c.name, c])),
    [cities]
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL)
        const data = await res.json()
        setCities(data)

        const last = load("lastCity")
        const initial =
          last && data.some((c) => c.name === last)
            ? last
            : data[0]?.name || ""
        if (initial) setCity(initial)
      } catch (e) {
        console.error("Load error", e)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const data = city && all[city] ? all[city] : null
  const list = Object.keys(all).sort()

  const pick = (c) => {
    if (all[c]) {
      setCity(c)
      save("lastCity", c)
    }
  }

  const onSave = async (nameInput, payload) => {
  if (!nameInput?.trim()) return
  const n = nameInput.trim()

  
  const { _id, name, ...rest } = payload || {}
  const body = { name: n, ...rest }

  console.log(nameInput);

  try {
    const existing = all[n]  

    let res
    if (existing) {
      
      res = await fetch(`${API_URL}/${existing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
    } else {
      
      res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
    }

    if (!res.ok) {
      console.error("Save error", await res.text())
      return
    }

    const saved = await res.json()

    setCities((prev) => {
      const idx = prev.findIndex((c) => c._id === saved._id)
      if (idx === -1) return [...prev, saved]
      const arr = [...prev]
      arr[idx] = saved
      return arr
    })

    setCity(saved.name)
    save("lastCity", saved.name)
    setEdit(false)
  } catch (e) {
    console.error("Save error", e)
  }
}



  const items =
    !data || !data.forecast7
      ? []
      : flt === "all"
      ? data.forecast7
      : data.forecast7.filter((x) =>
          x.desc.toLowerCase().includes(flt.toLowerCase())
        )

  if (loading) {
    return (
      <div className="wrap">
        <h1>Weather</h1>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="wrap">
      <h1>Weather</h1>

      <div className="controls">
        <Search onAdd={pick} />
        <button onClick={() => setEdit(true)}>Add/Edit city</button>
      </div>

      <div className="tabs">
        {list.map((c) => (
          <div
            key={c}
            className={`tab ${c === city ? "active" : ""}`}
            onClick={() => pick(c)}
            style={{ cursor: "pointer" }}
          >
            {c}
          </div>
        ))}
      </div>

      {data && <WeatherCard city={city} data={data} />}
      <FilterBar value={flt} onChange={setFlt} />
      <WeekForecast items={items} />

      {edit && (
        <WeatherEditor
          initialName={city}
          initialData={data}
          onSave={onSave}
          onClose={() => setEdit(false)}
        />
      )}
    </div>
  )
}


