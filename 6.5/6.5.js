const someObject = { lorem: "ipsum" };
let arr = new Array(100);
arr.fill(someObject, 0);

let arr2 = Array.from({ length: 100 }, (value, index) => index + 1);

console.log(arr2);

let arrValues = Array.from(
  arr.map((obj) => {
    return Object.values(obj);
  })
);
arrValues = Array.from(Object.values(arrValues));

const object = arr2.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: item.value }),
);

console.log(object);
