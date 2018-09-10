const express = require('express');
const app = express();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({   
  extended: true
}));

app.get('/updates', (req, res) => {
  var updates = [
    {
      usuario: "username",
      atualizacao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."	
    },
    {
      usuario: "username1",
      atualizacao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."	
    },
    {
      usuario: "username2",
      atualizacao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."	
    },
    {
      usuario: "username3",
      atualizacao: "Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."	
    }
  ];

 
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.send(updates);
});


app.post('/contato', (req, res) => {
  console.log(req.body);

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.send('Requisição post');
});

app.listen(8081, () => console.log('Example app listening on port 8081!'));

