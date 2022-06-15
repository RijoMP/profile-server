const express = require('express')
const app = express()
const cors = require('cors');

app.get("/api",(req, res)=>{
    res.json({"users":["p1","p2",'p3']})
})
app.use(cors({
    origin: '*'
}));

app.listen(process.env.PORT || 5000, ()=>{console.log("server statrted at 5000")})

