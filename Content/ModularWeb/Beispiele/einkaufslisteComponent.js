customElements.define('shopinglist-component',
    class extends HTMLElement {

        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized) {return;}
            //open = erlaubt zugriff von außern
            var shadow = this.attachShadow({mode: 'open'});
            
            shadow.innerHTML = `
                <head>
                    <style>
                        li{
                            margin-bottom: 5px;
                        }
                    </style>
                </head>
                <body>
                    <h1>Einkaufsliste</h1>
                    <p style="display: inline-block">Enter a new item:</p>
                    <input id="item" type="text">
                    <button id="add">Add item</button>
            
                    <ul id="list">
                    </ul>  
                </body>
            `;
            var item= shadow.getElementById("item");
            shadow.getElementById("add").addEventListener("click", function(){
                var li = document.createElement("li");
                li.textContent= item.value;
                var amount = document.createElement("input");
                //usability
                amount.type= "number";
                amount.style.marginLeft="10px";
                amount.style.width="40px";
                amount.value=1;
                li.appendChild(amount);

                var remove= document.createElement("button");
                remove.textContent="Delete";
                remove.style.marginLeft = "30px";
                remove.addEventListener("click",function(){
                    li.remove();
                });
                li.appendChild(remove);
                shadow.getElementById("list").appendChild(li);

                item.value="";//usability
            });

        }
    }
);
