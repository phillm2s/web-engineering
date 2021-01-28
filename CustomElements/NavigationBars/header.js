customElements.define('header-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            this.shadow.innerHTML=`
            <a href="./index.html"> <img src="image/home.jpg" alt="Trulli" width="60" height="60"> </a>
            <h1 class="headline">WEB Engineering</h1>
            `;


            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="CustomElements/NavigationBars/header.css";
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