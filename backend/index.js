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
    const sql_get="select * from suser; "
    db.query(sql_get, (err, result)=>{
        res.send(result)
    })
});

app.post("/login", (req, res) => {
    let userID = req.body.userID;
    let passwrd = req.body.passwrd;

    const authSql = "SELECT * from suser WHERE userID=? AND passwrd=?;"
    db.query(authSql, [userID, passwrd], (err, result) => {
        if (err) {
            console.log(0)
            res.status(500).send("Error occurred");
        } else {
            if (result.length > 0) {
                res.send("Login successful");
            } else {
                res.status(401).send("Invalid credentials");
            }
        }
    });
});

app.post("/login-2", (req, res) => {
    let full_name = req.body.full_name;
    let DOB = req.body.DOB;
    let passwrd = req.body.passwrd;

    const authSql2 = "SELECT * from suser WHERE full_name=? AND DOB=? AND passwrd=?;"
    db.query(authSql2, [full_name, DOB, passwrd], (err, result) => {
        if (err) {
            console.log(0)
            res.status(500).send("Error occurred");
        } else {
            if (result.length > 0) {
                res.send("Login successful: Contact Your School for UserID");
            } else {
                res.status(401).send("Invalid credentials");
            }
        }
    });
});



app.listen(5170, ()=>{
    console.log('running on port 5170');
})