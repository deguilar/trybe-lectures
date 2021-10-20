---
theme: "night"
transition: "slide"
title: "Banco de dados"
enableMenu: false
enableSearch: false
enableChalkboard: false
---

## Funções mais usadaa

![SQL](https://media0.giphy.com/media/vISmwpBJUNYzukTnVx/giphy.gif?cid=ecf05e47hv1z1eppm61bty0c7689aebsjv2cwmex18ayifqh&rid=giphy.gif&ct=g){ width=60% }

---

## Foco de hoje

- If / Case
- Strings
- Operadores Matemáticos
- Operações com datas
- Funções de Agregação
- Agrupamentos
- Filtro de Agrupamento(Having)

---

### IF / CASE

> E se?

---

#### Descubra se uma pessoa é maior de idade

```sql
SET @age = 14;
SELECT IF(@age < 18, 'Di maior', 'Di menor');
```

---


### Strings

* LENGTH
* UCASE
* LCASE
* REPLACE
* LEFT
* RIGHT
* SUBSTRING.

---

### Operadores matemáticos

![math](https://media0.giphy.com/media/XCfBFvZcs5lsc/giphy.gif?cid=ecf05e474h0yagtbytce4ka5p6ga3mpmf3j3mdh7ezftnu89&rid=giphy.gif&ct=g){ width=50% }

---

* DIV
* MOD
* ROUND
* CEIL
* FLOOR
* POW
* SQRT
* RAND

---

### Operadores aritméticos
> Calculando ...

```sql
SELECT 10 + 10;

SELECT 10 - 10;

SELECT 10 * 10;

SELECT 10 / 10;
```

---

### Outros operadores

```sql
SELECT 20 DIV 3; -- retona o número inteiro da divisão

SELECT 18 MOD 3; -- retorna o resto de uma divisão inteira

SELECT ROUND(20.49, 1); -- permite arredondar um valor

SELECT CEIL(20.51); -- arredonda para o número inteiro (cima)

SELECT FLOOR(10.51); -- arredonda para o número inteiro (baixo)

SELECT POW(2, 5); -- potenciação onde temos X elevado a Y.

SELECT SQRT(16); -- retorna a raiz quadrada
```

---

### Operações com datas

![Calendar](https://media1.giphy.com/media/w90dSL511YLiutvRYo/giphy.gif?cid=ecf05e47046vmjtelmpvhxhyehc9zr6dpwv3qyd15z4z8ucd&rid=giphy.gif&ct=g){ width=50% }

---

* CURRENT_DATE
* NOW
* DATEDIFF
* TIMEDIFF

---

#### Diferença entre datas

```sql
SELECT DATEDIFF('2020-05-01', '2020-05-31');
SELECT DATEDIFF(return_date, rental_date) FROM sakila.rental;
```

---

#### Diferença de tempo

```sql
SELECT TIMEDIFF('05:15:30', '06:15:30');
SELECT TIMEDIFF('05:15:30', '05:12:30');
SELECT TIMEDIFF(return_date, rental_date) FROM sakila.rental;
```

---

#### Extraindo uma parte expecifica da data
```sql

SELECT return_date, DATE(return_date) FROM sakila.rental;

SELECT return_date, MINUTE(return_date) FROM sakila.rental; 

```

---


### Funções de Agregação

> Geralmente utilizados em relatórios e gráficos

![Charts](https://media3.giphy.com/media/l2JdTgYZ7VG4EeBVe/giphy.gif?cid=ecf05e47grphvs3htwqv9jmpppowd1jnt6h19frnhy9s4fds&rid=giphy.gif&ct=g){ width=50% }

---

![Charts](./images/min.png){ width=90% }

```sql
SELECT MIN(rental_duration) FROM sakila.film;
```

---

![Charts](./images/max.png){ width=90% }

```sql
SELECT MAX(rental_duration) FROM sakila.film;
```

---

![Charts](./images/avg.png){ width=90% }

```sql
SELECT AVG(rental_duration) FROM sakila.film;
```

---

![Charts](./images/sum.png){ width=90% }

```sql
SELECT SUM(rental_duration) FROM sakila.film;
```

---

![Charts](./images/count.png){ width=90% }

```sql
SELECT COUNT(rental_duration) FROM sakila.film;
```

---

### Group By

---

![Group](./images/group.png){ width=70% }

---

![Group](./images/group-complete.png){ width=80% }

---

### Having

(Where dos grupos)

---

![Having](./images/having.png){ width=80% }

---

![Having](./images/having-complete.png){ width=80% }

---

### Dúvidas?

![alt](https://media3.giphy.com/media/3o6MbudLhIoFwrkTQY/giphy.gif?cid=790b76117789c6161150915091725a365bdeac4e06fd01cd&rid=giphy.gif&ct=g){ width=90% }
