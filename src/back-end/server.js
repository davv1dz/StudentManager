const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// allow server to access to different port
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Serve the static files from the React app
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// Connect to Mongo DB
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster1.pmzdfz6.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// schema holds strings
const StudentSchema = new mongoose.Schema({
  name: String,
  surname: String,
  number: Number,
  age: Number,
  course: String,
  yearofstudy: Number,

});

const studentModel = mongoose.model('students', StudentSchema);

app.post('/api/students',(req,res)=>{
  console.log(req.body);

  studentModel.create({
    name: req.body.name,
    surname:req.body.surname,
    number:req.body.number,
    age:req.body.age,
    course:req.body.course,
    yearofstudy:req.body.yearofstudy,

  })
  
  res.send('Data Recieved');
})

app.get('/api/students', (req, res) => {
  studentModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/student/:id', (req, res)=>{
  console.log(req.params.id);
  studentModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

app.put('/api/student/:id', (req, res)=>{
  console.log("Updated: "+req.params.id);

  studentModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    })
})

app.delete('/api/student/:id',(req, res)=>{
  console.log('Deleted: '+req.params.id);
  studentModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname +'/../build/index.html'));
  });