const products = [
    { id: 1, title: "Laptop", price: 15000000, category: "elektronik" },
    { id: 2, title: "Smartphone", price: 5000000, category: "elektronik" },
    { id: 3, title: "Meja Kerja", price: 1200000, category: "perabotan" }
];

const productNames = products.map(product => product.title);
console.log("Nama Produk:", productNames);

const cheapProducts = products.filter(product => product.price < 10000000);
console.log("Produk Murah:", cheapProducts);

const priceList = products.map(product => `Rp ${product.price}`);
console.log("Daftar Harga:", priceList);

const container = document.getElementById("product-list");

const htmlContent = products.map(product => {
    return `<div class="card">
        <h3>${product.title}</h3>
        <span>Kategori: ${product.category}</span>
        <p>Harga: Rp ${product.price}</p>
    </div>`;
}).join("");

container.innerHTML = htmlContent;