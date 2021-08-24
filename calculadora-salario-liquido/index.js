const readline = require('readline-sync');

function obterAliquotaINSS(salario) {
	switch (true) {
		case (salario <= 1100): return 7.5;
		case (salario > 1100 && salario <= 2203.48): return 9;
		case (salario > 2203.49 && salario <= 3305.22): return 12;
		case (salario > 3305.23 && salario <= 6433.57): return 14;
	}
};

function obterDescontoINSS(salario) {
	if (salario > 6433.57) return 751.99;

	return salario * obterAliquotaINSS(salario);
}

function obterAliquotaIRPF(baseCalculo) {
	switch (true) {
		case (baseCalculo <= 1903.98): return { aliquota: 0, deducao: 0};
		case (baseCalculo > 1903.98 && baseCalculo <= 2826.65): return { aliquota: 7.5, deducao: 142.8 };
		case (baseCalculo > 2826.65 && baseCalculo <= 3751.05): return { aliquota: 15, deducao: 354.8 };
		case (baseCalculo > 3751.05 && baseCalculo <= 4664.68): return { aliquota: 22.5, deducao: 636.13 };
		case (baseCalculo > 4664.68): return { aliquota: 27.5, deducao: 869.63 };
	}
}

function calculaSalario(salarioBruto) {
	const descontoINSS = obterDescontoINSS(7000);
	const baseCalculo = salarioBruto - descontoINSS;
	const { aliquota, deducao } = obterAliquotaIRPF(baseCalculo);
	const descontoIRPF = (baseCalculo*(aliquota/100));
	const descontoIRPFComDeducao = descontoIRPF - deducao;
	const salarioLiquido = baseCalculo - descontoIRPFComDeducao;
	const totalDescontado = descontoINSS + descontoIRPFComDeducao;
	console.log(`Desconto INSS: ${descontoINSS}`);
	console.log(`Base de cálculo: ${baseCalculo}`);
	console.log(`Desconto IRPF: ${descontoIRPF}`);
	console.log(`Desconto IRPF com dedução: ${descontoIRPFComDeducao}`);
	console.log("================================================")
	console.log(`Salário bruto: ${salarioBruto}`);
	console.log(`Total desconto: ${totalDescontado}`);
	console.log(`Salário líquido: ${salarioLiquido}`);
}
	
const salarioBruto = readline.questionFloat('Digite o salário bruto: ');
const salarioLiquido = calculaSalario(salarioBruto);

console.log(salarioLiquido);