var express = require('express'); 
var fs = require('fs');
var app = express();
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express); 
app.use("/static", express.static('./static/'));
app.get('/',function(req,res){
    res.sendFile(__dirname + '/Index.html');
});
var port = process.env.PORT || 80;
var server = app.listen(port);
console.log('Express app started on port ' + port);