const express = require('express');
const cors = require('cors');

//App Config
const app = express();
const  PORT = 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("API is running");
})

app.listen(PORT, ()=>{`Server is running in ${PORT}`});
