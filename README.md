# desafiostone01
Desafio Stone Tecnologia RC

Instru��es para cria��o do banco inicial e tabelas :

	create database stone;
	use stone;
	create table if not exists empregados(
		id int auto_increment primary key,
		idade int,
		nome varchar(50),
		cargo varchar(30)
	)default charset=utf8;

---------------------------------

Instala��o dos pacotes node iniciais:

	npm install -g sequelize-cli --save  mysql2 --save body-parser --save express-generator


Cria��o do projeto com Express :

	express �view=pug desafiostone01

Instala��o das depend�ncias do projeto:
	
	npm install

Prepara��o das configura��es do banco de dados:

	sequelize init


Caso a instala��o seja em ambiente Windows, alterar o arquivo models/index.js no trecho:
	const config = require(__dirname + �/..\config\config.json�)[env];

para:
	const config = require(__dirname + �/../config/config.json�)[env];


LOG DE A��ES: arquivo access.log na raiz do projeto.