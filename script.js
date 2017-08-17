/**
 * Created by Vasyl on 14.08.2017.
 */

var fader = document.getElementsByClassName('fader')[0];
var toggleButton = document.getElementsByClassName('toggle__button')[0];
var collapsed = false;
var sidebar = document.getElementsByClassName('sidebar')[0];
var companyTitle = document.getElementsByClassName('company__title')[0];
var mainHeader = document.getElementsByClassName('main__header')[0];
var cell = document.getElementsByClassName('cell');
var main = document.getElementsByTagName('main')[0];
var dashBoard = document.getElementsByClassName('dashboards')[0];
var userPic = document.getElementsByClassName('header__user')[0];
var nodeArr = [ toggleButton, sidebar, companyTitle, mainHeader, main];
window.addEventListener('resize', mob);
sidebar.addEventListener('mouseover', overCollapse);
sidebar.addEventListener('mouseout', outUnCollapse);
dashBoard.addEventListener('click', activate);
toggleButton.addEventListener('click', collapse);
fader.addEventListener('click', collapse);


window.onload = mob;

function mob() {
    if (window.innerWidth < 840) {
        for (var j = 0; j < nodeArr.length; j++) {
            nodeArr[j].classList.add('collapsed');
        }
        userPic.style.display = 'inline-block';
        for (var i = 0; i < cell.length; i++) {
            cell[i].classList.add('collapsed');
        }

        if (sidebar.classList.contains('collapsed') && window.innerWidth < 840) {
            sidebar.style.display = 'none';
            fader.style.display = 'none';
        } else if (window.innerWidth < 840) {
            sidebar.style.display = 'block';
            fader.style.display = 'block';
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
        userPic.style.display = 'none'
        sidebar.style.display = 'block';
        fader.style.display = 'block';
    } else if (window.innerWidth < 840) {
        sidebar.style.display = 'none';
        userPic.style.display = 'block';
        fader.style.display = 'none';
    }

    for (var j = 0; j < nodeArr.length; j++) {
        nodeArr[j].classList.toggle('collapsed');
    }
    for (var i = 0; i < cell.length; i++) {
        cell[i].classList.toggle('collapsed');
    }

    if (!collapsed) {
        collapsed = true;
    } else collapsed = false;
}

function activate() {
    dashBoard.classList.toggle('active');
}

function outUnCollapse() {
    if (collapsed) {
        for (var j = 0; j < nodeArr.length; j++) {
            nodeArr[j].classList.add('collapsed');
        }
    }
}

function overCollapse() {
    if (collapsed) {
        for (var j = 0; j < nodeArr.length; j++) {
            nodeArr[j].classList.remove('collapsed');
        }
    }
}