// You should implement your task here.

module.exports = function towelSort(matrix) {
    // console.log(matrix.flat(Infinity).sort());
    if (matrix == undefined) {
        return [];
    }
    if (matrix.length === 0) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let col = i % 2 === 0 ? j : matrix[i].length - j - 1;
            arr.push(matrix[i][col]);
        }
    }
    // console.log(arr);
    // console.log(matrix);

    return arr;
};
