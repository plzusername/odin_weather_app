function showZIPerror() {
  const errorTime = 2500;
  const zipError = document.querySelector(".zip-error");

  zipError.style.opacity = "1";
  setTimeout(() => {
    zipError.style.opacity = "0";
  }, errorTime);
}

async function loadData(zipValue) {
  try {
    const weatherAPIpromise = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6d6d04d85b4d4f2daa1141051240204&q=${zipValue}`,
      {
        mode: "cors",
      }
    );
    const weatherData = await weatherAPIpromise.json();
    return weatherData;
  } catch (error) {
    console.log("error");
  }
}

export default async function returnweatherObject(zipCode) {
  const dataToBeProcessed = await loadData(zipCode);

  try {
    const processedObject = {
      temperature: Math.round(dataToBeProcessed.current.temp_f),
      reigon: `${dataToBeProcessed.location.name}, ${dataToBeProcessed.location.country}`,
      skyStatus: dataToBeProcessed.current.condition.text,
      humidity: dataToBeProcessed.current.humidity,
      minTemp: Math.round(
        dataToBeProcessed.current.temp_f - (Math.floor(Math.random() * 2) + 1)
      ),
      maxTemp: Math.round(
        dataToBeProcessed.current.temp_f + (Math.floor(Math.random() * 2) + 1)
      ),
      skyStatusImage: `https:${dataToBeProcessed.current.condition.icon}`,
    };
    return processedObject;
  } catch (error) {
    showZIPerror();
  }
}
