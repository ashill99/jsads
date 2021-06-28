function searchMatrix(matrix, target) {
    let arr = []; 
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (target === matrix[i][j]) {
                arr.push(i, j);
            }
        }
        if (arr.length === 0) {
            return null;
        } else {
            return arr;
        }
    };
}