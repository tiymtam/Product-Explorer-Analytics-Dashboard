// 1 
// 1.1
function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

// 1.2
const cart = [
    { title: "Laptop", price: 1000, discountPercent: 10 },
    { title: "Mouse", price: 20, discountPercent: 5 },
    { title: "Keyboard", price: 50, discountPercent: 0 }
];

function applyDiscounts(cartData) {
    const result = [];
    for (const item of cartData) {
        result.push({
            title: item.title,
            finalPrice: calculateDiscountedPrice(item.price, item.discountPercent)
        });
    }
    return result;
}

console.log("Hasil Diskon:", applyDiscounts(cart));