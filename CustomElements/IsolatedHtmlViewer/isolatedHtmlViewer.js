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
                var iframe= document.createElement("iframe");
                iframe.src=src;
                iframe.onload=function(){
                    var body = iframe.contentWindow.document.body;
                    var height =  body.offsetHeight+20; //20=offset
                    var width =  body.offsetWidth+20;
                    mainDiv.style.width= width+"px";
                    mainDiv.style.height= height+20+"px";
                    // iframe.width= width+"px";
                    // iframe.height= height+"px";
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
