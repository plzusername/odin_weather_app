import createElement from "../createElement";

export default function generateFooter() {
  const githubIcon = createElement(
    { class: "github-icon fa-brands fa-github" },
    "i",
    []
  );
  const githubUserName = createElement(
    { class: "github-username" },
    "p",
    [],
    "Mofris"
  );
  const linkSection = createElement(
    { class: "link-section", href: "https://github.com/plzusername" },
    "a",
    [githubIcon, githubUserName]
  );
  const footerSection = createElement({ class: "footer-container" }, "div", [
    linkSection,
  ]);

  return footerSection;
}
