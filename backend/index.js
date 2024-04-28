const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req, res)=>{
    res.json('API working fine');
});

app.post('/api/transaction', async (req,res)=>{
    // console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL)
    const {name,description,datetime} = req.body;
    const transaction = new Transaction({
        name,
        description,
        datetime,
    });
    transaction.save();
    res.json(transaction);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
});