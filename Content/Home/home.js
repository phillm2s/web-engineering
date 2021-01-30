customElements.define('home-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});

            let deferredPrompt;
            window.addEventListener('beforeinstallprompt', (e) => {
                // Prevent the mini-infobar from appearing on mobile
                e.preventDefault();
                // Stash the event so it can be triggered later.
                deferredPrompt = e;               
            });
         

            //Iframe as content container to load html code from external file
            // var htmlIFrame = document.createElement("iframe");
            // htmlIFrame.src="Content/Home/home.html";
            // this.shadow.appendChild(htmlIFrame);
            fetch("Content/Home/home.html")
            .then(response => response.text())
            .then(response => {
                this.shadow.innerHTML = response;
                //add on click button listener for pwa installation dialog
                this.shadow.getElementById("pwaInstallDialog").addEventListener("click",function(){
                    if(deferredPrompt!= null)
                        deferredPrompt.prompt();
                    else
                        window.alert("In diesem Browser leider nicht möglich :(\rVerwendn Sie die build in Installationsfunktion ihres Browsers.");
                });
            });
            this._isInititalized = true;
        }

        attributeChangeCallbacl(attr, oldVal, newVal) {
            if (oldVal === newVal){return;}
        }

        disconnectedCallbacl() {
            //remove listener
        }
    }
);  