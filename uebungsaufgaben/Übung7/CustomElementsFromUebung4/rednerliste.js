

customElements.define('redner-liste',
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
            
            <h1>Rednerliste</h1>
            <p style="display: inline-block">Neuer Redner:</p>
            `;

            var textField = document.createElement("input");
            textField.setAttribute("type","text");
            textField.id="item_field";
            shadow.appendChild(textField);

            var list = document.createElement("ul");

            var butAdd = document.createElement("input");
            butAdd.setAttribute("type", "button");
            butAdd.value="Hinzufügen";
            butAdd.addEventListener("click", function() {
                add_item(textField, list);
            });
            shadow.appendChild(butAdd);

            shadow.appendChild(list, list);

            this._isInititalized = true;
        }



        function add_item(textField, list) {
            var new_element = textField.value;
            textField.value = ""; 
        
            var row = document.createElement("li");
            row.setAttribute("id",new_element);
            var p_name = document.createElement("p");
            p_name.setAttribute("class","list");
            p_name.textContent = new_element
            row.appendChild(p_name);
            var p_time = document.createElement("p");
            p_time.setAttribute("class","list");
            p_time.setAttribute("id","time");
            p_time.setAttribute("data-sec",0);
            p_time.textContent ="00:00:00";
            row.appendChild(p_time);
            var button = document.createElement("input");
            button.setAttribute("id","button");
            button.setAttribute("type","button");
            button.setAttribute("value","Start!");
            button.addEventListener("click",function() {
                start(row);
            });
            row.appendChild(button);
            
            list.appendChild(row);
        
            //start immediately
            start(row);
        }


        var aktive_interval;
        function start(row) {
            var time_node = row.querySelector("#time");
        
            var but = row.querySelector("#button")
            but.setAttribute("value","Stop!");
            
            aktive_interval = setInterval(function(){
                let sec = parseInt(time_node.getAttribute("data-sec"));
                time_node.setAttribute("data-sec",parseInt(time_node.getAttribute("data-sec"))+1)
                
                time_node.textContent = new Date(sec * 1000).toISOString().substr(11, 8);   //https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
            }, 1000);

            but.addEventListener("click", function(event){
                stop(row);
            });
        }


        function stop(row) {
            clearInterval(aktive_interval);
            aktive_interval=null;
            var but = row.querySelector("#button");
            but.setAttribute("value","Start!");
            but.addEventListener("click", function(event){
                start(row);
            });
        }


    }
})