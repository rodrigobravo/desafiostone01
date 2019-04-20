# desafiostone01
Desafio Stone Tecnologia RC

Instruções para criação do banco inicial e tabelas :

	create database stone;
	use stone;
	create table if not exists empregados(
		id int auto_increment primary key,
		idade int,
		nome varchar(50),
		cargo varchar(30)
	)default charset=utf8;

---------------------------------

Instalação dos pacotes node iniciais:

	npm install -g sequelize-cli --save  mysql2 --save body-parser --save express-generator


Criação do projeto com Express :

	express –view=pug desafiostone01

Instalação das dependências do projeto:
	
	npm install

Preparação das configurações do banco de dados:

	sequelize init


Caso a instalação seja em ambiente Windows, alterar o arquivo models/index.js no trecho:
	const config = require(__dirname + ‘/..\config\config.json’)[env];

para:
	const config = require(__dirname + ‘/../config/config.json’)[env];


** LOG DE AÇÕES: arquivo access.log na raiz do projeto. **

** Instruções: **
*** Entrypoint da API : /empregados ***

* GET -> retorna todos os epregados da base
* POST -> Cria um novo empregado com os parametrs idade(integer), nome(string) e cargo(string) sendo passados no body da requisição
* PUT -> Edita um empregado com o respectivo id(integer) sendo passado no body da requisição, juntamente com o campo a ser editado
* DEETE -> Remove o empregado com o id passado no body da requisição
