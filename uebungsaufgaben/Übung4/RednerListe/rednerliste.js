

function on_click_add_item() {
    var new_element = document.getElementById("item_field").value;
    document.getElementById("item_field").value = ""; // usability

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
    button.setAttribute("onclick","on_click_start('"+new_element+"')");
    row.appendChild(button);
    
    document.getElementById("list").appendChild(row);

    //start immediately
    on_click_start(new_element);
}

var active_interval=null;
var active_html_element=null;

function on_click_start(item_id) {
    on_click_stopp(); // because only one timer can be active

    var time_node = document.getElementById(item_id).querySelector("#time");

    active_html_element = document.getElementById(item_id);
    var but = active_html_element.querySelector("#button")
    but.setAttribute("value","Stopp!");
    but.setAttribute("onclick","on_click_stopp()");
    
    active_interval = setInterval(function(){
        let sec = parseInt(time_node.getAttribute("data-sec"));
        time_node.setAttribute("data-sec",parseInt(time_node.getAttribute("data-sec"))+1)
        
        time_node.textContent = new Date(sec * 1000).toISOString().substr(11, 8);   //https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
    }, 1000);
}


function on_click_stopp() {
    if(active_html_element!=null){
        var but = active_html_element.querySelector("#button");
        but.setAttribute("value","Start!");
        but.setAttribute("onclick","on_click_start('"+active_html_element.getAttribute("id")+"')");
    }

    if(active_interval!=null)
        clearInterval(active_interval);
    
    active_html_element = null;
    active_html_element= null;

}
