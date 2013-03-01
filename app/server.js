var express = require("express")
    , http = require('http')
    , path = require('path');
var engines = require('consolidate');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 8000);
    app.set('view engine', 'handlebars');
    app.set("view options", { layout: false });
    app.engine('.html', engines.handlebars);

//    app.use(express.static(path.join(__dirname, '/public/')));
    app.use(express.static('public'))
});


app.get('/',function(req,res){
    res.render('index.html');
});


http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
