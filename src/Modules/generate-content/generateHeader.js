import createElement from "../createElement";

export default function generateHeader() {
  const ZIPinput = createElement(
    { class: "ZIP-input", id: "ZIPid", placeholder: "90210" },
    "input",
    [],
    ""
  );
  const zipErorr = createElement(
    { class: "zip-error" },
    "div",
    [],
    "Unable to locate ZIP code"
  );
  const ZIPlabel = createElement(
    { class: "ZIP-label", for: "ZIPid" },
    "label",
    [],
    "ZIP code: "
  );
  const ZIPsubmitButton = createElement(
    { class: "ZIP-submit" },
    "button",
    [],
    "Submit"
  );

  const logoHeader = createElement(
    { class: "header-logo" },
    "h1",
    [],
    "Weather"
  );
  const ZIPsearchSection = createElement(
    { class: "ZIP-search-container" },
    "div",
    [ZIPlabel, ZIPinput, ZIPsubmitButton, zipErorr]
  );

  const headerSection = createElement({ class: "header-container" }, "div", [
    logoHeader,
    ZIPsearchSection,
  ]);

  return headerSection;
}
