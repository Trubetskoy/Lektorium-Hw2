function Loops(array, b) {
    let result;
    if (b === 'max') {
        result = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== Infinity) {
                if (result < array[i])
                    result = array[i]
            }
        }
    } else if (b === 'min') {
        result = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== -Infinity) {
                if (result > array[i])
                    result = array[i];
            }
        }
    } else if (b === 'summ') {
        result = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === -Infinity || array[i] === Infinity || isNaN(NaN)) {
            } else if (typeof (array[i]) === 'number') {
                result += (array[i])
            }
        }
    }
    return result;
}

console.log(Loops([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1], 'max'));
console.log(Loops([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1], 'min'));
console.log(Loops([3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2 - 3 - 1], 'summ'));

console.log(Loops([1, undefined, NaN, Infinity, -Infinity, 'asluirgfv', 3, 5, -3], 'max'));
console.log(Loops([1, undefined, NaN, Infinity, -Infinity, 'asluirgfv', 3, 5, -3], 'min'));
console.log(Loops([1, undefined, NaN, Infinity, -Infinity, 'asluirgfv', 3, 5, -3], 'summ'));

