var express = require('express')
  , cors = require('cors')
  , app = express()
  , jwt = require('jsonwebtoken');

var client_id = 'MxPklQCyko4T1lfQmZOAQnSA7ZhCYDN7';
  
app.use(cors());

app.get('/products/:id', function(req, res, next){
  //console.log(JSON.stringify(req.headers));
  var token = req.headers['authorization'];
  console.log(token);
  var decoded = jwt.decode(token.replace('Bearer ', ''));
  console.log(decoded);
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(8081, function(){
  console.log('CORS-enabled web server listening on port 8081');
});