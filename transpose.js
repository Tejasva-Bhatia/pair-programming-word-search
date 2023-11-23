const transpose = function(matrix) {

  const numRows = matrix.length;         // matrix (r,c)
  const numColumns = matrix[0].length;

  const result = [];

  for (let c = 0; c < numColumns; c++) {        //result(c,r)
    result[c] = [];
  }

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numColumns; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
};

module.exports = {transpose};