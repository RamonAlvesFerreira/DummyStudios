// Função para verificar os componentes
verifyComponets();

function verifyComponets() {
    // Seleciona todos os elementos com a classe 'create-custom-header'
    var headers = document.getElementsByClassName('create-custom-header'); 
    // Verifica se há cabeçalhos
    if (headers) {
        // Chama a função para criar o cabeçalho
        createHeader(headers);
    }
}

function createHeader(headers) {
    // Para cada cabeçalho encontrado
    for (const h of headers) {
        // Cria um elemento de navegação
        var nav = document.createElement('nav'); 

        // Cria uma linha para o logo
        var divRow = document.createElement('div');

        // Cria um link para o logo
        var a_logo = document.createElement('a');
        // Cria uma imagem para o logo
        var img_logo = document.createElement('img');

        // Cria um link para os botões
        var a_buttons = document.createElement('a');

        // Cria uma linha para separação visual
        var divRowLines = document.createElement('div');
        var divLines = document.createElement('div');

        /* Configurações do cabeçalho */
        nav.classList.add('fixed-top');
        nav.classList.add('HeaderBase');

        divRow.classList.add('row');

        // Configurações do logo
        img_logo.width = 170;
        img_logo.height = 90;
        img_logo.alt = "Dummy Studios";
        img_logo.src = 'https://i.imgur.com/i0lSBcs.png';

        a_logo.classList.add('component');
        a_logo.classList.add('image-link');
        a_logo.classList.add('col-lg-1');
        a_logo.href = 'index.html';
        
  

        // Cria e configura os botões
        var divButtonsRow = document.createElement('div'); // Nova linha para os botões
        divButtonsRow.classList.add('row'); // Adiciona classe 'row' à linha dos botões
        divButtonsRow.classList.add('justify-content-end'); // Alinha os botões à direita

        // Cria e configura os botões
        var a_homeButton = document.createElement('a');
        var a_gamesButton = document.createElement('a');
        var a_companyButton = document.createElement('a');
        var a_newsButton = document.createElement('a'); // Botão de notícias

        a_homeButton.classList.add('MyButtons');
        a_homeButton.classList.add('btn');
        a_homeButton.classList.add('btn-default');
        a_homeButton.classList.add('col-xs-8');
        a_homeButton.classList.add('col-sm-6');
        a_homeButton.classList.add('col-md-2');
        a_homeButton.classList.add('col-lg-1');
        a_homeButton.classList.add('HeaderButtons');
        a_homeButton.href = 'index.html';
        a_homeButton.role = 'button';
        a_homeButton.innerHTML = 'Home'; // Texto para o botão home

        a_gamesButton.classList.add('MyButtons');
        a_gamesButton.classList.add('btn');
        a_gamesButton.classList.add('btn-default');
        a_gamesButton.classList.add('col-xs-10');
        a_gamesButton.classList.add('col-sm-6');
        a_gamesButton.classList.add('col-md-2');
        a_gamesButton.classList.add('col-lg-1');
        a_gamesButton.classList.add('HeaderButtons');
        a_gamesButton.href = 'Games.html';
        a_gamesButton.role = 'button';
        a_gamesButton.innerHTML = 'Games'; // Texto para o botão games

        a_companyButton.classList.add('MyButtons');
        a_companyButton.classList.add('btn');
        a_companyButton.classList.add('btn-default');
        a_companyButton.classList.add('col-xs-10');
        a_companyButton.classList.add('col-sm-6');
        a_companyButton.classList.add('col-md-2');
        a_companyButton.classList.add('col-lg-1');
        a_companyButton.classList.add('HeaderButtons');
        a_companyButton.href = 'Company.html';
        a_companyButton.role = 'button';
        a_companyButton.innerHTML = 'Company'; // Texto para o botão company

        a_newsButton.classList.add('MyButtons');
        a_newsButton.classList.add('btn');
        a_newsButton.classList.add('btn-default');
        a_newsButton.classList.add('col-xs-10');
        a_newsButton.classList.add('col-sm-6');
        a_newsButton.classList.add('col-md-2');
        a_newsButton.classList.add('col-lg-1');
        a_newsButton.classList.add('HeaderButtons');
        a_newsButton.href = 'News.html'; // Link para a página de notícias
        a_newsButton.role = 'button';
        a_newsButton.innerHTML = 'News'; // Texto para o botão de notícias

        // Anexa os botões à linha dos botões
        divButtonsRow.appendChild(a_homeButton);
        divButtonsRow.appendChild(a_gamesButton);
        divButtonsRow.appendChild(a_companyButton);
        divButtonsRow.appendChild(a_newsButton); // Adiciona o botão de notícias

        // Anexa a linha dos botões ao cabeçalho
        a_buttons.appendChild(divButtonsRow); // Anexa a linha dos botões ao link dos botões
        nav.appendChild(a_buttons); // Anexa o link dos botões ao cabeçalho

        // Configurações da linha para separação visual
        divRowLines.classList.add('row');
        divLines.classList.add('Lines');
        divRowLines.appendChild(divLines);

        // Anexa a linha de separação ao cabeçalho
        nav.appendChild(divRowLines);

        // Anexa o cabeçalho ao elemento pai
        h.appendChild(nav);
    }
}