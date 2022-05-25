

class DropDownMenuController {
    constructor(drop_down_menu_id) {
        this.drop_down_menu_id = drop_down_menu_id;
        this.init();
    }

    init() {
        this.loadValues();
        this.setOptionOnClicks();
        this.setFirstDefault();
    }

    loadValues() {
        this.menu = document.getElementById(this.drop_down_menu_id);
        this.menu_value = this.menu.querySelector('.drop-down-menu-value');
        this.menu_values = this.menu.querySelector('#drop-down-menu-values');
    }

    setValue(text, value) {
        this.menu.setAttribute('value', value);
        this.menu_value.getElementsByTagName('div')[0].innerHTML = text

        // IFrame
        let a = document.getElementsByClassName("goog-te-menu-frame skiptranslate")[0].contentDocument
        let s = a.getElementsByClassName('goog-te-menu2-item')
        for (let i=0;i<s.length;i++) {
            let stext = s[i].getElementsByClassName('text')[0].innerText
            let b = stext === this.menu.getAttribute('value')
            if (b) {
                s[i].click()
                return
            }
        }
    }

    toggleDropDown() {
        this.menu_values.classList.contains('active') ? this.menu_values.classList.remove('active') : this.menu_values.classList.add('active');
    }

    setOptionOnClicks() {
        let values = this.menu_values.querySelectorAll('li')
        values.forEach((val, i) => {
            val.addEventListener('click', () => {
                this.setValue(val.innerHTML, val.getAttribute('value'));
                this.toggleDropDown();
            })
        })
    }

    setFirstDefault() {
        setTimeout(() => {
            let values = this.menu_values.querySelectorAll('li')
            this.setValue(values[0].innerHTML, values[0].getAttribute('value'));
        }, 1000)
    }
}

let d = new DropDownMenuController('drop-down-menu')
