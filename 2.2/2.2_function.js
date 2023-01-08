function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`;
}

let fortune = tellFortune("Web developer", "Australia", "a capybara", 8);
console.log(fortune);
