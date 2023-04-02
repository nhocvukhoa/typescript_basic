let users: {
    name: string,
    age: number
} = {
    name: "ABC",
    age: 26
}

// Không thêm dữ liệu vào object mà chưa định nghĩa address có type là gì, JS thì thêm vô tư
// users.address = 'Hội An'

console.log(users)