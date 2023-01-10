const lightDark = (color) => {
  switch (String(color).toLowerCase()) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
    default:
      return "Unknown color";
  }
};

console.log(lightDark('Yellow'));
