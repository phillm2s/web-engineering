customElements.define('codebox-component',
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
            styles.href="CustomElements/CodeBox/codeBox.css";
            this.shadow.append(styles);

            //-------CUSTOM ATTRIBUTES ----------
            var title = this.getAttribute("title");
            var src= this.getAttribute("src"); //load text content from this source
            //this.textContent = this.textContent;
            
            //create div as "main" container
            var mainDiv = document.createElement("div");
            mainDiv.className="main-div";
            mainDiv.style.alignSelf = "center";

            //button as title with fold option
            if(title!=null){    //if no title is set the component is unfoldet
                var fold = document.createElement("button");
                fold.innerText=title;
                fold.className="title";

                mainDiv.appendChild(fold);
            }

            //fold unfold code way more easyer to inserte/remove content then update all styles
            var codeBackup="";
            var foldDiv;
            fold?.addEventListener("click", foldDiv=function(){
                if(codeBackup===""){  
                    fold.innerHTML=title+" &#9660;"//set errow DOWN
                    codeBackup= code.innerHTML;
                    code.innerHTML="";
                }else{
                    fold.innerHTML=title+" &#x25B2;"//set errow UP
                    code.innerHTML=codeBackup;
                    codeBackup="";
                }
            })

            var code = document.createElement("div");
            code.className="code-div";
            if(src===null){
                var lines = this.innerHTML.split("\n");
                //first and last line are always emty ->skip
                for(let i=1; i< lines.length-1; i++){
                    code.innerHTML += "<div><span data-unselectable='"+(i)+". '></span> <xmp>"+lines[i]+"</xmp></div>";
                }
            }else{
                fetch(src)
                .then(response => {
                    if(response.ok)
                        return response.text();
                    else
                        return "File not found.";
                })
                .then(response =>{
                    var lines = response.split("\n");
                    for(let i=0; i< lines.length; i++){
                        code.innerHTML += "<div><span data-unselectable='"+(i+1)+". '></span> <xmp>"+lines[i]+"</xmp></div>";
                    }
                    if(fold!=null)
                        foldDiv(); //default folded
                })
            }





            mainDiv.appendChild(code);

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