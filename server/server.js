const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = 7000;
require('./DB')
const path = require('path');
const passport = require('passport');
require('./config/passport')(passport);

const usersRouter = require('./routes/users-router')
const categoriesRouter = require('./routes/categories-router')
const departmentsRouter = require('./routes/departments-router')
const ordersRouter = require('./routes/orders-router')
const productsRouter = require('./routes/products-router')
const storesRouter = require('./routes/stores-router')

app.use(passport.initialize())
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/users',usersRouter)
app.use('/categories',categoriesRouter)
app.use('/departments',departmentsRouter)
app.use('/orders',ordersRouter)
app.use('/products',productsRouter)
app.use('/stores',storesRouter)

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`server is on ${port}`);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}