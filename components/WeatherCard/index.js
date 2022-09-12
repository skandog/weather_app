import { WiCloudyGusts } from "react-icons/wi"

const WeatherCard = ({ children }) => {
  return (
    <div className="weather-container">
    <div className="weather-card">
      <WiCloudyGusts className="weather-icon" />
      <span>Monday</span>
      <span>12 Sept</span>
      <span>Cloudy/Gusts</span>
      <span>24deg</span>
    </div>
  </div>
  )
}

export default WeatherCard
