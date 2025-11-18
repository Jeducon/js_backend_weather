export const iconUrl = c => `https://openweathermap.org/img/wn/${c}@2x.png`
export const fmtDT = (unix, tz, mode="t") => {
  const d=new Date((unix+(tz||0))*1000)
  const o={hour:"2-digit",minute:"2-digit"}
  const dopt={month:"short",day:"2-digit",hour:"2-digit"}
  return new Intl.DateTimeFormat("en-GB", mode==="t"?o:dopt).format(d)
}
export const k2 = k => Math.round(k-273.15)
