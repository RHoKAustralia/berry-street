var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());

app.get('/products/:id', function(req, res, next){
  console.log(JSON.stringify(req.headers));
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(8081, function(){
  console.log('CORS-enabled web server listening on port 8081');
});