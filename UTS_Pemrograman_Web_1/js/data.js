// DATA DUMMY UTS PEMROGRAMAN WEB 1
// Data dapat dimodifikasi tanpa database/server.

const dataKatalogBuku = [
    { kode: "BK001", judul: "Pemrograman Web Modern", penulis: "Rizky Pratama", kategori: "Teknologi", harga: 85000, stok: 12 },
    { kode: "BK002", judul: "Belajar HTML & CSS", penulis: "Andi Setiawan", kategori: "Teknologi", harga: 70000, stok: 8 },
    { kode: "BK003", judul: "JavaScript untuk Pemula", penulis: "Dewi Lestari", kategori: "Teknologi", harga: 90000, stok: 3 },
    { kode: "BK004", judul: "Algoritma dan Struktur Data", penulis: "Budi Santoso", kategori: "Informatika", harga: 95000, stok: 5 },
    { kode: "BK005", judul: "UI/UX Design Dasar", penulis: "Sinta Maharani", kategori: "Desain", harga: 78000, stok: 0 },
    { kode: "BK006", judul: "Basis Data Praktis", penulis: "Fajar Nugraha", kategori: "Informatika", harga: 88000, stok: 7 }
];

const dataPesananDefault = [
    {
        id: "ORD-10001", doNumber: "DO-10000001", nama: "Rina Amelia", email: "rina@example.com",
        telepon: "081234567890", alamat: "Jl. Merdeka No. 10, Medan", pembayaran: "QRIS",
        total: 155000, tanggal: "01/11/2026", status: "Dikirim",
        items: [{kode:"BK001", judul:"Pemrograman Web Modern", harga:85000, qty:1}]
    },
    {
        id: "ORD-10002", doNumber: "DO-10000002", nama: "Doni Saputra", email: "doni@example.com",
        telepon: "082345678901", alamat: "Jl. Sudirman No. 25, Medan", pembayaran: "Transfer Bank",
        total: 160000, tanggal: "02/11/2026", status: "Diproses",
        items: [{kode:"BK002", judul:"Belajar HTML & CSS", harga:70000, qty:2}]
    }
];

const dataTransaksiDefault = [
    {id:"ORD-10001", nama:"Rina Amelia", total:155000, tanggal:"01/11/2026", status:"Berhasil"},
    {id:"ORD-10002", nama:"Doni Saputra", total:160000, tanggal:"02/11/2026", status:"Berhasil"}
];

const dataPesanan = JSON.parse(localStorage.getItem("dataPesananBukuKita") || "null") || [...dataPesananDefault];
const dataTransaksi = JSON.parse(localStorage.getItem("dataTransaksiBukuKita") || "null") || [...dataTransaksiDefault];

const formatRupiah = value => new Intl.NumberFormat("id-ID", {style:"currency", currency:"IDR", maximumFractionDigits:0}).format(value);

function saveArray(key, value) {
    const map = {dataKatalogBuku:"dataKatalogBukuBukuKita", dataPesanan:"dataPesananBukuKita", dataTransaksi:"dataTransaksiBukuKita"};
    localStorage.setItem(map[key] || key, JSON.stringify(value));
}
