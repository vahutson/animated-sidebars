/**
 * Created by Vasyl on 14.08.2017.
 */

var toggleButton = document.getElementsByClassName('toggle__button')[0];
var collapsed = false;
var sidebar = document.getElementsByClassName('sidebar')[0];
sidebar.addEventListener('mouseover', overCollapse);
sidebar.addEventListener('mouseout', outUnCollapse);
var companyTitle = document.getElementsByClassName('company__title')[0];
var mainHeader = document.getElementsByClassName('main__header')[0];
var cell = document.getElementsByClassName('cell');
var main = document.getElementsByTagName('main')[0];
var dashBoard = document.getElementsByClassName('dashboards')[0];
var userPic = document.getElementsByClassName('user__pic__header')[0];
dashBoard.addEventListener('click', activate);
toggleButton.addEventListener('click', collapse);
window.addEventListener('resize', mob);


window.onload = mob;

    function mob() {
        if (window.innerWidth < 840) {
            toggleButton.classList.add('collapsed');
            sidebar.classList.add('collapsed');
            companyTitle.classList.add('collapsed');
            mainHeader.classList.add('collapsed');
            main.classList.add('collapsed');
            userPic.style.display = 'inline-block';
            for (var i = 0; i < cell.length; i++) {
                cell[i].classList.add('collapsed');
            }

            if (sidebar.classList.contains('collapsed') && window.innerWidth < 840) {
                sidebar.style.display = 'none';
            } else if (window.innerWidth < 840){
                sidebar.style.display = 'block';
            }

            if (collapsed === false) {
                collapsed = true;
            } else collapsed = false;
        } else {
            userPic.style.display = 'none';
            sidebar.style.display = 'block';
        }
    }

function collapse() {
    if (sidebar.classList.contains('collapsed') && window.innerWidth < 840) {
        sidebar.style.display = 'block';
    } else if (window.innerWidth < 840){
        sidebar.style.display = 'none';
    }

    toggleButton.classList.toggle('collapsed');
    sidebar.classList.toggle('collapsed');
    companyTitle.classList.toggle('collapsed');
    mainHeader.classList.toggle('collapsed');
    main.classList.toggle('collapsed');
    for (var i = 0; i < cell.length; i++) {
        cell[i].classList.toggle('collapsed');
    }

    if (collapsed === false) {
        collapsed = true;
    } else collapsed = false;
}

function activate() {
    dashBoard.classList.toggle('active');
}

function outUnCollapse() {
    if (collapsed === true) {
        toggleButton.classList.add('collapsed');
        sidebar.classList.add('collapsed');
        companyTitle.classList.add('collapsed');
        mainHeader.classList.add('collapsed');
        main.classList.add('collapsed');
    }
}

function overCollapse() {
    if (collapsed === true) {
        toggleButton.classList.remove('collapsed');
        sidebar.classList.remove('collapsed');
        companyTitle.classList.remove('collapsed');
        mainHeader.classList.remove('collapsed');
        main.classList.remove('collapsed');
    }

}