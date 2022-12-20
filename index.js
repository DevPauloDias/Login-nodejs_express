const express = require('express');
const app = express();
const port = 3333;


app.use(express.static(__dirname + '/public'));

let routes = require('./Router');

app.use('/', routes);



app.listen(port, ()=>{
    
    console.log('Servidor rodando!')

})
