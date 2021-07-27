DROP FUNCTION IF EXISTS ObterDescricaoDaDuracao;

-- STORED FUNCTION COM PARAMETRO DETERMINISTICA

DELIMITER $$

CREATE FUNCTION ChecarMaiorIdade(age INT(11)) 
RETURNS VARCHAR(50)
DETERMINISTIC
BEGIN
    RETURN IF(age >= 18, "Maiord de Idade", "Menor de Idade")
END $$ DELIMITER ;

SELECT ChecarMaiorIdade(40);

-- SELECT ObterDescricaoDaDuracao(length) FROM customer;