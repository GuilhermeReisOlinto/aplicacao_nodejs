//const { sequelize } = require('./db');
const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        typo: db.Sequelize.STRING,
    },
    conteudo: {
        typo: db.Sequelize.STRING
    }
});

//Post.sync({force: true})