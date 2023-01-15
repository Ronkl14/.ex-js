const steps = (N) => {
    let str = new Array(N);

    for (let i = 0 ; i < str.length ; i++) {
        str[i] = new Array(N).fill(' ');
        for (let j = 0 ; j <= i ; j++) {
            str[i][j] = '#';
        }
        console.log(`'${str[i].join('')}'`);
    }
}


console.log(steps(5));