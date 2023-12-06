let weatherApiKey = process.env.OPENWEATHERMAP_API_KEY;

const weatherData = async (location) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}&units=metric`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return {
    data,
    location: data?.name,
    temperature: data?.main.temp,
    description: data?.weather[0].description,
    icon: data?.weather[0].icon,
  };
};
module.exports = weatherData;
