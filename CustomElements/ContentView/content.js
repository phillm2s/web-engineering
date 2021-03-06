customElements.define('content-component',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});

            //define component pathes(script pathes)
            var scriptsrcS = ["Content/Home/home.js",
                "Content/Einfuehrung/einfuehrung.js",
                "Content/ResponsiveWeb/responsiveWeb.js",
                "Content/JavaScript/javaScript.js",
                "Content/DOM/dom.js",
                "Content/Asynchron/asynchron.js",
                "Content/NodeNpmDeno/nodeNpmDeno.js",
                "Content/ModularWeb/modularWeb.js",
                "Content/PWA/pwa.js",
                "Content/Vue/vue.js",
                "Content/WebAssembly/webAssembly.js"
            ];

            //add script tag for each path
            for(let i=0 ; i < scriptsrcS.length;i++){
                var script = document.createElement("script");
                script.src = scriptsrcS[i];
                this.shadow.append(script);
            }
            this._isInititalized = true;
        }

        loadContent(navigationContentID) {
            // navigationContentID="1";
            var componentTag=null;
            if(navigationContentID==="0")
                componentTag = "home-component"
            else if(navigationContentID==="1")
                componentTag = "einfuehrung-component"
            else if(navigationContentID==="2")
                componentTag = "responsiveweb-component"
            else if(navigationContentID==="3")
                componentTag = "js-component"
            else if(navigationContentID==="4")
                componentTag = "dom-component"
            else if(navigationContentID==="5")
                componentTag = "asynchron-component"
            else if(navigationContentID==="6")
                componentTag = "nodenpmdeno-component"
            else if(navigationContentID==="7")
                componentTag = "modularweb-component"
            else if(navigationContentID==="8")
                componentTag = "pwa-component"
            else if(navigationContentID==="9")
                componentTag = "vue-component"
            else if(navigationContentID==="10")
                componentTag = "webassembly-component"
            else {
                console.log("Warning: No matching component for NavigationContentID: "+navigationContentID)
                return;
            }

            this.shadow.getElementById("content")?.remove();    //remove if not null
            
            var newContent = document.createElement(componentTag);
            newContent.id="content";
            
            this.shadow.append(newContent) //add new content component

        }


        attributeChangeCallbacl(attr, oldVal, newVal) {
            if (oldVal === newVal){return;}
        }

        disconnectedCallbacl() {
            //remove listener
        }
    }
);  