const express = require("express");
const {authRoutes} = require("./routes/auth.js");
const {productRoutes} = require("./routes/products.js");
const cors = require("cors");
 
const app = express();
 
try {
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/', authRoutes);
app.use('/products', productRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));