const { transpose } = require("./transpose");


const wordSearch = (letters, word) => {

  // Check if the matrix is empty
  if (letters.length === 0 || letters[0].length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  // Find transpose of 2d array letter
  const transposedArray = transpose(letters);
  const verticalJoin = transposedArray.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  // return false if the word in not found
  return false;
};

module.exports = wordSearch;