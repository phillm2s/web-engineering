let leftul = document.getElementById("Navigatorleftul");
let center = document.getElementById("Navigatorcenter");
let right = document.getElementById("Navigatorright");
let headerul = document.getElementById("Navigatorulheader");

let contentJson = fetch("content\Navigator.json");

contentJson.then(contenLoaded => {
    return contenLoaded.json();
}).then(allContent => {

    Object.keys(allContent).forEach(function (key){
        let element = document.createElement("il");
        element.className = "Navigatorli"
        element.appendChild(document.createTextNode(key));
        element.onclick = () => {
            loadContent(key);
        }

        headerul.appendChild(element);
    });
});

function loadContent(text) {
    let contentJson = fetch("http://localhost:63342/Exercises/U5/Navigator.json");
    contentJson.then(contenLoaded => {
        return contenLoaded.json();
    }).then(allContent => {
        content = allContent[text];
        leftul.innerHTML = "";

        Object.keys(content).forEach(function (key){
            let element = document.createElement("il");
            element.className = "Navigatorli"
            element.appendChild(document.createTextNode(key));
            element.onclick = () => {
                center.innerHTML = "";
                center.appendChild(document.createTextNode(content[key]["content"]));
                right.innerHTML = "";
                right.appendChild(document.createTextNode(content[key]["references"]));
            }

            leftul.appendChild(element);
        });
    });
}