


var contentView = document.getElementById("contentview");


//navigation on click methods
var navigationOnClick = function(htmlElement){
    //console.log(htmlElement.id); //ids are menue numbers: 1,2,3,4,....
    contentView.loadContent(htmlElement.id);
}
contentView.loadContent("0");//load default (home) page on page reload

document.getElementById("menueaside-component").addOnClickObserver(navigationOnClick);
