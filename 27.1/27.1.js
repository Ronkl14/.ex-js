function testNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10`);
    } else if (num < 10) {
      reject(`${num} is less than 10`);
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

testNumber(5);
testNumber(15);
