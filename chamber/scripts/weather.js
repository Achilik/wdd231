const apiKey = "YOUR_API_KEY";
const lat = 6.5244;
const lon = 3.3792;

const currentTemp = document.querySelector("#current-temp");
const weatherDesc = document.querySelector("#weather-desc");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

const temp1 = document.querySelector("#temp1");
const temp2 = document.querySelector("#temp2");
const temp3 = document.querySelector("#temp3");

const currentUrl =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastUrl =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();

    currentTemp.textContent = Math.round(currentData.main.temp);
    weatherDesc.textContent =
      currentData.weather[0].description;

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    const forecastList = forecastData.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    );

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const forecastElements = [
      { day: day1, temp: temp1, data: forecastList[0] },
      { day: day2, temp: temp2, data: forecastList[1] },
      { day: day3, temp: temp3, data: forecastList[2] }
    ];

    forecastElements.forEach(item => {
      const forecastDate = new Date(item.data.dt_txt);

      item.day.textContent =
        days[forecastDate.getDay()];

      item.temp.textContent =
        `${Math.round(item.data.main.temp)}°C`;
    });

  } catch (error) {
    console.error("Weather Error:", error);
  }
}

getWeather();