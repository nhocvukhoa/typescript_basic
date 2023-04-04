// union type (cộng gộp, join giá trị): gán nhiều hơn 1 data type cho 1 biến
// có thể check function trước khi nó chạy nếu các param ko đúng kiểu đã quy định
function addNumberOrString(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error('Parameters must be number or string')
}

console.log(addNumberOrString('abc', 'def'));
console.log(addNumberOrString(5, 6));
//console.log(addNumberOrString(true, 'abc'));
