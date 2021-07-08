const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static("static"));


class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
}

var products = []

products.push(new Product('bafle',1500))
products.push(new Product('mouse',850))

function addNewProduct(nameProduct, priceProduct){
    var newProduct = new Product(nameProduct,parseInt(priceProduct))
    products.push(newProduct)
    console.log("Producto agregado correctamente")

}

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/main.html");
});

app.get("/showProducts", function (req, res) {
    var data = JSON.stringify(products)
    res.status(200)
    res.send(data)
});

app.post('/addProduct', (req, res) => {
    addNewProduct(req.body.nameProduct, req.body.priceProduct)

});

app.listen(3030, () => {
  console.log("Servidor en funcionamiento, puerto: 3030");
});

