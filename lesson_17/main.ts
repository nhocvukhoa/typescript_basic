// Sử dụng alisas rất hữu dụng với union type, vì code đỡ bị rối hơn
type numType = number | string;

function addNumberOrStringByAliases(numA: numType, numB: numType) {
    if (typeof numA === 'number' && typeof numB === 'number') {
        return numA + numB;
    }

    if (typeof numA === 'string' && typeof numB === 'string') {
        return numA.concat(numB);
    }

    throw new Error('Parameters must be number or string')
}

console.log(addNumberOrStringByAliases('abc', 'def'));
console.log(addNumberOrStringByAliases(5, 6));