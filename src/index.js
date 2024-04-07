import generateHeader from "./Modules/generate-content/generateHeader";
import generateMain from "./Modules/generate-content/generateMain";

const header = generateHeader();
const main = generateMain();

document.body.appendChild(header);
document.body.appendChild(main);
