//https://lit-element.polymer-project.org/
import {html, css, LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module';
customElements.define('litmenue-component',
    class extends LitElement {

        static get properties() {
            return { position: { type: String } };
        }
        
        constructor() {
            super();
            this.position="horizontal";
        }

        static get styles() {
            console.log("position: "+this.position);
            return css`
                .navigation {
                    display: flex;
                    justify-content: flex-start;
                }
                .navigation button {
                    border-radius: 20px;
                    width: fit-content;
                    margin: 5px;
                    background-color: #6a70a0;
                    border-width: 3px;
                    border-color: white;
                }
                
                .navigation a {
                    text-decoration: none;
                    display: block;
                    text-align: center; 
                    padding-top: 2px;
                    padding-bottom: 2px;
                    padding-right: 2em;
                    padding-left: 2em;
                    color: black;
                    font-size: 20px;
                    font-weight: bold;
                    font-family: "Times New Roman", Times, serif;
                }
                .navigation button:hover {
                    background-color: #e1dcda;
                }

                .horizontal {
                    flex-flow: no wrap;
                }
                .vertical {
                    flex-flow: column wrap;
                    padding: 0;
                }
                `;
        }
        render() {
            var elements = Array.from(this.getElementsByTagName("a"));
            console.log(elements);
            //https://stackoverflow.com/questions/62110373/lit-element-cant-get-an-array-of-objects-to-render-output-in-loop
            return html`
                        <div class="navigation ${this.position}">
                            ${elements.map((e) => html`<button>${e}</button>`)}
                        </div>
                    `
        }
});