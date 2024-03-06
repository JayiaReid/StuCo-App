const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const cors = require('cors');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mochalatte',
    database: 'stuco'
  });

//getting from database
app.get("/api/get", (req, res)=>{
    const sql_get="select * from student; "
    db.query(sql_get, (err, result)=>{
        res.send(result)
    })
});

app.listen(5170, ()=>{
    console.log('running on port 5170');
})