const cloud_Pct = document.getElementById("cloud_pct");
const temperature = document.getElementById("temp");
const feels_Like = document.getElementById("feels_like");
const humid = document.getElementById("humidity");
const min_Temp = document.getElementById("min_temp");
const max_Temp = document.getElementById("max_temp");
const waitingText = document.getElementById("waits");
const btn = document.getElementById("btn");
const submit = document.getElementById("submit");
const cityName = document.getElementById("city-name");
const fetchdata = async (cityname) => {
  cityName.textContent = cityname;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityname}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e4ca162camshac6b0bd49923f58p1ce03ejsn9ead718feac9",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    waitingText.textContent = "";

    const { cloud_pct, temp, feels_like, humidity, min_temp, max_temp } =
      result;
    console.log(result);
    cloud_Pct.textContent = `${cloud_pct}%`;
    temperature.textContent = `${temp}°C`;
    feels_Like.textContent = `${feels_like}°C`;
    humid.textContent = `${humidity}%`;
    min_Temp.textContent = `${min_temp}°C`;
    max_Temp.textContent = `${max_temp}°C`;
  } catch (error) {
    console.error(error);
  }
};
fetchdata("Delhi");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchdata(submit.value);
});
