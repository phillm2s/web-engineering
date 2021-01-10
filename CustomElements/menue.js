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
            <h1 class="headline">Titel der Seite</h1>
                <ul class="navigation">
                    <li><a href="#">Button1</a></li>
                    <li><a href="#">Button2</a></li>
                    <li><a href="#">Button3</a></li>
                    <li><a href="#">Button4</a></li>
                </ul>
            `;
            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="CustomElements/menue.css";
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