function findSmallest(a, b, c) {
  //   if (a > b > c) - incorrect writing, should use logical
  //to find smallest it is needed to divide each if to sub ifs
  if (a > b) {
    if (b > c) {
      return c;
    } else {
      return b;
    }
  }
  //   else if (a > c > b) - same as above
  else if (a > c) {
    if (b > c) {
      return c;
    }
    else {
        return b;
    }
  } else {
    return a;
  }
}
console.log(findSmallest(52, 66, 2));
//calling the function was written incorrectly
