const Produk = require("../models/produk");

const Index = asyn(req, res) => {
    try {
        const produk = await Produk.find({});
        res.status(200).json({ message: 'Success'}).json(produk);
    } catch (error) {
        res.status(400).json({ message: 'Failed' });
    }
}

module