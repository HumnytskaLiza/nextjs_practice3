import featuresIllustrationTab1 from "../../../public/illustration-features-tab-1.svg";
import featuresIllustrationTab2 from "../../../public/illustration-features-tab-2.svg";
import featuresIllustrationTab3 from "../../../public/illustration-features-tab-3.svg";

type featuresContentType = {
  simpleBookmarking: {
    "feature-header": string;
    "feature-desc": string;
    "feature-img": HTMLImageElement;
  };
  speedySearching: {
    "feature-header": string;
    "feature-desc": string;
    "feature-img": HTMLImageElement;
  };
  easySharing: {
    "feature-header": string;
    "feature-desc": string;
    "feature-img": HTMLImageElement;
  };
};

const featuresContent: featuresContentType = {
  simpleBookmarking: {
    "feature-header": "Bookmark in one click",
    "feature-desc":
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    "feature-img": featuresIllustrationTab1,
  },
  speedySearching: {
    "feature-header": "Intelligent search",
    "feature-desc":
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    "feature-img": featuresIllustrationTab2,
  },
  easySharing: {
    "feature-header": "Share your bookmarks",
    "feature-desc":
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    "feature-img": featuresIllustrationTab3,
  },
};

export default featuresContent;
