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
            var hightOffsett= parseInt(this.getAttribute("height-offsett") || "0");
            var widthOffsett= parseInt(this.getAttribute("width-offsett") || "0");
            //this.textContent = this.textContent;
            
            //create div as "main" container
            var mainDiv = document.createElement("div");
            mainDiv.className="main-div";

            if(src===null){
                mainDiv.innerHTML = this.innerHTML;
            }else{
                var iframe= document.createElement("iframe");
                iframe.src=src;
                iframe.onload=function(){
                    var body = iframe.contentWindow.document.body;

                    mainDiv.style.width= body.offsetWidth+widthOffsett+40+"px";
                    mainDiv.style.height= body.offsetHeight+hightOffsett+40+"px";
                };
                iframe.scrolling="no";
                mainDiv.appendChild(iframe);
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
