const score = (num) => {
  if (num >= 0 && num <= 64) {
    return "F";
  } else if (num >= 65 && num <= 69) {
    return "D";
  } else if (num >= 70 && num <= 79) {
    return "C";
  } else if (num >= 80 && num <= 89) {
    return "B";
  } else if (num >= 90 && num <= 100) {
    return "A";
  } else {
    return "Invalid input";
  }
};

console.log(score(44));
