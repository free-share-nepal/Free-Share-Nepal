const express = require('express');
// const mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost/user');
// let db= mongoose.connection;


//check connection
// db.once('open',()=>{
//     console.log('connection created');
//     });
    
//     //check for db errors
//     db.on('error', (error)=> {
//     console.log(console.error);
//     });

// init app
const app = express();

console.log('hello');
// let User=require('./models/user');

// load view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.get('/',(req, res) => {
//     let users=User.find();
//         res.render('index', {
//             users:users
//         });
// });

app.route('/user')
    .get((req,res,next)=>{
        console.log('next demo');
        next()
    },
        (req,res)=>{
            res.send('hello world');

    })
    .post((req,res)=>{

    })


// app.get('/',(req,res)=>{
//     var article=[
//         {name:'Manish',address:'kalimati'},
//         {name:'Manisha',address:'kalimati'},
//         {name:'Sonika',address:'kalimati'}
//     ];
// res.json(article);
// });

app.listen(3000,() => {
    console.log('this is first program in node js');
});
