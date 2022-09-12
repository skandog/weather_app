import { useEffect, useState } from 'react'
import { WiCloudyGusts } from 'react-icons/wi'
import WeatherCard from '../components/WeatherCard'

import dummy from '../lib/dummy'

const Page = () => {
  const [data, setdata] = useState(dummy[0])
  const [sorted, setSorted] = useState([])
  useEffect(() => {
    async function FetchPage() {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
      )
      let json = await response.json()
      console.log(json)
      setdata(json)
    }
    FetchPage()
  }, [])
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  useEffect(() => {
    let sort = data.list.map(entry => {
      let dt = new Date(entry.dt * 1000)
      let main = entry.main
      let day = weekday[dt.getDay()]
      let date = dt.getDate()
      let month = months[dt.getMonth()]
      let year = dt.getFullYear()
      let temp = main.temp

      return { day: day, date: date, month: month, year: year, temp: temp }
    })
    console.log('sorted :>> ', sort)
    setSorted(sort)
  }, [data])

  // let dt = new Date(data.list[0].dt * 1000)
  // console.log('dt.getDay() :>> ', weekday[dt.getDay()])
  return (
    <div className="site-container">
      <h1>{data.city.name}</h1>
      <WeatherCard />
    </div>
  )
}

export default Page
