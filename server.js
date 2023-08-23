require('dotenv').config();
const express = require('express')
const app = express();
const fruits = require('./models/fruits.js')
const reactViews = require('express-react-views');
const Vegetable = require('./models/vegetable');
const mongoose = require('mongoose');



app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.once('open', () => {
    console.log('connected to mongo')
  })
  

app.get('/vegetables', async (req, res) => {
  const vegetables = await Vegetable.find({});
  res.render('vegetables/index', { vegetables });
});


app.use(express.urlencoded({extended:true}));



app.get('/fruits', (req, res) => {
        res.send(fruits);
    res.render('Index', {
        fruits: fruits
    });
});


app.get('/fruits/new', (req, res) => {
    res.render('New');
});


app.get('/fruits/:indexOfFruitsArray', (req, res) => {
     res.send(fruits[req.params.indexOfFruitsArray]);
    res.render('Show', {
        fruit: fruits[req.params.indexOfFruitsArray]
    });

});


app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true;
    } else { 
        req.body.readyToEat = false;
    }
    fruits.push(req.body);
    res.redirect('/fruits'); 
});


app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

app.listen(3005,  () => {
    console.log("Listening on Port 3005")
})