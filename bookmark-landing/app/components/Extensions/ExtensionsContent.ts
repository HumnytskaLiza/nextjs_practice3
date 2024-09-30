import logoChrome from "../../../public/logo-chrome.svg";
import logoFirefox from "../../../public/logo-firefox.svg";
import logoOpera from "../../../public/logo-opera.svg";

type extensionsContentType = {
  "extension-id": string;
  "extension-header": string;
  "extension-version": string;
  "extension-img": HTMLImageElement;
};

const extensionsContent: extensionsContentType[] = [
  {
    "extension-id": "Chrome",
    "extension-header": "Add to Chrome",
    "extension-version": "Minimum version 62",
    "extension-img": logoChrome,
  },
  {
    "extension-id": "Firefox",
    "extension-header": "Add to Firefox",
    "extension-version": "Minimum version 55",
    "extension-img": logoFirefox,
  },
  {
    "extension-id": "Opera",
    "extension-header": "Add to Opera",
    "extension-version": "Minimum version 46",
    "extension-img": logoOpera,
  },
];

export default extensionsContent;
