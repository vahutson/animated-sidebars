/**
 * Created by Vasyl on 14.08.2017.
 */

var toggleButton = document.getElementsByClassName('toggle__button')[0];
var sidebar = document.getElementsByClassName('sidebar')[0];
var companyTitle = document.getElementsByClassName('company__title')[0];
var mainHeader = document.getElementsByClassName('main__header')[0];
var cell = document.getElementsByClassName('cell');
var main = document.getElementsByTagName('main')[0];
var dashBoard = document.getElementsByClassName('dashboards')[0];
dashBoard.addEventListener('click', activate);
toggleButton.addEventListener('click', collapse);

function collapse() {
    toggleButton.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
    companyTitle.classList.toggle('collapsed');
    mainHeader.classList.toggle('collapsed');
    main.classList.toggle('collapsed');
    for (var i = 0; i < cell.length; i++) {
        cell[i].classList.toggle('collapsed');
    }
}

function activate() {
    dashBoard.classList.toggle('active');
}
