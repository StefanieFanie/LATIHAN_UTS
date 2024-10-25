const mongoose = require("mongoose");

const produkSchema = new mongoose.Schema({
    nama: {
        type: String,
    },
    deskripsi: {
        type: String,
    },
    harga: {
        type: Number,
    },
    stok: {
        type: Number,
    },
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Kategori',
        required: true,
    }
});

const Mahasiswa = mongoose.model('Produk', produkSchema);
module.exports = Produk;