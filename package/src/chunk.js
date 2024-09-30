/**
 * It will takes an array and chunk size.
 * This function will return a new array
 * ex: chunk([1,2,3,4], 2). return [ [1, 2], [3, 4] ]
 *
 * @version 1.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 *
 */

function chunk(array, size = 1) {
  const arr = [...array];
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const temp = [];
    for (let j = i; j <= i + size - 1 && j < arr.length; j++) {
      temp.push(arr[j]);
    }
    newArr.push(temp);
  }
  return newArr;
}

export default chunk;
