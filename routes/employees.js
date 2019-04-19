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


/* POST -- Adicionar empregado */
router.post('/', function (req, res) {

	let employee = req.body.employee;

	if (!employee) {
		return res.status(400).send({ error: true, message: 'Please provide user' });
	}

	dbConn.query("INSERT INTO empregados SET ? ", { employee: empregado }, function (error, results, fields) {
		if (error) throw error;
		return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
	});
});

module.exports = router;
