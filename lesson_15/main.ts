// any type: trả về bất cứ thứ gì (áp dụng cho function và biến)
// void: không cần trả dữ liệu (thực ra vẫn trả về undefined),không cần keyword return (áp dụng cho function)
// never: không bao giờ trả về cái gì, dùng trong xử lý lỗi

function handleException(errorMessage: string): never {
    throw Error(errorMessage);
}

handleException('New error')
//console.log(handleException('new'))
