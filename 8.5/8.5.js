// const swapObj = (obj) => {
//   const keys = Object.keys(obj);
//   const vals = Object.values(obj);

//   const newObj = new Object();
//   Object.assign(newObj, { [vals]: keys });
//   return newObj;
// };

const swapObj = (obj) => {
  const newObj = {};
  for (const key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

obj = { 1: 4, 2: 6, 3: 9 };
console.log(swapObj(obj));
