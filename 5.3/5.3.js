const passVal = (password) => {
  password.length > 7 && password.toLowerCase() != password
    ? console.log("Very Strong")
    : password.length == 7
    ? console.log("Strong")
    : console.log("Weak");
};
