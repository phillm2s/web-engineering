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

            ////create p element whith special style, append it to the main div
            // var title = document.createElement("p");
            // title.textContent = this.title;
            // title.className ="title";
            // mainDiv.appendChild(title);

            var fold = document.createElement("button");
            fold.innerText=title;
            fold.className="title";

            mainDiv.appendChild(fold);

            //fold unfold code way more easyer to inserte/remove content then update all styles
            var codeBackup="";
            var foldDiv;
            fold.addEventListener("click", foldDiv=function(){
                if(codeBackup===""){  
                    fold.innerHTML=title+" &#9660;"//set errow DOWN
                    codeBackup= code.innerHTML;
                    code.innerHTML="";
                }else{
                    fold.innerHTML=title+" &#x25B2;"//set errow DOWN
                    code.innerHTML=codeBackup;
                    codeBackup="";
                }
            })

            var code = document.createElement("p");
            if(src===null){
                code.textContent = this.textContent;
            }else{
                fetch(src)
                .then(response => response.text())
                .then(response =>{
                    var lines = response.split("\n");
                    for(let i=0; i< lines.length; i++){
                        code.innerHTML += "<xmp>"+(i+1)+". "+lines[i]+"</xmp>";
                    }
                    foldDiv(); //default folded
                    //code.innerHTML = "<xmp>"+response+"</xmp>";
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