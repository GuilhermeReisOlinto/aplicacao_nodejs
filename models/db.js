const Sequelize = require ('sequelize');

    //conexao com BD
    const sequelize = new Sequelize('TABELASDECURSOS', 'DESKTOP-CSU8O25\GuilhermeOlinto', '', {
        host: 'localhost',
        dialect: 'mssql'
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}