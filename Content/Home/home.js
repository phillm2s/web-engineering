customElements.define('home-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            this.shadow.innerHTML=`
            `;

            //Iframe as content container to load html code from external file
            var htmlIFrame = document.createElement("iframe");
            htmlIFrame.src="Content/Home/home.html";
            this.shadow.appendChild(htmlIFrame);

            //Main css file 
            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="Content/content.css";
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