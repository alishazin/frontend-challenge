
var secondaryNavObject;

function onLoad() {
    initializeNavButton()
}

function setNavEnabled(index) {
    Array.from(document.querySelectorAll('nav > div.container > a.nav-item'))[index].classList += ' enabled'
}

function initializeNavButton() {
    console.log(100)
    secondaryNavObject = {
        button : document.querySelector('nav > div.mobile-nav-button'),
        navBox : document.querySelector('nav > div.container'),
        _openState : false,
        get openState() {
            return this._openState
        },
        set openState(arg) {
            if (arg === true) {
                this.button.classList += ' open'
                this.navBox.classList += ' open'
            } else if (arg === false) {
                this.button.classList = 'mobile-nav-button'
                this.navBox.classList = 'container'
            }
            this._openState = arg
        },
        addCallbacks : function () {
            this.button.onclick = () => {
                this.openState = this.openState == true ? false : true
            }
        }
    }

    secondaryNavObject.addCallbacks();
}