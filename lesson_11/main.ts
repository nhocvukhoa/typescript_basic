let skills: (string |number)[] = ['ABC', 25];
skills.push('coding')
console.log(skills)

//tuple type: tạo ra số đối tượng mong muốn, trong ví dụ có 2 đối tượng là string và number, vượt quá sẽ báo lỗi
let skills2: [string , number] = ['ABC', 25];
skills.push('coding')
console.log(skills2)

// Trong tuple có thể sử dụng dấu ? nếu không muốn type đó xuất hiện dù đã khai báo
let skills3: [boolean, string, number?];
skills3 = [true, 'abc']
console.log(skills3)
