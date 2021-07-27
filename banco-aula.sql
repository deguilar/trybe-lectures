CREATE DATABASE IF NOT EXISTS forum;

USE forum;

CREATE TABLE postagem(
    postagem_id INT PRIMARY KEY auto_increment,
    titulo_postagem VARCHAR(150),
    data_abertura DATETIME,
    data_modificacao DATETIME,
    status_postagem VARCHAR(30)
);