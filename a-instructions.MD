Instruções para o teste

O projeto deverá ser desenvolvido neste repositório e ao término, deverá ser publicado em uma branch com a seguinte nomeclatura: release/nome-candidato; Você deverá detalhar como podemos rodar a aplicação em um arquivo readme na sua branch;

Sobre o aplicativo Nossa necessidade atual é desenvolver uma webapp utilizando ReactJs como tecnologia e que tenha as seguintes funcionalidades:

* Receber dados de um endpoint REST e renderizar uma lista com as seguintes colunas: | Id | Nome | Sobrenome | Email | Idade | Ações | Obs.: Na coluna ações deve conter um botão.

* Implementar ordenação por id e/ou idade.

* Implementar paginação através dos parametros de URL _start e _end do endpoint REST com 5 itens por página.

* Fazer com que seja possível visualizar uma página com mais informações do usuário ao clicar no botão da coluna "Ações".

Sobre a API Você deverá utilizar o json-server (https://github.com/typicode/json-server) rodando com os dados que você tem disponível no arquivo db.json que está no repositório deste teste.

Endpoints REST GET /users GET /users/1 GET /posts/1?_start=0&_end=5

O que será avaliado? 

* Entendimento do que precisa ser feito; 
* Afinidade com o repositório Git; 
* Qualidade e reusabilidade dos componentes desenvolvidos;
* Componentes reutilizaveis escritos de forma sucinta e simples;
* Commit messages breves que descrevem com clareza o que foi feito;
* Organização e padronização entre arquivos JS e CSS;
* Testes unitários de componentes;
* BONUS: Demonstração de afinidade com novas features do React (Hooks), deploy no Heroku.

Boa sorte!