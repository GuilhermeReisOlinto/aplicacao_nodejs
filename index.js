const express = require ("express");
const app = express();
const { engine } = require ('express-handlebars');
const bodyParser = require ('body-parser');
//conf 
    //handlebars 
    app.engine('handlebars', engine({defaultLayout: 'main'}));
    app.set('views engine', 'handlebars');
    app.set("views", "./views");
    //pega dados do body e tranforma em json
    app.use(bodyParser.urlencoded({extend: false}));
    app.use(bodyParser.json);

//Rotas
app.get('/cad', function(req, res){
    res.render('formulario');
});

app.post('/envia', function(req, res){
    res.bodyParser.titulo;
    res.bodyParser.conteudo;
});

// iniciando server
app.listen(8081, function(){
    console.log('conexao bem sucedida');
});







