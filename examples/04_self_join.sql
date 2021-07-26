-- Exemplo 1
SELECT a.*, b.* FROM sakila.actor a, sakila.actor B
WHERE a.first_name=b.first_name
order by a.first_name

-- Exemplo 2
SELECT CONCAT(C1.first_name, " ", C1.last_name) AS customer1,
  CONCAT(C2.first_name, " ", C2.last_name) AS customer2
FROM sakila.customer C1,
  sakila.customer C2
WHERE C1.first_name = C2.first_name
  AND C1.last_name <> C2.last_name;
