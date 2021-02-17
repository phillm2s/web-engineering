customElements.define('nav-head',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            this.shadow.innerHTML=`
            <div id="maincontainer">
                <h1 style="color:white; text-align: center; margin: 0">WWW - Naviagtor</h1>
                <ul id="list" class="navigation">
                    <li id="home"><p>Home</p></li>
                    <li id="news"><p>News</p></li>
                    <li id="contact"><p>Contact</p></li>
                    <li id="about"><p>About</p></li>
                </ul>
            </div>
            `;
            

            var list= this.shadow.getElementById("list");
            for (let li of list.getElementsByTagName("li")) {
                li.addEventListener("click", function() {
                    console.log(li.id);
                });
            }

            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="components/navigationbars.css";
            this.shadow.append(styles);
            this._isInititalized = true;
        }
    }
);

customElements.define('nav-side',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            this.shadow.innerHTML=`
            <div id="maincontainer">
                <ul id="list" class="navigation">
                    <li id="promise"><p>Promise</p></li>
                    <li id="async"><p>async</p></li>
                    <li id="fetch"><p>fetch</p></li>
                    <li id="callback"><p>callback</p></li>
                    <li id="class"><p>class</p></li>
                </ul>
            </div>
            `;

            var list= this.shadow.getElementById("list");
            for (let li of list.getElementsByTagName("li")) {
                li.addEventListener("click", function() {
                    console.log(li.id);
                });
            }

            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="components/navigationbars.css";
            this.shadow.append(styles);
            this._isInititalized = true;
        }
    }
);

customElements.define('nav-footer',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            this.shadow.innerHTML=`
            <div id="maincontainer" style="display: flex; justify-content: center; align-items: baseline;">
                <p class="sidebartext" style="display: inline; padding-right: 3px; text-decoration: none; font-size: 25px; ">Footer:</p>
                <p class="sidebartext footerList" style="display: inline;">Sitemap</p>
                <p class="sidebartext footerList" style="display: inline;">Home</p>
                <p class="sidebartext footerList" style="display: inline;">News</p>
                <p class="sidebartext footerList" style="display: inline;">Contact</p>
                <p class="sidebartext footerList" style="display: inline;">about</p>
            </div>
            `;
            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="components/navigationbars.css";
            this.shadow.append(styles);
            this._isInititalized = true;
        }
    }
);




customElements.define('nav-infobar',
    class extends HTMLElement {
        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized){return;}
            this.shadow = this.attachShadow({mode:'open'});
            this.shadow.innerHTML=`
            <div id="maincontainer" class="additional" >
                <p>Additional Information: Links to external ressources</p>
            </div>
            `;
            
            var styles = document.createElement("link");
            styles.rel="stylesheet";
            styles.href="components/navigationbars.css";
            this.shadow.append(styles);
            this._isInititalized = true;
        }
    }
);

