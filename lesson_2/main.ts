const sum = (x: number, y: number) => {
    return x + y;
}

// no error
console.log(sum(5, 10))

// error: JS cho sai ra kết quả (nếu truyền sai type) => cần validate dữ liệu => TS ra đời
//console.log(sum(5, '10'))
