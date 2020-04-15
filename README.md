# Listar repositórios de usuário do GitHub

O GitHub é a nossa rede social, e por que não usar sua API junto com os seus novos conhecimentos em programação asíncrona, validação de formulários e consumo de APIS pra construir algo novo? O seu objetivo é criar uma aplicação que lista os repositórios de um usuário do GitHub!

## Requisitos

Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

Na primeira execução rodar o comando:

```bash
$ npm install
```

Depois, para começar a desenvolver

```bash
$ npm start
```

## Tópicos

Com esse desafio, você aprenderá:

- Promises
- Forms in React
- Axios
- Fetch API
- State

### Tarefas

- Ler o texto de um `input` para pegar o nome do usuário a ter os repositórios listados assim que o formulário for submetido
- Pré validar o conteúdo do input de acordo com estas regras:
  - Somente caracteres alfanuméricos ou um único hífen
  - Não pode começar ou terminar com hífen
  - Máximo de 39 caracteres
- Fazer requisição para o endpoint do GitHub quando apertar `enter` no input somente se o nome de usuário for válido
- Se o usuário não existir (404) exibir erro de validação de usuário não encontrado
- Se o usuário não tiver nenhum repositório, exibir um "Empty State" de "O usuário não tem nenhum repositório"
- Se a request for bem sucessida e o usuário ter 1 ou mais repositórios, liste-os.
  - Deve-se exibir ao menos informaçōes básicas do repositório (nome, link e número de stars)

### Exemplo

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/vue-3/tToalvQ.gif)

### Atenção

O input deve conter um atributo `data-test` com o valor `entrada`
O container do "404" deve conter uma atributo `data-test` com o valor `nao-encontrado`
O container do "Empty State" deve conter uma atributo `data-test` com o valor `sem-repositorios`
Cada container de repositório deve conter uma atributo `data-test` com o valor `repositorio`
