const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document
  .querySelector('[data-js="city-temperature"]')
const timeIcon = document.querySelector('[data-js="time-icon"]')
const cityCard = document.querySelector('[data-js="city-card"]')

let cityTime = document.querySelector('[data-js="time"]')

const showWeatherDetails = (LocalizedName, WeatherText, Temperature) => {
  cityNameContainer.textContent = LocalizedName
  cityWeatherContainer.textContent = WeatherText
  cityTemperatureContainer.textContent = Temperature.Metric.Value
}

const insertIconDayOrNight = (elem, icon) => elem.src = `./src/${icon}.svg`

const insertIconAndImage = (IsDayTime, WeatherIcon) => {
  IsDayTime ? insertIconDayOrNight(cityTime, 'day') : insertIconDayOrNight(cityTime, 'night')
  timeIcon.innerHTML = `<img src="./src/icons/${WeatherIcon}.svg" />`
}

const removeClassName = () => {
  const isDnone = cityCard.classList
  if (isDnone.contains('d-none')) {
    isDnone.remove('d-none')
  }
}

cityForm.addEventListener('submit', async event => {
  event.preventDefault()
  const inputValue = event.target.city.value

  const [{ Key, LocalizedName }] = await getCityData(inputValue)
  const [{ WeatherText, WeatherIcon, IsDayTime, Temperature }] = await getCityWeather(Key)

  insertIconAndImage(IsDayTime, WeatherIcon)
  removeClassName()
  showWeatherDetails(LocalizedName, WeatherText, Temperature)

  cityForm.reset()
})

