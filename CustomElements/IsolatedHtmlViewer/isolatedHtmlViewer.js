customElements.define('htmlviewer-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            //stylesheets
            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="CustomElements/IsolatedHtmlViewer/isolatedHtmlViewer.css";
            this.shadow.append(styles);

            //-------CUSTOM ATTRIBUTES ----------
            var src= this.getAttribute("src"); //load text content from this source
            //this.textContent = this.textContent;
            
            //create div as "main" container
            var mainDiv = document.createElement("div");
            mainDiv.className="main-div";

            if(src===null){
                mainDiv.innerHTML = this.innerHTML;
            }else{
                fetch(src)
                .then(response => {
                    if(response.ok)
                        return response.text();
                    else
                        return "File not found.";
                })
                .then(response =>{
                    mainDiv.innerHTML = response;
                })
            }

            this.shadow.append(mainDiv);
        }

        attributeChangeCallbacl(attr, oldVal, newVal) {
            if (oldVal === newVal){return;}
        }

        disconnectedCallbacl() {
            //remove listener
        }
    }
);  