const sevenBoom = (num) => {
  let arr = Array.from({ length: num }, (_, i) => i + 1);

  let arrSeven = arr.map((numa) => {
    if (numa % 7 == 0 && String(numa).includes(7)) {
      return "BOOM-BOOM";
    } else if (numa % 7 == 0) {
      return "BOOM";
    } else {
      return numa;
    }
  });
  return arrSeven;
};

console.log(sevenBoom(77));
