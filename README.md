# DocDash - Dashboard para solicitação de documentos

## Iniciar o projeto

Primeiro, clone o projeto e instale os pacotes necessários:

```bash
git clone https://github.com/GuiFerrari/docdash.git
$ cd docdash
$ yarn install
```

Após a instação dos pacotes, vamos rodar o servidor com o seguinte comando:

```bash
$ json-server --watch database/db.json --port 3333
```

Com nosso servidor rodando, abra outro terminar para rodar o front-end com o seguinte comando:

```bash
$ yarn dev
```

Pronto! Agora você já consegue visualizar o projeto na rota `http://localhost:3000/` 😁

## Frameworks e bibliotecas

- React && Next.JS
- Axios
- Date-fns
- Formik
- React-icons
- React-input-mask
- React-toastify
- Sass
- Yup

### Features

- [x] A listagem, o cadastro e a exclusão de documentos devem ser feitas através de uma API REST. Para criar essa API, utilize o pacote NPM json-server.
- [x] Utilizar algum pré-porcessador CSS (Exemplo: sass ou less)
- [x] Realizar validação de campos com preenchimento obrigatório
- [x] Adicionar máscaras de CNPJ, CPF e CEP
- [x] Retornar feedback de cadastro e exclusão de documento
- [x] Adicionar Empty Space com a mensagem de "Nenhum documento criado" quando não houver documentos na listagem
- [x] Atualizar contagem de documentos no título da listagem, conforme os itens forem adicionados ou removidos
- [x] Realizar preenchimento automático dos campos de endereço após o usuário digitar o CEP. Utilize a API do VIA CEP
- [ ] Criar uma páginação de documentos, caso a listagem ultrapasse mais de 10 itens
- [ ] Exibir uma mensagem indicando ao usuário que a aplicação esta processando a requisição, enquanto realiza a criação de um novo de documento. (Loading)

---

Feito com ♥ por Guilherme Ferrari
