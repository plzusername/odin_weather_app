import returnweatherObject from "./fetchAPIdata";

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("button");

  async function updateDom(zipCode) {
    const APIdata = await returnweatherObject(zipCode);

    const temperatureDisplay = document.querySelector(".currTemp-display");
    const reigonDisplay = document.querySelector(".reigon-display");
    const skyStatusDisplay = document.querySelector(".sky-status-display");
    const humidityDisplay = document.querySelector(".humidity-display");
    const minTempDisplay = document.querySelector(".minTemp-display");
    const maxTempDisplay = document.querySelector(".maxTemp-display");
    const skyImage = document.querySelector(".sky-icon");

    temperatureDisplay.textContent = `${APIdata.temperature}°`;
    reigonDisplay.textContent = `${APIdata.reigon}`;
    skyStatusDisplay.textContent = `${APIdata.skyStatus} skies`;
    humidityDisplay.textContent = `Humidity: ${APIdata.humidity}%`;
    minTempDisplay.textContent = `Min: ${APIdata.minTemp}°`;
    maxTempDisplay.textContent = `Max: ${APIdata.maxTemp}°`;
    skyImage.src = APIdata.skyStatusImage;
  }
  const zipCodeValue = document.querySelector("input").value;

  submitButton.addEventListener("click", () => {
    updateDom(zipCodeValue);
  });
  updateDom(11592);
});
