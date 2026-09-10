const productName = "Laptop Asus ROG";
let price = 15000000;
let isAvailable = true;

console.log("Nama Produk:", productName);
console.log("Harga:", price);

let discount = 500000;
let finalPrice = price - discount;

if (finalPrice > 10000000) {
    console.log("Kategori: Barang Mewah");
} else {
    console.log("Kategori: Barang Standar");
}