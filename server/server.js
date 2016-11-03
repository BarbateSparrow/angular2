let express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');


let mongodb = require('mongodb'),
    mongoose = require('mongoose'),

    schema = require('./routes/shema').user_schema;

let uri = 'mongodb://localhost:27017/crunchbase';
mongoose.Promise = global.Promise;
// let doc = {
//     title: 'Jaws',
//     year: 1970,
//     director: 'Steven Spielberg',
//     rating: 'PG',
//     one: {
//         more: 'field'
//     }
// };
// mongoose.connect(uri);
// let User =  mongoose.model('User', schema);
//
// let user = new User({
//     name: 'Dmitriy',
//     email: 'jhonatanlivingston@com.ua'
// });
//
// user.save().then(error => {
//     if (error) {
//         console.log(error);
//         process.exit(1);
//     }
//     User.find({email: 'jhonatanlivingston@com.ua'}, (error, doc) => {
//         if (error) {
//             console.log(error)
//             process.exit(1);
//         }
//         console.log(require('util'.inspect(doc)));
//         process.exit(0)
//     })
// });

// mongodb.MongoClient.connect(uri, (error, db) => {
//     if (error) {
//         console.log(error);
//         process.exit(1)
//     }
//
//     let query  = {'category_code':'biotech'};
    /*
    db.collection('companies').find(query).toArray((error, docs) => {
        if (error) {
            console.log(error);
            process.exit(1)
        }

        console.log('Found docs:', docs.length);


        docs.forEach((doc) => {
            console.log(JSON.stringify(doc))
        });


        process.exit(0);
    });
    */
//     db.collection('companies').find(query).project({name: 1, category_code: 1, _id: 0}).forEach((doc) =>{
//         console.log(doc)
//     }, (error) => {
//         if (error) {
//             console.log(error);
//             process.exit(1)
//         }
//         return  db.close();
//     });
// });

let app = express();
app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/user/:user', function (req, res) {
    res.send('Page for user: ' + req.params.user + ' with options : ' + req.query.option)
});

app.listen(3000)
