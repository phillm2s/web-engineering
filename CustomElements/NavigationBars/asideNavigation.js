
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
            this.as = [4];
            for (let i=0 ;i<len;i++){ //create li elements
                let li = document.createElement("li");
                this.as[i] = document.createElement("a");
                this.as[i].id = i+1;
                li.appendChild(this.as[i]);
                ul.appendChild(li);
            }



            this.as[0].text ="1. Einführung";
            this.as[1].text ="2. Responsives Web";
            this.as[2].text ="3. JavaScript";
            this.as[3].text ="4. DOM";
            

            this.shadow.appendChild(ul);

            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="CustomElements/NavigationBars/asideNavigation.css";
            this.shadow.append(styles);
            this._isInititalized = true;
        }

        addOnClickObserver(func){ //parameter= function(triggered HTMLElement)
            this.as.forEach(element => {
                element.addEventListener("click",function(){func(element);});
            });
        }


        attributeChangeCallbacl(attr, oldVal, newVal) {
            if (oldVal === newVal){return;}
        }

        disconnectedCallbacl() {
            //remove listener
        }
    }
);  