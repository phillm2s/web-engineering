customElements.define('content-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            var src= this.getAttribute("src");

            this.shadow.innerHTML = `
                <style>
                    h1 {
                        color: white;
                        text-align: center;
                    }
                    p {
                        color: white;
                    }
                </style>
                `;

            //load json file
            fetch(src)
                .then(response => {
                    if (response.ok) {
                        return response.json(); 
                    }
                    throw new Error("HTTP error " + response.status);
                }).then(response => {
                    console.log(response);
                    var h1 = document.createElement("h1");
                    h1.textContent = response["content"]["headline"];
                    this.shadow.appendChild(h1);

                    var p = document.createElement("p");
                    p.textContent= response["content"]["text"];
                    this.shadow.appendChild(p);
                })
                .catch((error) => {
                    console.error("Fetching content failed",error);
                })

            //this.shadow.append(newContent) //add new content componen
        }

    }
);  