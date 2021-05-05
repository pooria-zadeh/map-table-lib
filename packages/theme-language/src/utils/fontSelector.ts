import { LangString } from "../types";

const fontSelector = (lang: LangString) => {
  let fontArray = [];
  switch (lang) {
    case "en":
      fontArray = ["Roboto", "Arial", "sans-serif"];
      break;
    case "fa":
      fontArray = ["Vazir", "Arial", "Roboto"];
      break;
    default:
      fontArray = ["Roboto", "Arial", "sans-serif"];
      break;
  }
  return fontArray.join(",");
};

export default fontSelector;