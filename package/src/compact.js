/**
 * It will remove all falsy values from array.
 * The falsy values are: false, null, 0, "", undefined and NaN
 *
 * @category Array
 * @function compact
 * @param {Array} array - The array to process, potentially containing falsy values.
 * @returns {Array} A new array with all falsy values removed.
 *
 * @example
 * compact([2, 5, null, 7]) // [2, 5, 7]
 * compact([false, 1, '', 0, 'hello']) // [1, 'hello']
 * compact([undefined, NaN, 3]) // [3]
 */

function compact(array) {
  const arr = [...array];
  return arr.reduce((acc, cur) => {
    if (cur) {
      acc.push(cur);
    }
    return acc;
  }, []);
}

export default compact;
