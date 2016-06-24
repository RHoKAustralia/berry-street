var express = require('express')
  , cors = require('cors')
  , app = express()
  , secret = require('./secret.js');
  
app.use(cors());
app.use(secret.jwtCheck);

app.get('/products/:id', function(req, res, next){
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(8081, function(){
  console.log('CORS-enabled web server listening on port 8081');
});