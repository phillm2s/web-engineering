
customElements.define('shoping-list',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if( ! this._isInititalized) {
                //open = erlaubt zugriff von außern
                var shadow = this.attachShadow({mode: 'open'});
                shadow.innerHTML = ` 
                <style>
                    .list{
                        display: inline-block;
                        margin: 2px;
                        margin-right: 5px;
                    }
                </style>
                
                <h1>Einkaufsliste</h1>
                <p style="display: inline-block">Enter a new item:</p>
                `;

                var list = document.createElement("ul");
                list.id="list";
                shadow.appendChild(list);

                var textField = document.createElement("INPUT");
                textField.setAttribute("type", "text");
                textField.id="item_field";
                shadow.appendChild(textField);

                var butAddItem = document.createElement("input");
                butAddItem.setAttribute("type", "button");
                butAddItem.value ="Add item";
                butAddItem.addEventListener("click", function() {
                    var new_element = textField.value; 
                    textField.value=""; 
                    add_item(new_element);
                });
                shadow.appendChild(butAddItem);
                

                this._isInititalized = true;
            }


            function add_item(new_element){
                var listElement = document.createElement("li");
                listElement.id= new_element;

                var p = document.createElement("p");
                p.className="list";
                p.textContent =new_element;

                var butDelete = document.createElement("input");
                butDelete.setAttribute("type", "button");
                butDelete.className="list";
                butDelete.value="Delete";
                butDelete.addEventListener("click", function() {
                    list.removeChild(listElement);
                });

                listElement.appendChild(p);
                listElement.appendChild(butDelete);

                list.appendChild(listElement);
            }
        }
})
