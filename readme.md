# E-comerce WEBJUMP

Neste projeto teste da WEBJUMP foi solicitado que replicasse um layout referente a uma loja de roupas e calçados passado pela empresa e que o mesmo se tornasse funcional. Nesta funcinalidade o projeto conta com funcionamento de filtros; menus e itens renderizados através do consumo de uma API fornecida. 

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

```
Clonando o projeto do github:

Para baixar o projeto e funcionar de forma correta, é necessário que faça o clone primeiramente da API fornecida pela WEBJUMP para consumo do fornecimento das categorias e produtos utilizadas no desenvolvimento. Posteriormente realize o clone do projeto front end desenvolvido para fins de teste. Para clonar os projetos execute os seguintes comandos 

Api fornecida:
git clone https://bitbucket.org/webjump/assessment-frontend.git

Projeto frontend:
git clone https://github.com/vtrajanodev/desafiowebjump.git

```


### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
 * Node instalado em sua máquina
 * NPM ou Yarn para gerenciamento.

```

### 🔧 Instalação

```
Para instalar e rodar o projeto é necessário que primeiro seja executado o servidor local onde estará hospedado a API fornecida pela WEBJUMP, para isso, execute o seguinte comando:

* Usando NPM:

npm install
npm start

*Usando yarn

yarn
yarn start


Após a API estar hospedada e rodando no seu servidor local, é necessário que seja inicializado o projeto frontend, para isso execute o seguinte comando:

* Usando NPM:

npm install
npm dev

*Usando yarn

yarn
yarn dev
```

## 🛠️ Construído com

Ferramentas utilizadas para desenvolvimento do projeto.

* [Vite] - ferramenta de construção do projeto frontend. Responsável pela criação das primeiras estruturas de pastas do projeto e build do mesmo.
* [Yarn] - Utilizado para gerenciar dependências na instalação e execução de novos pacotes e execução do projeto como gerente de dependências
* [react-router-dom] - Utilizado para gerenciar todo sistema de rotas do front end.
* [SASS] - Pré processador utilizado para folha de estilos em cascata no CSS melhorando a performance da leitura dos estilos e possibilitando o uso de variáveis e funções.
* [Axios] - Cliente HTTP baseado em Promises para fazer requisições a API fornecida.
* [Phosphor] - Pacote disponibilizador de ícones integrado com react onde nos permite utilizar ícones pré-estabelecidos como componentes.

. 

## ✒️ Autores


* **Victor Trajano** - *Trabalho Completo* - [vtrajanodev](https://github.com/linkParaPerfil)

## Details 🤓

* Boas práticas de programação utilizando as melhores atualizações do react 2022 como utilização do Vite e react-router-dom na sua versão mais atual v6.

* Acessibilidade total a todos os públicos. Todas as telas e funcionalidades do app são possíveis de serem utilizadas unicamente através do teclado bem como todos os itens das páginas são totalmente lidos pelo leitor de telas. (Leitor utilizado para testes: NVDA).

* Performance máxima do react atingida com react hooks, programação funcional.

* Utilização do context API mantendo as "regras de negócio" em um arquivo separado dos componentes apenas chamando os valores necessários, tirando a sobrecarga e perca de performance na ré-redenrização do componente.

* Rotas protegidas de forma que o usuário não consegue cair em uma rota a partir do domínio utilizado e se deparar com um erro 404 - not found. Caso o usuário acesse uma rota não existente o mesmo é redirecionado para home automáticamente. 

* Filtros e remoção de filtros funcionais.

* Utilização do pré-processador CSS "SASS" através de sua extensão SCSS.

* Separação de arquivos de componentes, páginas e estilos para fácil manuntenção do código.


* Utilização de @keyframes para animação no SCSS em utilização no componente de loading.

* Utilização de media queries para responsividade no SCSS.

* Responsividade absoluta nos breakpoints (quase todos) solicitados: 1440px, 1024px, 768px. Infelizmente faltou a versão mobile no breakpoint 320px o qual apenas o tempo não permitiu a finalização. 

## 🎁 Expressão de gratidão

* Agradecimentos aos gestores da WEBJUMP e em especial a Maíra a qual me fez o contato referente a vaga de frontend e fez o encaminhamento do teste me tirando todas as dúvidas de forma simples e objetiva. 


---
Desenvolvido com ❤️ por Victor Trajano