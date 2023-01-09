let john1 = 189;
let john2 = 10;
let john3 = 103;
let mike1 = 16;
let mike2 = 98;
let mike3 = 123;
let mary1 = 198;
let mary2 = 134;
let mary3 = 25;

const johnAvg = (john1 + john2 + john3)/3;
const mikeAvg = (mike1 + mike2 + mike3)/3;
const maryAvg = (mary1 + mary2 + mary3)/3;

const winner = (john, mike, mary) => {
    if (john > mike && john > mary) {
        return 'John wins';
    }
    else if (mike > john && mike > mary) {
        return 'Mike wins';
    }
    else if (mary > john && mary > mike) {
        return 'Mary wins';
    }
    else {
        return 'Draw!';
    }
}
console.log(johnAvg);
console.log(mikeAvg);
console.log(maryAvg);
console.log(winner(johnAvg,mikeAvg,maryAvg));