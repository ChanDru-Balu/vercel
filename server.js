const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Welcome , But this is the Boiler Plate place only , use propoer routes!')
});