
const WeatherCard = ({ img, day, date, month, weather, temp }) => {
  return (
    <div className="weather-card">
      <img
        alt="weather-symbol"
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
      />
      {/* <WiCloudyGusts className="weather-icon" /> */}
      <span>{day}</span>
      <span>
        {date}, {month}
      </span>
      <span>{weather}</span>
      <span>{temp}&deg;c</span>
    </div>
  )
}

export default WeatherCard
