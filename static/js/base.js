
function setNavEnabled(index) {
    Array.from(document.querySelectorAll('nav > div.container > a.nav-item'))[index].classList += ' enabled'
}