import { WiCloudyGusts } from 'react-icons/wi'

const WeatherCard = ({ children, img, day, date, month, weather, temp }) => {
  return (
    <div className="weather-card">
      <img
        alt="weather-symbol"
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
      />
      {/* <WiCloudyGusts className="weather-icon" /> */}
      <span>{day}</span>
      <span>{date}</span>
      <span>{weather}</span>
      <span>{temp}&deg;c</span>
    </div>
  )
}

export default WeatherCard
