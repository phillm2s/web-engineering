customElements.define('menue-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            this.shadow.innerHTML=`
                <ul class="navigation">
                    <li><a href="#">Button1</a></li>
                    <li><a href="#">Button2</a></li>
                    <li><a href="#">Button3</a></li>
                    <li><a href="#">Button4</a></li>
                </ul>
            `;
            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="menue.css";
            this.shadow.append(styles);
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