const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'mysql',
    password: 'mysql',
    database: 'nodedb'
};
const connection = mysql.createConnection(config)

const tableSql = `CREATE TABLE IF NOT EXISTS 
    people (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name varchar(255)
        )`

connection.query(tableSql)
connection.end()


const requestHandler = (req, res) => {
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values('Pessoa')`
    connection.query(sql)

    connection.query(
        `SELECT id, name from people`,
        (err, result) => {
            if (err) {
                throw err
            }

            const peoples = result.map(people => {
                return `<div>- ${people.name}:${people.id}</div>`
            })
            res.send('<h1>Full Cycle!</h1>' + peoples.join(""))
            connection.end()
        }
    )

}

app.get('/', requestHandler)

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})