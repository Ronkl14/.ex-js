const leap = (year) => {
    if (year % 4 === 0) {
        if (year % 400 === 0) {
            return 'It is indeed a leap year';
        }
        else if (year % 100 === 0) {
            return 'This is not a leap year';
        }
        else {
            return ' It is indeed a leap year';
        }
    }
    else {
        return 'This is not a leap year'
    }
}

console.log(leap(1304));
