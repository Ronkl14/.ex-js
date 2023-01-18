function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter += 1;
      //added += to update counter
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
