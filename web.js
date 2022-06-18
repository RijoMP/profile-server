const express = require('express')
const app = express()
const cors = require('cors');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(cors({
    origin: '*'
}));

app.get("/api",(req, res)=>{
    res.json({"users":["p1","p2",'p3']})
})

app.get("/skills",(req, res)=>{
    res.json({"skills":[{
        "technology":"Dot Net",
        "prof":"Good",
        "exp":"some project, some other project",
    },{
        "technology":"Python",
        "prof":"Good",
        "exp":"some project, some other project",
    },{
        "technology":"JavaScript",
        "prof":"Good",
        "exp":"some project, some other project",
    }]})
})
app.get("/interests",(req, res)=>{
    res.json({"users":["p1","p2",'p3']})
})


app.listen(process.env.PORT || 5000, ()=>{console.log("server statrted at 5000")})

