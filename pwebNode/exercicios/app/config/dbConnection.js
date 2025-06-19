let sql = require('mssql');

let connSQLServer = function(){
    const sqlConfig = {
        user: 'BD2313045',
        password: 'NadyMathe8',
        database: 'BD',
        server: 'apolo',
        options:{
            encrypt: false,
            trustServerCertificate: true,
        }
    }
    return sql.connect(sqlConfig);
}

module.exports = function(){
    console.log('O autoload carregou o módulo de conexão com o bd');
    return connSQLServer;
}