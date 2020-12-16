

function on_click_add_item() {
    var new_element = document.getElementById("item_field").value;
    document.getElementById("item_field").value = ""; //increase usability
    document.getElementById("list").innerHTML+="<li id=\""+new_element+"\"><p class=\"list\">"+new_element+"</p><input type=\"button\" onclick=\"on_click_delete('"+new_element+"')\" value=\"Delete\"> </li>";
}

function on_click_delete(item_id) {
    document.getElementById(item_id).remove();
    
}
