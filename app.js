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

// 2
let products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 }
];

// 2.1
const findProductById = (productsData, id) => productsData.find(p => p.id === id);

// 2.2
const lowStockProducts = products.filter(p => p.stock < 10);

// 2.3:
function updateStock(productsData, id, newStock) {
    return productsData.map(p => 
        p.id === id ? { ...p, stock: newStock } : p
    );
}

console.log("Bagian 2 - Produk Stok Sedikit:", lowStockProducts);