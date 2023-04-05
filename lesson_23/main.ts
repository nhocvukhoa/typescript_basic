let products = [
    {
        name: 'Product 1',
        price: 700
    },
    {
        name: 'Product 2',
        price: 1000
    },
    {
        name: 'Product 3',
        price: 1700
    },
];

for (let i = 0; i < products.length; i++) {
    if (products[i].price === 700) {
        console.log(products[i])
        break;
    }
}