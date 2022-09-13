import { useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard'

import dummy from '../lib/dummy'

const Page = () => {
  const [data, setdata] = useState(dummy[0])
  const [fiveday, setFiveday] = useState([])
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('london')

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      const inputBox = document.getElementById('inputbox')

      setCity(search)
      // 👇️ clear input field
      inputBox.value = ''

      //dev feedback only remove
      //console.log(inputFoodBank);
    }
  }

  function handleClick(e) {
    e.preventDefault()
    const inputBox = document.getElementById('inputbox')

    setCity(search)
    // window.scrollTo(0, 1500)

    // 👇️ clear input field
    inputBox.value = ''
  }

  useEffect(() => {
    async function FetchPage() {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
      )
      let json = await response.json()
      console.log(json)
      setdata(json)
    }
    FetchPage()
  }, [city])
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
      let temp = Math.floor(main.temp)
      let img = entry.weather[0].icon
      let weather = entry.weather[0].main
      return {
        day: day,
        date: date,
        month: month,
        year: year,
        temp: temp,
        img: img,
        weather: weather
      }
    })
    console.log('sorted :>> ', sort)
    setFiveday([sort[0], sort[7], sort[15], sort[23], sort[31]])
  }, [data])

  return (
    <div className="site-container">
      <span className="header">
        <h1 className="location">{data.city.name}</h1>
        <h2 className="mode">Five Day Forecast</h2>
      </span>
      <div className="weather-container">
        {fiveday.map(item => {
          return (
            <WeatherCard
              day={item.day}
              date={item.date}
              month={item.month}
              img={item.img}
              weather={item.weather}
              temp={item.temp}
            />
          )
        })}
      </div>
      <footer>
        <h3>Search another location</h3>
        <input
          id="inputbox"
          onChange={e => {
            handleChange(e)
          }}
          onKeyPress={e => {
            handleEnter(e)
          }}
        ></input>
      </footer>
    </div>
  )
}

export default Page
