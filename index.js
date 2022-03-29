const express = require("express");
const app = express();
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');
//conf 
//handlebars 
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('views engine', 'handlebars');
app.set("views", "./views");
//pega dados do body e tranforma em json
app.use(bodyParser.urlencoded({ extend: false }));
app.use(bodyParser.json);

//Rotas
//redirecionando, para um post na tela 
app.get('/', function(req, res) {
    Post.all({
        order: [
            ['id', 'DESC']
        ]
    }).then(function(posts) {
        res.render('home', { posts: posts });
    })
});

app.get('/cad', function(req, res) {
    res.render('formulario');
});

//criando usuario, enviando para banco de dados 
app.post('/envia', function(req, res) {
    Post.create({
        titulo: res.bodyParser.titulo,
        conteudo: res.bodyParser.conteudo
    }).then(function() {
        res.redirect('home');
    }).catch(function(error) {
        res.send("erro no post " + error)
    })
});

//DELETANDO, passando id 
app.get('/deletar/:id', function(req, res) {
    Post.destroy({ where: { 'id': req.params.id } });
});

// iniciando server
app.listen(8081, function() {
    console.log('conexao bem sucedida');
});