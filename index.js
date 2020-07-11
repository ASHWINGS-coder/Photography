const express = require('express'); // requiring express
const app = express(); // using express
const port = 5000; // initialising port
const expressLayouts = require('express-ejs-layouts');//importing ejs libaray
const db = require('./config/mongoose'); // connecting db
const passport = require('passport'); // using passport
// importing local strategy
const passportLocal = require('./config/passport-local-strategy');

app.use(express.urlencoded()); // using url encoded

// set up the  view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routers'));

app.listen(port,(err) => {
    if(err){
        console.log('Error in running server');
    }
    console.log(`server is running on port ${port}`);  
})