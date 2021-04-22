## O que é o jest
Framework de testes utilizado para criar testes unitários nas aplicacoes Javascript

## Como instalamos o jest
Utilizamos o comando no terminal `npm install` com a flag `--save-dev`. Essa flag diz que o jest sera instalado apenas para o ambiente de desenvolvimento, ou seja, o jest nao estara no codigo quando ele estiver em producao.
```s
npm install --save-dev jest
```

Após a instalacao devemos adicionar no arquivo `package.json` o nosso script que chama o jest

```json
{
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^26.6.3"
  }
}
```

## O que é a pasta node_modules
Pasta que fica dentro do nosso projeto e armazena todas as bibliotecas e frameworks que instalamos com o `npm install`.

## O que é o arquivo package.json
Arquivo principal do nosso projeto Javascript que descreve quais scripts existem, quais bibliotecas e frameworks foram instalados e algumas outras informacoes sobre o projeto (versão, criador)

## O que é gitignore
Arquivo que diz ao git quais arquivos ou pastas nao serão versionados (não serão mandados para o Github por exemplo)

## Como criamos um test? (test, expect)
Utilizamos a funcao `test` do jest para criarmos um teste. Essa funcao recebe um `string` que descreve o que o teste faz e uma funcao. Dentro da funcao criamos nosso teste e validamos ele com o `expect`
```js
const sum = (a, b) => a + b
test('Soma os numeros 2 mais 2', () => {
  expect(sum(2, 2)).toBe(4)
})
```

## O que é describe
```js
const sum = (a, b) => a + b
describe('Teste da funcao sum', () => {
  test('Soma os numeros 2 mais 2', () => {
    expect(sum(2, 2)).toBe(4)
  })
  test('Soma os numeros 2 mais 0', () => {
    expect(sum(2, 0)).toBe(2)
  })
})

```

## Para que serve as flags --watch e o --coverage
A flag `--watch` quando passada ao nosso script de teste dentro do `package.json` (`"teste": "jest --watch"`) deixa o teste em loop, ou seja, ele vai ficar rodando no terminal sem precisar escrever `npm test` denovo.
A flag `--coverage` quando passada ao nosso script de teste dentro do `package.json` (`"teste": "jest --coverage"`) gera um relatório das nossas funcoes com a porcentagem do que ja foi testado. O relatorio fica dentro da pasta `coverage` ou pode ser visualizado no terminal tambem.

## O que é falso positivo
São testes que passam porém deveriam falhar, geralmente vinculados os testes de funcoes assincronas.

## Como testar uma funcao que recebe um callback

Uma funcao que assincrona que recebe uma callback como parametro pode ser testada utilizando a funcao `done` do Javascript
```js
const pokeTips = (callback) => {
    setTimeout(() => {
        callback('Bulbasaur é o melhor pokémon para começar.');
    }, 2000);
};

test('pokeTips retorna a mensagem sobre Bulbasaur', (done) => {
    const callback = (mensagemDaFuncao) => {
        expect(mensagemDaFuncao).toBe('Bulbasaur é o melhor pokémon para começar.');
        done()
    };
    pokeTips(callback);
}); 
```

## Como testar uma funcao que retorna uma promise usando then e catch
```js
const pokeTips = (pokemon) => {
    return new Promise((resolve, reject) => {
     setTimeout(() => {
       if(pokemon === `Bulbasaur`) {
          resolve('Bulbasaur é o melhor pokémon para começar.');
       }
      reject('Pokemon invalido')
      }, 500);
    })
};

test('pokeTips retorna a mensagem sobre Bulbasaur', () => {
  const callback = (mensagemDaFuncao) => {
    expect(mensagemDaFuncao).toBe('Bulbasaur é o melhor pokémon para começar.');
  };

  expect.assertions(1)
  return pokeTips('Bulbasaur').then(callback)
}); 

test('pokeTips retorna pokemon invalido se nao é o Bulbasaur', () => {
  const callback = (mensagemDaFuncao) => {
    expect(mensagemDaFuncao).toBe("Pokemon invalido");
  };

  expect.assertions(1)
  return pokeTips('Pikachu').catch(callback)
});  
```

## Como testar uma funcao que retorna uma promise usando async/await
Tambem podemos usar o `async/await` para testarmos nossas funcoes que retornam uma `Promise`

```js
test('pokeTips retorna a mensagem sobre Bulbasaur', async () => {
  expect.assertions(1)
  
  const mensagemDaFuncao = await pokeTips('Bulbasaur')
  expect(mensagemDaFuncao).toBe('Bulbasaur é o melhor pokémon para começar.');
});

test('pokeTips retorna pokemon invalido se nao é o Bulbasaur', async () => {
  expect.assertions(1)
  
  try {
    await pokeTips('Pikachu')
  }
  catch (e) {
    expect(e).toMatch("Pokemon invalido");
  }
});
```

## O que é o .resolves e o .rejects
Uma outra forma de pegar os resultados da chamada da funcao assincrona
```js
test('pokeTips retorna a mensagem sobre Bulbasaur', async () => {
  await expect(pokeTips('Bulbasaur')).resolves.toBe('Bulbasaur é o melhor pokémon para começar.');
});

test('pokeTips retorna pokemon invalido se nao é o Bulbasaur', async () => {
  await expect(pokeTips('Pikachu')).rejects.toBe("Pokemon invalido");
});
```