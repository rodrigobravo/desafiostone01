var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql2');

var dbConn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'stone'
});

// conexao a base de dados
dbConn.connect();


/* GET -- Listagem de empregados no entrypoint /empregados */
router.get('/', function(req, res, next) {
	dbConn.query('SELECT * FROM empregados', function (error, results, fields) {
			if (error) throw error;
			return res.send({ data: results});
	});
});

app.use(express.json());       
app.use(express.urlencoded()); 

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
		return res.send({ error: false, data: results, message: 'Novo empregado criado.' });
	});
});

/* PUT -- Atualizar empregado com id */
router.put('/', function (req, res) {
	console.log(req.body);
	let emp_id = req.body.id;
	let idade = req.body.idade;
	let nome = req.body.nome;
	let cargo = req.body.cargo;
	if (!emp_id) {
		return res.status(400).send({ error: true, message: 'Preencha id' });
	}
	if (idade) {
		dbConn.query("UPDATE empregados SET idade = ? WHERE id = ?", [idade, emp_id], function (error, results, fields) {
			if (error) throw error;
			return res.send({ error: false, data: results, message: 'Empregado atualizado com sucesso.' });
		});
	}
	if (nome) {
		dbConn.query("UPDATE empregados SET nome = ? WHERE id = ?", [nome, emp_id], function (error, results, fields) {
			if (error) throw error;
			return res.send({ error: false, data: results, message: 'Empregado atualizado com sucesso.' });
		});
	}
	if (cargo) {
		dbConn.query("UPDATE empregados SET cargo = ? WHERE id = ?", [cargo, emp_id], function (error, results, fields) {
			if (error) throw error;
			return res.send({ error: false, data: results, message: 'Empregado atualizado com sucesso.' });
		});
	}

});

/* DELETE -- Remover empregado com id */
router.delete('/', function (req, res) {
	let id = req.body.id;
	if (!id) {
		return res.status(400).send({ error: true, message: 'Fornecer id' });
	}
	dbConn.query('DELETE FROM empregados WHERE id = ?', [id], function (error, results, fields) {
		if (error) throw error;
		return res.send({ error: false, data: results, message: 'Empregado excluido com sucesso'});
	});
}); 

module.exports = router;
