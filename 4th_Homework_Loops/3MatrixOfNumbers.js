'use struct';

function solve(args) {

    let n = args[0];

    for (let i = 1; i <= n; i++) {
        let result = " ";
        for (let j = 1; j <= n; j++) {
            result += (i + j - 1);
        }
        console.log(result);
    }
}
const matrixNum = ["3"];
solve(matrixNum)