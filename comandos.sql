-- Utilizando variáveis
SET @age = 14;
SELECT IF(@age < 18, 'Minor of age', 'Not minor of age');

SET @is_entrance_allowed = true;
SELECT IF(@is_entrance_allowed = 1, 'Entrance allowed', 'Entrance not allowed');

--################################################################

-- IF ELSE

SELECT title, release_year, `length`,
CASE
    WHEN length <= 60 THEN 'Short duration'
    WHEN length > 60 AND length <= 150 THEN 'Medium duration'
    ELSE 'Long duration'
END AS film_duration_type
FROM sakila.film;

SELECT payment_id,
CASE 
	WHEN payment_id * 10 > 60 THEN 'esta dentro'
	WHEN payment_id * 10 < 60 THEN 'esta fora'
    ELSE 'AQUI É 60'
END as `resultado`
FROM payment;


-- ################################################################

-- STRINGS

SELECT LENGTH('Curso BeTrybe'); -- exibe tamanho da string passada como parâmetro
SELECT UCASE('Curso BeTrybe'); -- transforma em caixa alta a string passada como parâmetro
SELECT LCASE('Curso BeTrybe'); -- transforma em caixa baixa a string passada como parâmetro
SELECT REPLACE('Curso BeTrybe', 'e', 'eeee'); -- substitui todas as ocorrências de 'e' por 'eeee' em 'Curso BeTrybe'

-- INDICE NO SQL INICIA NO 1 E NÃO NO 0
SELECT LEFT('Curso BeTrybe', 5); -- extrai 5 caracteres a partir da esquerda
SELECT RIGHT('Curso BeTrybe', 5); -- extrai 5 caracteres a partir da direita

-- SUBSTRING(string, posição_inicial)
SELECT SUBSTRING('Curso BeTrybe', 6); -- extrai uma string de tamanho 4, começando a partir do sexto caractere à esquerda

-- SUBSTRING(string, posição_inicial, tamanho)
SELECT SUBSTRING('Curso BeTrybe', 2, 4); -- extrai uma string de tamanho 4, começando a partir do segundo caractere à esquerda
SELECT SUBSTRING('Curso BeTrybe', -5, 6); -- extrai uma string de tamanho 6, começando a partir do quinto caractere à direita


-- ###############################################################

-- GROUP BY

-- Exemplificar a utilização de AVG, MIN, MAX e SUM
SELECT rating, AVG(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(rental_rate)
FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(rental_rate)
FROM sakila.film
GROUP by rating;

-- HAVING
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district
HAVING COUNT(*) >= 2;

SELECT district, COUNT(*) AS district_count
FROM sakila.address
GROUP BY district
HAVING district_count >= 2;


SELECT district, COUNT(*) AS 'district count'
FROM sakila.address
GROUP BY district
HAVING 'district count' >= 2;