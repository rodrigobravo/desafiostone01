var express = require('express');
var router = express.Router();
var app = express();

var bodyParser = require('body-parser');
var mysql = require('mysql2');

var dbConn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'stone'
});

// connect to database
dbConn.connect();


/* GET -- Listagem de empregados no entrypoint /empregados */
router.get('/', function(req, res, next) {
	dbConn.query('SELECT * FROM empregados', function (error, results, fields) {
			if (error) throw error;
			return res.send({ data: results});
	});
});

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

/* POST -- Adicionar empregado */
router.post('/', function (req, res) {

	let idade = req.body.idade;
	let nome = req.body.nome;
	let cargo = req.body.cargo;
	let record = { idade: idade, nome: nome, cargo: cargo};
	if (!idade) {
		return res.status(400).send({ error: true, message: 'Preencha idade' });
	}
	if (!nome) {
		return res.status(400).send({ error: true, message: 'Preencha nome' });
	}
	if (!cargo) {
		return res.status(400).send({ error: true, message: 'Preencha cargo' });
	}
	dbConn.query("INSERT INTO empregados SET ? ", record, function (error, results, fields) {
		if (error) throw error;
		return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
	});
});

module.exports = router;
