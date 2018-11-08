const enums = require("../../../src/enums");

module.exports = {
  type: enums.WORKSHOP,
  speakers: [require("../../people/glenn-reyes")],
  title: "React for Beginners",
  description: ``,
  /*tickets: [
    {
      ...require("../tickets/morning-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/kmogtpeshgs",
    },
    {
      ...require("../tickets/morning-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/y11c-klqvss",
    },
    {
      ...require("../tickets/evening-workshop")[0],
      link: "https://ti.to/react-finland/2018/with/c4g-t75rfog",
    },
    {
      ...require("../tickets/evening-workshop")[1],
      link: "https://ti.to/react-finland/2018/with/m3kenzkowg0",
    },
  ],*/
  keywords: require("../../people/glenn-reyes").keywords,
  location: require("../../locations")["paasitorni"],
};
