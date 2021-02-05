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
                <head>
                    <link rel="stylesheet" href="CustomElements/NavigationBars/header.css">
                </head>
                <body>
                    <a href="./index.html"> <img src="image/home.jpg" alt="Trulli" width="60" height="60"> </a>
                    <h1 class="headline">WEB Engineering</h1>
                </body>
            `;
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