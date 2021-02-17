customElements.define('tablecalc-component',
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
                        table {
                            font-family: arial, sans-serif;
                            border-collapse: collapse;
                        }
            
                        table td {
                            border: 1px solid #dddddd;
                            text-align: left;
                            padding: 2px;
                            width: 120px;
                        }
                        input{
                            border-style: none;
                            padding: 0;
                            width: 100%;
                        }
                    </style>
                </head>
                <body>
                    <table id="table">
                        <tr>
                            <th></th>
                            <th id="addc"><button id="addcolumn">+</button></th>
                        <tr id="addr">
                            <th><button id="addrow">+</button></th>
                        </tr>
                    </table>
                </body>
            `;
            var rowCount=0; //chars
            var columnCount=0;
            //init some start columns
            addRow();
            addRow();
            addColumn();
            addColumn();

            shadow.getElementById("addr").addEventListener("click",function(){
                addRow();
            });
            shadow.getElementById("addc").addEventListener("click",function(){
                addColumn();
            });
            


            function addRow(){
                var newRow= document.createElement("tr");
                var th = document.createElement("th");
                rowCount++;
                th.textContent=String.fromCharCode(64+rowCount);
                newRow.appendChild(th);
                for(let i=0;i<columnCount;i++){
                    var cell = document.createElement("td");
                    var id= String.fromCharCode(64+rowCount) + (i+1);
                    var tf = createTextfieldExpressionTranslator(id);
                    cell.appendChild(tf);
                    newRow.appendChild(cell);
                }
                //var trs= table.getElementsByTagName("tr");
                var addr= shadow.getElementById("addr");
                //apend BEFORE the button
                addr.parentNode.insertBefore(newRow,addr);
            }
            function addColumn(){
                columnCount++;
                var rows= shadow.getElementById("table").getElementsByTagName("tr");
                var number = document.createElement("th");
                number.textContent= columnCount+"";
                var addc= shadow.getElementById("addc");
                rows[0].insertBefore(number, addc);

                for(let i=1; i<rows.length-1;i++){
                    var newCell = document.createElement("td");
                    var id=String.fromCharCode(64+i)+columnCount;
                    var tf = createTextfieldExpressionTranslator(id);
                    newCell.appendChild(tf);
                    rows[i].appendChild(newCell);
                }
            }

            function createTextfieldExpressionTranslator(id){
                //returns a new input text element that translate an expression and
                //write it into the given reference html element
                var tf = document.createElement("input");
                tf.type="text";
                tf.id=id;
                tf.setAttribute("formula","");
                tf.addEventListener("focusout", function(){
                    console.log("focusout");
                    if((tf.value+"").startsWith("=")){
                        tf.setAttribute( "formula",(tf.value+"") ); //remove "=""
                        calc(); //call ALL expressions
                    }if((tf.value+"")=="") //delete formula
                        tf.setAttribute("formula","");
                });
                tf.addEventListener("focusin", function(){
                    console.log("focousin");
                    var formula =tf.getAttribute("formula");
                    if(formula!="")
                        tf.value= formula;
                });
                return tf;
            }
            function calc(){
                //https://stackoverflow.com/questions/14613049/regex-in-javascript-to-match-the-format-of-the-sum-function-in-excel
                var inputs= shadow.getElementById("table").getElementsByTagName("input");
                for(let i=0; i<inputs.length; i++){
                    //1 get formula attribute
                    var formula = inputs[i].getAttribute("formula");
                    var patt = new RegExp("=SUM\(.*\)");
                    if (patt.test(formula)){
                        var res=formula.match(patt)[1].split(",");
                        var v1= shadow.getElementById(res[0].replace("(","")).value;
                        var v2= shadow.getElementById(res[1].replace(")","")).value;
                        res = ( parseFloat(v1) + parseFloat(v2) );
                        inputs[i].value=res+"";
                    }
                }
            }
            
        }
    }
);
