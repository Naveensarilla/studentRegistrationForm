const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
// const fileupload = require('express-fileupload')
// const bodyParser = require('body-parser')
const path = require('path')

const multer = require('multer')
// const upload = multer({storage:multer.memoryStorage()});


const app = express();
app.use(cors());
app.use(express.json())
 app.use(express.static("public"))




// app.use(fileupload());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// for file uloding mysql
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})




const upload = multer({
    storage: storage
})

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'naveen',
    database:'studentdata'
})


app.get('/', (re, res) => {
    // const sql = "SELECT * FROM list";
    //  const sql = "select top 1 * from list";
    const sql = "select *from list ORDER BY id DESC LIMIT 1";


    db.query(sql, (err, result) => {
        if(err) return res.json({Message: 'Error inside server'});
        return res.json(result);
    })
})

// app.post('/upload', upload.single('value'), (req, res) => {
app.post('/upload', upload.fields('value'), (req, res) => {
    // const sql = "INSERT INTO list (`CandidateName`,`DataOfBirth`,`Gender`,`Category`,`EmailId`,`ConfirmEmailId`,`ContactNo`,`Handicapped`,`FathersName`,`Occupation`,`MobileNo`,`Addres`,`CityTown`,`State`,`Distric`,`PinCode`,`Session`,`Center`,`Course`,`batchtype`,`Exam`,`Stream1`,`batch`,`Qualification`,`Stream2`,`NameOfCallage`,`Passingyear`,`MarksIn`,`UplodadPhto`,`Signature`,`Proof`,`ReadTerms`) VALUES(?)";
    
    const sql = "INSERT INTO list(`CandidateName`,`DataOfBirth`,Gender,Category,EmailId,ConfirmEmailId,ContactNo,Handicapped,FathersName,Occupation,MobileNo,Addres,CityTown,State,Distric,PinCode,Session,Center,Course,batchtype,Qualification,Stream2,NameOfCallage,Passingyear,MarksIn,UplodadPhto) VALUES(?)";

    // const sql = "INSERT INTO list(`UplodadPhto`) VALUES(?)";
    // const image = req.file.fieldname;
    const value = [
        req.body.CandidateName,
        req.body.DataOfBirth,
        req.body.Gender,
        req.body.Category,
        req.body.EmailId,
        req.body.ConfirmEmailId,
        req.body.ContactNo,
        req.body.Handicapped,
        req.body.FathersName,
        req.body.Occupation,
        req.body.MobileNo,
        req.body.Addres,
        req.body.CityTown,
        req.body.State,
        req.body.Distric,
        req.body.PinCode,
        req.body.Session,
        req.body.Center,
        req.body.Course,
        req.body.batchtype,
        // req.body.Exam,
        // req.body.Stream1,
        // req.body.batch,
        req.body.Qualification,
        req.body.Stream2,
        req.body.NameOfCallage,
        req.body.Passingyear,
        req.body.MarksIn,
        req.file.UplodadPhto,
        // req.body.Signature,
        // req.body.Proof,
        // req.body.ReadTerms  
    ]
    db.query(sql, [value], (err, result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
    console.log(req.file);
})


app.listen(709, () => {
    console.log(' 709 I am Waching Kevin......')
})