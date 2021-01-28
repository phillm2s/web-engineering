customElements.define('content-component',
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
                <script src="Content/Home/home.js"></script>
            </head>
            
            `;
            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="CustomElements/NavigationBars/header.css";
            this.shadow.append(styles);
            this._isInititalized = true;
        }

        load(componentTagName) {
            cosnoel.log(componentTagName);
        }


        attributeChangeCallbacl(attr, oldVal, newVal) {
            if (oldVal === newVal){return;}
        }

        disconnectedCallbacl() {
            //remove listener
        }
    }
);  