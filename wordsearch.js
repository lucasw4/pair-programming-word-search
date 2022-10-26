const verticalToHorizontal = function(array) {
  const results = [];
  for (let i = 0; i < array[0].length; i++) {
    const col = [];
    for (let j = 0; j < array.length; j++) {
      col.push(array[j][i])
    }
    results.push(col)
  }
  return results
  };
const wordSearch = (letters, word) => { 
  if(letters.length === 0) return false
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = verticalToHorizontal(letters).map(ls => ls.join(''))
    // console.log(horizontalJoin)
    for (item of horizontalJoin) {
        if (item.includes(word)) {
          return true
        } 
    }
    for (item2 of verticalJoin) {
      if(item2.includes(word))
      return true;
    }
    verticalToHorizontal(letters)
    return false
  }

module.exports = wordSearch