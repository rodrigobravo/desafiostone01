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

	npm install -g sequelize-cli express-generator
