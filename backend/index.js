const express = require('express');
const app = express();

app.get('/api/test', (req, res)=>{
    res.json('API working fine');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT ${PORT}`)
});