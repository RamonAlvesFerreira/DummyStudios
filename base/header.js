verifyComponets();

function verifyComponets() {
    var headers = document.getElementsByClassName('create-custom-header');

    if (headers) {
        createHeader(headers);
    }
}

function createHeader(headers) {
    for (const h of headers) {

        /*VARs*/
        var nav = document.createElement('nav');
        var divRow = document.createElement('div');

        var a_logo = document.createElement('a');
        var img_logo = document.createElement('img');

        var divRowLines = document.createElement('div');
        var divLines = document.createElement('div');

        var a_buttons = document.createElement('a');

        var a_homeButton = document.createElement('a');
        var a_gamesButton = document.createElement('a');
        var a_companyButton = document.createElement('a');
        var a_newsButton = document.createElement('a');

        var p_homeText = document.createElement('p');
        var p_newsText = document.createElement('p');
        var p_gamesText = document.createElement('p');
        var p_companyText = document.createElement('p');

        /*INFOS */

        nav.classList.add('HeaderBase');

        divRow.classList.add('row');

        //Logo
        img_logo.width = 170;
        img_logo.height = 90;
        img_logo.alt = "Dummy Studios";
        img_logo.src = 'https://i.imgur.com/i0lSBcs.png';

        a_logo.classList.add('component');
        a_logo.classList.add('col-lg-2');
        a_logo.href = 'index.html';



        a_logo.appendChild(img_logo);
        divRow.appendChild(a_logo);

        nav.appendChild(divRow);

        //Space between
        a_buttons.classList.add('col-lg-5');

        divRow.appendChild(a_buttons);

        //Home
        a_homeButton.classList.add('FirstHeaderButtons');
        a_homeButton.classList.add('btn');
        a_homeButton.classList.add('btn-default');
        a_homeButton.classList.add('col-xs-8');
        a_homeButton.classList.add('col-sm-6');
        a_homeButton.classList.add('col-md-2');
        a_homeButton.classList.add('col-lg-1');
        a_homeButton.href = 'index.html';
        a_homeButton.role = 'button';
        //a_homeButton.innerHTML = 'Home';

        p_homeText.classList.add('TextHeaderButtons');
        p_homeText.innerHTML = 'Home';
        a_homeButton.appendChild(p_homeText);

        divRow.appendChild(a_homeButton);

        //News
        a_newsButton.classList.add('HeaderButtons');
        a_newsButton.classList.add('btn');
        a_newsButton.classList.add('btn-default');
        a_newsButton.classList.add('col-xs-10');
        a_newsButton.classList.add('col-sm-6');
        a_newsButton.classList.add('col-md-2');
        a_newsButton.classList.add('col-lg-1');
        a_newsButton.href = 'News.html';
        a_newsButton.role = 'button';
        //a_newsButton.innerHTML = 'News';

        p_newsText.classList.add('TextHeaderButtons');
        p_newsText.innerHTML = 'News';
        a_newsButton.appendChild(p_newsText);

        divRow.appendChild(a_newsButton);

        //Games
        a_gamesButton.classList.add('HeaderButtons');
        a_gamesButton.classList.add('btn');
        a_gamesButton.classList.add('btn-default');
        a_gamesButton.classList.add('col-xs-10');
        a_gamesButton.classList.add('col-sm-6');
        a_gamesButton.classList.add('col-md-2');
        a_gamesButton.classList.add('col-lg-1');
        a_gamesButton.href = 'Games.html';
        a_gamesButton.role = 'button';
        //a_gamesButton.innerHTML = 'Games';

        p_gamesText.classList.add('TextHeaderButtons');
        p_gamesText.innerHTML = 'Games';
        a_gamesButton.appendChild(p_gamesText);

        divRow.appendChild(a_gamesButton);

        //Company
        a_companyButton.classList.add('HeaderButtons');
        a_companyButton.classList.add('btn');
        a_companyButton.classList.add('btn-default');
        a_companyButton.classList.add('col-xs-10');
        a_companyButton.classList.add('col-sm-6');
        a_companyButton.classList.add('col-md-2');
        a_companyButton.classList.add('col-lg-1');
        a_companyButton.href = 'Company.html';
        a_companyButton.role = 'button';
        //a_companyButton.innerHTML = 'Company';

        p_companyText.classList.add('TextHeaderButtons');
        p_companyText.innerHTML = 'Company';
        a_companyButton.appendChild(p_companyText);

        divRow.appendChild(a_companyButton);

        divRowLines.classList.add('row');
        divLines.classList.add('Lines');
        divRowLines.appendChild(divLines);

        nav.appendChild(divRowLines);

        h.appendChild(nav);
        h.classList.add('fixed-top');
    }
}