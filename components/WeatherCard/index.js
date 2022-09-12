const WeatherCard = ({ children }) => {
  return (
    <div className="weather-container">
      <div className="weather-card">{children}</div>
    </div>
  )
}

export default WeatherCard
