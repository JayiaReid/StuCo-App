const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const jwt = require('jsonwebtoken');


app.listen(5170, ()=>{
    console.log('running on port 5170');
})
//generating session
const crypto = require('crypto');

const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex');
};

const secretKey = generateRandomString(32);

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser())
app.use(session({
    secret: secretKey, 
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        maxAge: 1000 * 60 * 60 *24 }
  }));

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

//logging in
app.post("/login", (req, res) => {
    let userID = req.body.userID;
    let passwrd = req.body.passwrd;
    // let userToken = req.body.userToken

    const authSql = "SELECT userID, passwrd, email, f_name from suser WHERE userID=? AND passwrd=?;"
    db.query(authSql, [userID, passwrd], (err, result) => {
        if (err) {
            console.log(0)
            res.status(500).send("Error occurred");
        } else {
            if (result.length > 0) {
                
                let user = {
                    userID: result[0].userID,
                    name: result[0].f_name,
                    email: result[0].email,
                };

                // Store user data in the session object
                req.session.user = {id: user.userID,
                                    name: user.name, 
                                    email: user.email};
                console.log(req.session.user)
                res.status(200).json({ 
                    message: `Login successful, Welcome back ${user.name}`,
                    Login: true
                });
            } else {
                res.status(401).json({
                message: "Invalid credentials",
                login: false})
            }
        }
    });

    const authSqlStep2 = "insert into userlogins (userID) values (?);"
    db.query(authSqlStep2, [userID], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log('login saved to db')
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
                
                let user = {
                    userID: result[0].userID,
                    name: result[0].f_name,
                    email: result[0].email
                };

                // Store user data in the session object
                req.session.user = {id: user.userID,
                                    name: user.name, 
                                    email: user.email};
                console.log(req.session.user)
                res.status(200).json({ 
                    message: `Login successful, Welcome back ${user.name}`,
                    Login: true
                });
            } else {
                res.status(401).json({
                message: "Invalid credentials",
                login: false})
            }
        }
    });

    const authSql2Step2 = "insert into userlogins (userID) select userID from suser where full_name=?;"
    db.query(authSql2Step2, [full_name], (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    });

});

app.get("/", (req, res) => {
    if (req.session.user) {    
        return res.json({valid: true, user: req.session.user});
    } else {
    console.log("hehe")
       return res.status(401).json({ valid: false, error: "User not logged in" });
    }
});

//signing up: means not a student
app.post("/sign-up", (req, res) => {
    let { f_name, l_name, passwrd, email, DOB, userID } = req.body;
  
    const signUpQuery = "INSERT INTO suser (userID, f_name, l_name, passwrd, email, DOB, full_name) VALUES (?, ?, ?, ?, ?, ?, CONCAT (?, ' ', ?));"

    db.query(signUpQuery, [userID, f_name, l_name, passwrd, email, DOB, f_name, l_name], (err, result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.sqlMessage)
        }else{
            res.status(200).json({ message: "Account Creation Successful: Welcome!" });
        }
    })
  });

//todo lists and notes app api

app.post('/api/delete-task', (req, res)=>{
    let taskID =req.body.TaskID;

    if(req.session.user){
        let {id} = req.session.user;

        const deleteTaskQuery = "delete from usertasks where taskID=?;"
        db.query(deleteTaskQuery, [taskID], (err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`${taskID} task deleted`)
                res.send("task deleted" )
            }

        })
    }
})

app.post('/api/delete-note', (req, res)=>{
    let noteID =req.body.noteID;

    if(req.session.user){
        let {id} = req.session.user;

        const deleteNoteQuery = "delete from usernotes where noteID=?;"
        db.query(deleteNoteQuery, [noteID], (err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`${noteID} note deleted`)
                res.send("note deleted" )
            }

        })
    }
})

app.get('/api/get-tasks', (req, res)=>{

    if(req.session.user){
        let {id} = req.session.user;

        const getTaskQuery="select * from usertasks where userID=?; "
        db.query(getTaskQuery, [id], (err, result)=>{
        res.send(result)
    })

    }

})

app.get('/api/get-notes', (req, res)=>{
    if(req.session.user){
        let {id} = req.session.user;

        const getNoteQuery="select * from usernotes where userID=?; "
        db.query(getNoteQuery, [id], (err, result)=>{
        res.send(result)
    })

    }
})
   

app.post('/api/add-task', (req, res)=>{
    let {taskID, content}=req.body;

    if(req.session.user){

        let {id} = req.session.user;

        const saveTasksQuery="insert into usertasks(userID, taskID, content) values(?, ?, ?);"

        db.query(saveTasksQuery, [id, taskID, content], (err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("task saved")
                res.send("task saved")
            }
        })
    }else{
        console.log("no user")
    }
})

app.post('/api/add-note', (req, res)=>{
    let {noteID, noteTitle, content}=req.body;

    if(req.session.user){

        let {id} = req.session.user;

        const saveNotesQuery="insert into usernotes (userID, noteID, noteTitle, noteContent) values(?, ?, ?, ?);"

        db.query(saveNotesQuery, [id, noteID, noteTitle, content], (err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("note saved")
                res.send("Note saved")
            }
        })
    }else{
        console.log("no user")
    }
})

