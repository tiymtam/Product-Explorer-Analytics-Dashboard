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

// 8

const numbers = [5, 3, 8, 1];
const ascendingNumbers = [...numbers].sort((a, b) => a - b);
const descendingNumbers = [...numbers].sort((a, b) => b - a);
const customSortedProducts = [...products].sort((a, b) => a.price - b.price);

console.log("8. Contoh Ascending Numbers:", ascendingNumbers);
console.log("8. Contoh Descending Numbers:", descendingNumbers);
console.log("8. Contoh Custom Sorted Products (Harga Asc):", customSortedProducts.map(p => p.title));

// 8.1
function bubbleSort(numbersData) {
    const arr = [...numbersData];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log("8.1 Bubble Sort Manual:", bubbleSort(numbers));

// 8.2
function sortProducts(productsData, sortBy) {
    const arr = [...productsData];
    return arr.sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating; // Rating tinggi ke rendah
        if (sortBy === "title") return a.title.localeCompare(b.title);
        return 0;
    });
}
console.log("8.2 Sort Products By Rating:", sortProducts(products, "rating").map(p => p.title));

// 9
//  9.1
function groupByCategory(productsData) {
    return productsData.reduce((groups, product) => {
        const key = product.category;
        if (!groups[key]) groups[key] = [];
        groups[key].push(product);
        return groups;
    }, {});
}
const groupedProducts = groupByCategory(products);
console.log("9.1 Group by Category:", groupedProducts);

// 9.2 
const categorySummary = Object.keys(groupedProducts).map(category => {
    return {
        Kategori: category,
        "Total Produk": groupedProducts[category].length
    };
});
console.log("9.2 Ringkasan Kategori (Tabel):");
console.table(categorySummary);

// 10
const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];

// 10.1
function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}
console.log("10.1 Count Words:", countFrequency(words));

// 10.2
const categoryFrequency = countFrequency(products.map(p => p.category));
const allTagsForFreq = products.flatMap(p => p.tags);
const tagFrequency = countFrequency(allTagsForFreq);
const ratingFrequency = countFrequency(products.map(p => Math.round(p.rating)));
const brandFrequency = countFrequency(products.map(p => p.brand || "Unknown"));

console.log("10.2 Freq Category:", categoryFrequency);
console.log("10.2 Freq Tags:", tagFrequency);
console.log("10.2 Freq Rating:", ratingFrequency);
console.log("10.2 Freq Brand:", brandFrequency);

// 11
const categoriesSet = [...new Set(products.map(p => p.category))];
console.log("11. Contoh Set Categories:", categoriesSet);

// 11.1
const uniqueCategory = [...new Set(products.map(p => p.category))];
const uniqueBrand = [...new Set(products.map(p => p.brand).filter(Boolean))]; 
const uniqueTags = [...new Set(products.flatMap(p => p.tags))];

console.log("11.1 Unique Category:", uniqueCategory);
console.log("11.1 Unique Brand:", uniqueBrand);
console.log("11.1 Unique Tags:", uniqueTags);

// 12
const productMapExample = new Map();
for (const product of products) {
    productMapExample.set(product.id, product);
}
console.log("12. Contoh Map Get ID 1:", productMapExample.get(1));

// 12.1
function buildProductLookup(productsData) {
    const productMap = new Map();
    for (const product of productsData) {
        productMap.set(product.id, product);
    }
    return productMap;
}
const productLookup = buildProductLookup(products);
console.log("12.1 Product Lookup Get ID 2:", productLookup.get(2));

// 13
// 13.1
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// 13.2
const searchHistory = new Stack();
searchHistory.push("laptop");
searchHistory.push("phone");
searchHistory.push("tablet");
console.log("13.2 Undo Search:", searchHistory.pop(), "| Current History:", searchHistory.items);

// 14
// 14.1
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        return this.items[0];
    }
}
const requestQueue = new Queue();
requestQueue.enqueue("req1");
requestQueue.enqueue("req2");
console.log("14.1 Queue Dequeue:", requestQueue.dequeue(), "| Current Queue:", requestQueue.items);

// 15
function countdown(n) {
    if (n <= 0) {
        console.log("15. Contoh Selesai");
        return;
    }
    countdown(n - 1);
}
countdown(3); 

const nestedCategories = [
    {
        name: "Electronics",
        children: [
            { name: "Laptop", children: [] },
            { name: "Phone", children: [] }
        ]
    }
];

// 15.1
function printCategories(categoriesData, depth = 0) {
    for (const category of categoriesData) {
        console.log(" ".repeat(depth) + category.name);
        if (category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}
console.log("15.1 Print Categories:");
printCategories(nestedCategories);

// 16
// 16.1
const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);

function linearSearchWithCount(array, target) {
    let steps = 0;
    for (let i = 0; i < array.length; i++) {
        steps++;
        if (array[i] === target) return steps;
    }
    return steps;
}

function binarySearchWithCount(arr, target) {
    let steps = 0;
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        steps++;
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return steps;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return steps;
}

const targetNum = 9999;
console.log(`16.1 Linear Search Steps (Target ${targetNum}):`, linearSearchWithCount(largeArray, targetNum));
console.log(`16.1 Binary Search Steps (Target ${targetNum}):`, binarySearchWithCount(largeArray, targetNum));

// 16.2
const mockProducts = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    category: `cat-${i % 10}`
}));

function findPairsNestedLoop(productsData) {
    let steps = 0;
    for (let i = 0; i < productsData.length; i++) {
        for (let j = i + 1; j < productsData.length; j++) {
            steps++;
        }
    }
    return steps;
}

function findPairsGrouping(productsData) {
    let steps = 0;
    const groups = {};
    for (let i = 0; i < productsData.length; i++) {
        steps++;
        const cat = productsData[i].category;
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(productsData[i]);
    }
    return steps; 
}

console.log("16.2 Nested Loop Steps (O(n^2)):", findPairsNestedLoop(mockProducts));
console.log("16.2 Grouping Steps (O(n)):", findPairsGrouping(mockProducts));

// 17
// 17.1
function renderProductsDOM(productsToRender) {
    const container = document.querySelector("#product-list");
    if (!container) return; 
    container.innerHTML = "";
    for (const product of productsToRender) {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <p>Harga: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
        `;
        container.append(card);
    }
}
renderProductsDOM(products.slice(0, 5));