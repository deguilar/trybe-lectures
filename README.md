# Repositório de aulas ao vivo para estudante da Turma 10 - Tribo A

### :point_right: Antes de começar

Antes de começar o projeto ou exercícios verifique se o serviço do **MYSQl** esta em funcionamento:

```sh
  // Verificando o status do serviço
  sudo service mysql status

  // Iniciando o serviço
  sudo service mysql start

  // Pauando o serviço
  sudo service mysql stop
```

#### :warning: E se meus testes locais falharem no projeto ? :thinking:

Algumas pessoas podem ter problemas com os testes locais nestes projetos de **MYSQL**, dois possíveis problemas e suas respctivas soluções:

---

Antes de fazer o que esta descrito nos problemas 1 ou 2, entre no MYSQL via linha de comando:

```sh
// 'root' se o seu usuário chamar root
sudo mysql -u root -p
```

---

##### Problema 1

> MySQL Error: Access denied for user root@localhost

Execute os comandos abaixo, dentro do MYSQL:

```
  // 'root' se o seu usuário chamar root
  DROP USER 'root'@'localhost';
```

```
  CREATE USER 'root'@'%' IDENTIFIED BY '';
```

```
  GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
```

```
  FLUSH PRIVILEGES;
```

##### Problema 2

> ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client

Execute os comandos abaixo, dentro do MYSQL:

```sh
// 'root' se o seu usuário chamar root
// se não funcionar remova o @'localhost'

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Seunome123456*';

mysql> flush privileges;

```

---

Ao final dos passos, saia do MYSQL via terminal, pause o serviço e suba novamente:

```sh

mysql> exit

sudo service mysql stop // Para pausar
sudo service mysql start // Para iniciar
```

---

#### :warning: Vale ressaltar que em algumas máquinas os passos não dão certo :disappointed: então suba os requisitos para serem avaliados no GitHub :+1: :warning: