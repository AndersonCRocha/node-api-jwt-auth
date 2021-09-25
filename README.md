# node-api-jwt-auth
[Em Desenvolvimento] - API em Node com Express e autenticação JWT desenvolvida com propósito de estudar e conhecer melhor a utilização deste framework.

## Para rodar o projeto

Clone o projeto utilizando o git: 
```
git clone https://github.com/AndersonCRocha/node-api-jwt-auth
``` 
ou faça o download do .zip e extraia em uma pasta de preferência.
Entre na pasta do projeto: `cd path/to/project`

### Docker
Necessário ter o docker instalado na máquina
```
docker compose up
```

### Node local
Necessário ter o Node instalado e o Postgres rodando na porta 5432 e com um banco de dados previamente criado
Crie um arquivo **.env** na raiz do projeto baseado no arquivo **.env.example** que também se encontra na raiz, e preenccha as variáveis de ambiente conforme neccessário para configuração desejada.
Em seguida apenas roda os seguintes comandos:
```
yarn 
yarn dev
```
