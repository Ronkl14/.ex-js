const swapObj = (obj) => {
  const newObj = {};
  for (const key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

obj = { 1: 4, 2: 6, 3: 9 };
console.log(swapObj(obj));
