import { useEffect, useState } from 'react'

import WeatherCard from '../components/WeatherCard'

const Page = () => {
  const [forecast, setForecast] = useState([])

  useEffect(() => {
    async function FetchPage() {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      )
      let json = await response.json()
      console.log(json)
      setForecast(json)
    }
    FetchPage()
  }, [])

  console.log('forecast.list :>> ', forecast.list[0].dt_txt)
  return <WeatherCard></WeatherCard>
}

export default Page
