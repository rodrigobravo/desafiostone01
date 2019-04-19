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

	npm install -g sequelize-cli express-generator
