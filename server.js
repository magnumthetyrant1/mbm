//VARIABLE DECLARATION
//===============================
var express = require('express'),
    path    = require('path'),
    swig    = require('swig'),
    app     = express(),
    routes  = require('./public/js/routes');

//SET THE VIEW ENGINE
//===============================
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');
app.set('view cache', false);

//ENABLE THE PATHS IN EXPRESS
//================================
app.use(express.static(path.join(__dirname, 'public')));

//SET THE ROUTES OF THE PROJECT
//================================
app.get('/', routes.index);
app.get('/contact-us', routes.contactus);
app.get('/portfolio', routes.portfolio);
app.get('/success', routes.successes);

//SET THE PORT TO LISTEN ON
//================================
app.listen(3000);
console.log('Application Started on http://localhost:3000/');