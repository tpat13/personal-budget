//Budget API
const express = require('express');
const cors = require('cors');
const mongoose = require ("mongoose");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const budgetModel = require("./models/budget_schema");

let url = 'mongodb://localhost:27017/personal_budget';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//week 5
app.use(cors());

//week 4
app.use('/', express.static('public'));

//const budget = require("./categories"); 


/* //routes
app.get('/hello', (req, res) => {
    res.send('Hello World!');
}); */


//request to "/budget"
app.get('/budget', (req, res) => {
    //res.json(budget);
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
        console.log("Connected to the database");
        //list all entries
        budgetModel.find({})
                  .then((data)=>{
                    res.json(data);  //response
                    console.log(data);
                    mongoose.connection.close();

                 })
                 .catch((connectionError)=>{
                    console.log(connectionError);
                 });
        })
        .catch((connectionError) => {
            console.log(connectionError)
        })   
});

//functionality of adding new data
app.post('/addBudget', (req, res) => {
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> {
            //insertMany
            var budgetData = new budgetModel ({
                title: req.body.title,
                value: req.body.value,
                color: req.body.color
            });
            budgetModel.insertMany(budgetData) 
            .then((data)=>{
            res.json(data);
            mongoose.connection.close();

            })
            .catch((connectionError)=>{
            console.log(connectionError) 
            }) 
    })
    .catch((connectionError) => {
        console.log(connectionError)
    }) 
});


app.listen(port, () => {
    console.log (`API Served at http://localhost:${port}`);
});

