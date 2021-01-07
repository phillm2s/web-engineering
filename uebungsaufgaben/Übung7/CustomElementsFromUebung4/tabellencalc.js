
customElements.define('tabellen-calc',
class extends HTMLElement {

    constructor() {
        super();
        this._isInititalized = false;
    }

    connectedCallback() {
        if(this._isInititalized){return;}
        this.initShadow();

    }

    initShadow() {
        var shadow = this.attachShadow({mode: 'open'});
        shadow.innerHTML=`
        <head>
            <style>
                p{
                    display: inline-block;
                    margin: 1px;
                }
                td{
                    border: 1px solid black;
                    padding: 3px;
                }
                .textfield{
                    border: 0px;
                }

            </style>
        </head>
        <body>
            <h1>Tabellenkalkulation mit contentEditable</h1>
            <table id="table" style="border: 2px solid black;">

            </table>
            <input type="button" id="but" onclick="update_table()" value="calc">

        </body>
        <script>
            document.getElementByID("but").addEventListener("click", function(){

            });


            class Table {
                constructor() {
                    this.cells =[
                        [new Cell(1,"A","1"),new Cell(1,"B","5")],
                        [new Cell(2,"A","2"),new Cell(2,"B","6")],
                        [new Cell(3,"A","3"),new Cell(3,"B","7")]
                    ]; 
                    this.table_html = document.getElementById("table");
                }

                update_cells(){
                    var html_cells = document.getElementsByTagName("td");
                    var i;
                    for (i=0;i<html_cells.length;i++)
                        var textfield = html_cells[i].getElementsByTagName("input")[0];
                        if(textfield!=null){
                            var result= this.calc(textfield.value + "");
                            if(result!=null)
                                this.getCell(thtml_cells.getAttribute("id")).content = result;
                        }
                }

                display_table(){
                    var html = "";

                    html += "<tr>";
                    html += "<td style=\"font-weight: bold;\">"+ " " +"</td>";
                    var j=0;
                    for(j=0; j< this.cells[0].length;j++)
                        html += "<td style=\"font-weight: bold;\">"+this.cells[0][j].letter+"</td>";
                    html += "</tr>";

                    var i;
                    for(i=0; i< this.cells.length; i++){ //rows
                        html += "<tr>";
                        html += "<td style=\"font-weight: bold;\">"+this.cells[i][0].number+"</td>";
                        var j;
                        for(j=0; j< this.cells[i].length; j++) { 
                            html += "<td><input type=\"text\" id=\""+this.cells[i][j].name+"\" value=\""+this.cells[i][j].content+"\" class=\"textfield\"></td>"
                        }
                        html += "</tr>"; 
                    }

                    this.table_html.innerHTML = html;
                }


                calc(exp) { //String
                    //var exp="djawdl =SUM(A1,B3)";
                    var pett = /=SUM\(([A-Z]*[0-9]*)(\,)([A-Z]*[0-9]*)(\))/i
                    var match = exp.match(pett);
                    if (match ==null)
                        return null;
                    var method_string=match[0];
                    var a=match[1];
                    var b=match[3];
                    
                    this.getCell("B3");
                    method=null;
                    if(method_string.includes("SUM"))
                        method = function(){return getCell(a) + getCell(b)}

                    return method();

                }

                getCell(name) {   // letter+number //Letters have to be capital
                    var letter_number = name.match(/([A-Z]*)/)[0];
                    letter_number = letter_number.charCodeAt(0) -65;
                    var number = name.match(/\d+/);
                    number = parseInt(number)-1;
                    return (this.cells[number][letter_number].content);
                }

                
            }

            class Cell {
                constructor(number, letter, content=null) {
                    this.number = number;
                    this.letter = letter;
                    this.content = content;
                    this.name = number+letter;
                }
            }

            var table = new Table();
            update_table();

        </script>
        `;

        
    }
});





