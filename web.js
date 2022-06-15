const express = require('express')
const app = express()

app.get("/api",(req, res)=>{
    res.json({"users":["p1","p2",'p3']})
})

app.listen(process.env.PORT || 5000, ()=>{console.log("server statrted at 5000")})