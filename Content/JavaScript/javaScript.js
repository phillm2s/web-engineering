customElements.define('js-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});

            fetch("Content/JavaScript/javaScript.html")
            .then(response => response.text())
            .then(response => {
                this.shadow.innerHTML = response;
            });
            this._isInititalized = true;
        }

        attributeChangeCallbacl(attr, oldVal, newVal) {
            if (oldVal === newVal){return;}
        }

        disconnectedCallbacl() {
            //remove listener
        }
    }
);  