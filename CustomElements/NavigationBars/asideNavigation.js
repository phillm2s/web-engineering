customElements.define('menueaside-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});

            var container = document.createElement("div");
            container.id="container";

            var particleeIFrame = document.createElement("iframe"); // <iframe src="CustomElements/NavigationBars/ParticlesIFrame/particles.html" frameBorder="0" title="particles">
            particleeIFrame.src ="CustomElements/NavigationBars/ParticlesIFrame/particles.html";
            particleeIFrame.setAttribute("frameBorder","0");
            particleeIFrame.title="particles";
            container.appendChild(particleeIFrame);

            var ul= document.createElement("ul");
            ul.className="navigation";

            var len=10;
            this.as = [len];
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
            this.as[4].text ="5. Asyncron";
            this.as[5].text ="6. Node & npm & Deno";
            this.as[6].text ="7. Modular Web";
            this.as[7].text ="8. PWA";
            this.as[8].text ="9. Vue";
            this.as[9].text ="10. WebAssembly";
            

            container.appendChild(ul);

            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="CustomElements/NavigationBars/asideNavigation.css";
            this.shadow.append(container);
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