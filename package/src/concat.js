/**
 * Concatenates multiple values and arrays into a single array.
 *
 * @param {...*} args - A series of values or arrays to concatenate.
 * @returns {Array} A new array containing all the non-array values
 * and the elements of any arrays passed as arguments.
 *
 * @example
 * Concatenating individual values and arrays
 * concat(1, 2, [3, 4], 5, [6, 7]);
 * Returns: [1, 2, 3, 4, 5, 6, 7]
 *
 * @example
 * Handling mixed types
 * concat('a', ['b', 'c'], 3);
 * Returns: ['a', 'b', 'c', 3]
 */

function concat(...args) {
  const newArr = [];
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        newArr.push(args[i][j]);
      }
    } else {
      newArr.push(args[i]);
    }
  }
  return newArr;
}

export default concat;

/**
 * --- Pseudo Code ---
 * 
 * take a variable newArr = []
 * loop args till args.length
 * check args element is array or not
 * if array do a loop over this array
 *   and push element in newArr
 * else
 *   push the element ot newArr
 * return newArr;

 */
