
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  const result = [];
  matrix.forEach((element, index) => {
    if (index % 2 !== 0) element = element.reverse();
    element.forEach(value => result.push(value));
  })

  return result;
}
