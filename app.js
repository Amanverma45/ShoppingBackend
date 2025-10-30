const express = require('express');
const cors = require('cors');       // ✅ correctly imported
const app = express();

require('./db/connection.js');      // ✅ database connection

const products = require('./model/product.js');
const defaultData = require('./default/dafault.js');

const port = 1000;

// ✅ Middleware
app.use(express.json());
app.use(cors()); // Allow all origins (for local testing)

// ✅ Routes
app.get('/getProducts', async (req, res) => {
  try {
    const data = await products.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// ✅ Load default data (if needed)
defaultData();
