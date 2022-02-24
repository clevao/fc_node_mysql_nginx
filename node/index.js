const express = require('express')
const app = express();
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')

app.get('/', (req, res) => {
    const conn = mysql.createConnection(config)

    const sql = `INSERT INTO people (name) VALUES ('Leticia')`
    conn.query(sql)
    
    conn.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        
        let nameList = '';

        nameList = nameList + '<ul>'
        Object.keys(result).forEach(function(key) {
            var row = result[key];
            nameList = nameList + '<li>' + row.name + '</li>';
        });
        nameList = nameList + '</ul>'

        res.send('<h1>Full Cycle Rocks!</h1>' + nameList)
    });
    conn.end();

   

    
})

app.listen(port, () => {
    console.log('Ronando na porta ' + port)
})

