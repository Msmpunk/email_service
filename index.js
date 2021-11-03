import express from "express";
import router from "./api/routes";

const app = express();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api/v1/', router);

app.use((req,res) => {
    res.status(404).send({
        url: req.originalUrl + 'Not found'
    })
})

const server = app.listen(port,function(){
    console.log('Listening on port ' + server.address().port);
})