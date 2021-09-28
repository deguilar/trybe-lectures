---
theme: "night"
transition: "slide"
title: "Deploy"
enableMenu: false
enableSearch: false
enableChalkboard: false
---

### 29.2 - Gerenciadores de Processos

---

### O que vamos aprender?

* O que são gerenciadores de processo;
* Como utilizar o pm2 como gerenciados de processo;
* Principais funções do pm2: `start`, `stop`, `restart`, `delete`, `ls`;
* Tratamento de erros com pm2;
* Modo cluster;

---

### O que são?

Softwares criados para facilitar e tornar mais eficaz o gerenciamento de processos

---

### Vantagens

- Maior robustez para as aplicações gerenciadas
- Melhor aproveitamento de recursos
- Monitoramento de aplicações
- Mecanismo de _fail safe_
- Captura de logs

---

### PM2

---

### Vantagens

- Suporte nativo a Node.JS
- Modo Cluster
- Interface de gerenciamento online
- Gerenciamento de logs
- Monitoramento de arquivos
- Integração com o Docker
- PM mais utilizado no mercado

---

### Utilizando

```shell
pm2 start index.js --watch --name colorful-process
```

---

### Hora da Demo! 💻

Show me the code!

---

### Tratamento de erros

- Reinicia os processos automaticamente
- Uma das grandes vantagens de um gerenciador de processos
- Garante que uma aplicação não fique fora do ar por muito tempo

---

### Vamos ver funcionando 🔍

Criando um endpoint de "bug" 🐛

---

## Arquivo ecosystem

Armazenando as configurações dos apps 💾

---

### Arquivo ecosystem


Permite definir as configurações de um ou mais apps para que sejam iniciados já com tudo pronto.

---

#### Exemplo

```yaml
apps:
  - name: colorful-process
    script: ./index.js
    watch: true
```

---

#### Executando

```shell
pm2 start ecosystem.config.yml
```

---

### Lets code!

E lá vamos nós! 🧹

---

### Modo Cluster

Aproveitando todo o poder do servidor 🔥

---

### Pra que serve?

- Utilização máxima dos recursos do servidor
- Distribuir a carga entre mais de um processo
- 0 tempo de downtime em caso de erro

---

### Visualizando

![](images/modo-cluster.png)

---

### Na prática

```yaml
# apps:
#   - name: colorful-process
#     script: ./index.js
#     watch: true
exec_mode: cluster
instances: max
```

---

### Show time

`🟡 🔵 🟢 🔴 colorful_process 🔴 🟢 🔵 🟡`


---

# Fim!