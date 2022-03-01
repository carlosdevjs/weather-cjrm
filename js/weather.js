const APIKey = 'apikey=gwIcqqJX1aolAnaPdLZCwSlCnA5pTrb8'
const baseUrl = 'http://dataservice.accuweather.com'

const getCityUrl = cityName =>
  `${baseUrl}/locations/v1/cities/search?${APIKey}&q=${cityName}`

const getWeatherUrl = cityKey =>
 `${baseUrl}/currentconditions/v1/${cityKey}?${APIKey}&language=pt-br`

const fetchData = async url => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Not possible get the data.')
    }

    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))