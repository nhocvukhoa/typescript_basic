const sum = (a: number, b: number): number => {
    return a + b;
}

// Nếu function không trả về gì thì sử dụng void
const handleLogs = (message: string): void => {
    console.log(message);
}

console.log('Tổng: ', sum(5,6));
handleLogs('abc');
