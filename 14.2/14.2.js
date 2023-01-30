const obj = [
  { yo: "lalala" },
  { hey: "nahaha" },
  { yo: "yeses" },
  { yo: "fun" },
];

const extractOnlyValue = (arr, key) =>
  arr
    .filter((obj) => Object.keys(obj) == key)
    .reduce((acc, curr) => acc.concat(curr[key]), []);

console.log(extractOnlyValue(obj, "yo"));

const countOnlyVowels = (str) => {
  const vowels = "aeiou";
  return str.split("").reduce((acc, char) => {
    if (!vowels.includes(char)) return acc;

    const { [char]: val = 0 } = acc;

    return { ...acc, [char]: val + 1 };
  }, {});
};

console.log(countOnlyVowels("So long and thanks for the fish"));
