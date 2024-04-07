import createElement from "../createElement";

export default function generateMain() {
  const humidity = createElement(
    { class: "humidity-display" },
    "p",
    [],
    "sPlaceHlder"
  );
  const minTemp = createElement(
    { class: "minTemp-display" },
    "p",
    [],
    "PlaceHlder"
  );
  const maxTemp = createElement(
    { class: "maxTemp-display" },
    "p",
    [],
    "PlaceHlder"
  );
  const skyIcon = createElement({ class: "sky-icon" }, "img", [], "");
  const currTemp = createElement(
    { class: "currTemp-display" },
    "div",
    [],
    "'PlaceHlder"
  );
  const reigonDisplay = createElement(
    { class: "reigon-display" },
    "p",
    [],
    "'PlaceHlder"
  );
  const skyStatusDisplay = createElement(
    { class: "sky-status-display" },
    "p",
    [],
    "'PlaceHlder"
  );
  const advancedInfoContainer = createElement(
    { class: "advanced-weather-info" },
    "div",
    [humidity, minTemp, maxTemp, skyIcon],
    "'PlaceHlder"
  );
  const weatherInfoCard = createElement(
    { class: "weather-card-container" },
    "div",
    [currTemp, reigonDisplay, skyStatusDisplay, advancedInfoContainer],
    ""
  );

  const mainSection = createElement({ class: "main-section" }, "div", [
    weatherInfoCard,
  ]);

  return mainSection;
}
