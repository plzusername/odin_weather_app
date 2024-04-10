import generateHeader from "./Modules/generate-content/generateHeader";
import generateMain from "./Modules/generate-content/generateMain";
import generateFooter from "./Modules/generate-content/generateFooter";
import "@fortawesome/fontawesome-free/css/all.css";
import "./Modules/styles/main.css";
import "./Modules/updateDOMcard";

const header = generateHeader();
const main = generateMain();
const footer = generateFooter();

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
