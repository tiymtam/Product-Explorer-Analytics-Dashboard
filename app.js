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
console.log("Bagian 2 - Cari ID 2:", findProductById(products, 2));
console.log("Bagian 2 - Update Stock ID 1:", updateStock(products, 1, 50));

// 3

products = [
    {
        id: 1, title: "Laptop", price: 1200, rating: 4.5, stock: 10, category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 30, height: 2, depth: 20 },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2, title: "Smartphone", price: 800, rating: 4.2, stock: 15, category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: { width: 7, height: 0.8, depth: 15 },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];

// 3.1
const allTagsNested = products.map(p => p.tags);
console.log("1. Semua Tags (Nested):", allTagsNested);

// 3.2
function findProductsByTag(productsData, tag) {
    return productsData.filter(p => p.tags.includes(tag));
}
console.log("2. Cari Tag 'electronics':", findProductsByTag(products, "electronics"));

// 3.3 
const reviewCounts = products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
}));
console.log("3. Jumlah Review per Produk:", reviewCounts);

// 3.4
const fiveStarReviews = products.reduce((acc, p) => {
    const fiveStars = p.reviews.filter(r => r.rating === 5);
    return acc.concat(fiveStars);
}, []);
console.log("4. Review Bintang 5:", fiveStarReviews);

// 3.5
const manualAverageRatings = products.map(p => {
    const totalRating = p.reviews.reduce((sum, r) => sum + r.rating, 0);
    const avgRating = p.reviews.length > 0 ? (totalRating / p.reviews.length) : 0;
    return { title: p.title, manualAvgRating: avgRating.toFixed(2) };
});
console.log("5. Rata-rata Rating Manual:", manualAverageRatings);

// 3.6
const mostReviewedProduct = products.reduce((prev, current) => {
    return (prev.reviews.length > current.reviews.length) ? prev : current;
});
console.log("6. Produk Review Terbanyak:", mostReviewedProduct.title);

// 3.7
const allRatingValues = products.reduce((acc, p) => {
    const ratingsOnly = p.reviews.map(r => r.rating);
    return acc.concat(ratingsOnly);
}, []);
console.log("7. Semua Nilai Rating (Datar):", allRatingValues);

// 4

// 4.1
const allTagsFlat = products.flatMap(p => p.tags);
console.log("Bagian 4 - Latihan 4.1 (Semua Tags):", allTagsFlat);

// 4.2
const allComments = products.flatMap(p => p.reviews.map(r => r.comment));
console.log("Bagian 4 - Latihan 4.2 (Semua Comments):", allComments);

// 5
const titles = products.map(p => p.title);
const expensiveProducts = products.filter(p => p.price > 500);
const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

console.log("5. Contoh Titles:", titles);
console.log("5. Contoh Expensive Products:", expensiveProducts);
console.log("5. Contoh Total Stock:", totalStock);

// 5.1
const laptopPrices = products
    .filter(p => p.category === "laptops")
    .map(p => p.price);
const avgLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
console.log("5.1 Rata-rata Harga Laptop:", avgLaptopPrice);

// 5.2
function getStatistics(productsData) {
    if (productsData.length === 0) return null;
    const totalProducts = productsData.length;
    const totalStockCount = productsData.reduce((sum, p) => sum + p.stock, 0);
    const averagePrice = productsData.reduce((sum, p) => sum + p.price, 0) / totalProducts;
    
    const highestPrice = Math.max(...productsData.map(p => p.price));
    const lowestPrice = Math.min(...productsData.map(p => p.price));
    
    const averageRating = productsData.reduce((sum, p) => sum + p.rating, 0) / totalProducts;

    return {
        totalProducts,
        averagePrice: averagePrice.toFixed(2),
        highestPrice,
        lowestPrice,
        totalStock: totalStockCount,
        averageRating: averageRating.toFixed(2)
    };
}
console.log("5.2 Statistik Produk:", getStatistics(products));

// 6
// 6.1
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}
console.log("6.1 Linear Search (Cari 5):", linearSearch([1, 3, 5, 7], 5));

// 6.2
function linearSearchById(productsData, targetId) {
    for (let i = 0; i < productsData.length; i++) {
        if (productsData[i].id === targetId) return i;
    }
    return -1;
}
console.log("6.2 Linear Search ID 2 (Index ke-):", linearSearchById(products, 2));

// 7
// 7.1
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log("7.1 Binary Search (Cari 7):", binarySearch([1, 3, 5, 7, 9], 7));

// 7.2
const sortedProductsByPrice = [...products].sort((a, b) => a.price - b.price);

function binarySearchByPrice(sortedProducts, targetPrice) {
    let left = 0;
    let right = sortedProducts.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedProducts[mid].price === targetPrice) return mid;
        if (sortedProducts[mid].price < targetPrice) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
console.log("7.2 Binary Search Harga 1200 (Index ke-):", binarySearchByPrice(sortedProductsByPrice, 1200));
