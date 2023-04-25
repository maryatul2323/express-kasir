const express = require("express");
const app = express();

// CONFIG
require('dotenv').config();

const bodyParser = require('body-parser')
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/images', express.static('images'))

// Middleware
const middleware = require('./../middlewares');
const { uploadFile } = require('../middlewares/uploadFile')

// DEFISNSI ROUTER
const productRouters = require("./product")
const datamejaRouters = require("./datameja")
const productbrandRouters = require("./productbrand")
const producttypeRouters = require("./producttype")
const dineinRouters = require("./dinein")
const dashboardRouters = require("./dashboard")
const unitRouters = require("./unit")
const userRouters = require("./user")
const auth = require("./login")
const upload = require('./upload')


// USE ROUTER
app.use("/products",middleware.accessToken,productRouters);
app.use("/dashboard",middleware.accessToken, dashboardRouters);
app.use("/productbrands",middleware.accessToken,  productbrandRouters);
app.use("/datameja", middleware.accessToken, datamejaRouters);
app.use("/units",middleware.accessToken,  unitRouters);
app.use("/producttypes",middleware.accessToken,  producttypeRouters);
app.use("/dinein",middleware.accessToken, dineinRouters);
app.use("/users", middleware.accessToken, userRouters);
app.use("/upload", middleware.accessToken, upload);
app.use("/login", auth);

app.listen(process.env.PORT, ()=>{
    console.log('server run port : ',process.env.PORT)
})