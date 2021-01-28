customElements.define('menueaside-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});

            var ul= document.createElement("ul");
            ul.className="navigation";

            var len=4;
            var as = [4];
            for (let i=0 ;i<len;i++){ //create li elements
                let li = document.createElement("li");
                as[i] = document.createElement("a");
                li.appendChild(as[i]);
                ul.appendChild(li);
            }

            as[0].text ="1. Einführung";
            as[1].text ="2. Responsives Web";
            as[2].text ="3. JavaScript";
            as[3].text ="4. DOM";
            

            this.shadow.appendChild(ul);

            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="CustomElements/NavigationBars/asideNavigation.css";
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