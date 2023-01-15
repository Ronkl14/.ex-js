const isString = (str, func) => {
  if (typeof str === "string") {
    return func(str);
  }
};

const logStr = (str) => console.log(str);

console.log(isString("Bedsaefe", logStr));

const firstWordUpperCase = (str, func) => {
  str = str.split("");
  str[0] = str[0].toUpperCase();
  str = str.join("");
  return func(str);
};

const dashing = (str) => {
  return str.replaceAll(" ", "-");
};

const capitalSecond = (str) => {
  for (let i = 0; i < str.length; i += 2) {
    str = str.split("");
    str[i] = str[i].toUpperCase();
    str = str.join("");
  }
  return str;
};

console.log(firstWordUpperCase("a big fish is on the way", dashing));
console.log(firstWordUpperCase("a big fish is on the way", capitalSecond));
