import express from "express";
import router from "./api/routes";
import bodyParser from "body-parser";
const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res) {
    res.send('Hola Mundo!');
  });

  
app.use('/api/v1', router);

app.use((req,res) => {
    res.status(404).send({
        url: req.originalUrl + 'Not found'
    })
})

const server = app.listen(port,function(){
    console.log('Listening on port ' + server.address().port);
})