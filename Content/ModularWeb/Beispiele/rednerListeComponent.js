customElements.define('rednerliste-component',
    class extends HTMLElement {

        constructor() {
            super();
            this._isInititalized = false;
        }

        connectedCallback() {
            if(this._isInititalized) {return;}
            //open = erlaubt zugriff von außern
            var shadow = this.attachShadow({mode: 'open'});
            
            shadow.innerHTML = `
                <h1>Rednerliste</h1>
                <p style="display: inline-block">Neuer Redner:</p>
                <input id="name" type="text">
                <button id="add">Hinzufügen</button>
                <ul id="list">
                </ul>
            `;
            

            shadow.getElementById("add")
                .addEventListener("click",function(){
                    add(shadow.getElementById("name").value);
                });

            //The main object! each speaker will instantiate an own timer object.
            function Timer(htmlTime, htmlButton) {
                //this variables are only accesable from inside (closure)

                //to change the status (start / stop)
                //button object neded becuase not only the button click event change the timers state
                var htmlButton= htmlButton;
                var htmlTime= htmlTime;     // to display the current time
                var sec= 0;
                var intervalID= null; //null if not running

                this.isRunning= function(){
                    if(intervalID===null)
                        return false;
                    return true;
                }

                this.start= function(){
                    console.log("start");
                    htmlButton.textContent="stop";

                    //Stop all currently running timer
                    allTimer.forEach(element => {
                            if(element.isRunning()===true)
                                element.stop();
                    });

                    intervalID = setInterval(function(){
                        sec++;
                        //Date seconds to HH.MM.SS line:  https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript
                        htmlTime.textContent= new Date(sec * 1000).toISOString().substr(11, 8);
                    }, 1000);
                }
                this.stop= function(){
                    console.log("stop");
                    htmlButton.textContent="start";
                    clearInterval(intervalID);
                    intervalID= null;
                }
            }

            var allTimer=[];

            function add(name){
                //for each speaker add a li element and as child:
                //- a srart stop button with click listener
                //- a Timer object
                //- a "p" text object to represent the time
                var speaker= document.createElement("li");
                speaker.textContent=name;
                var but = document.createElement("button");
                but.textContent = "start";
                but.style.marginLeft ="10px";
                var time = document.createElement("p");
                time.style.display="inline";
                time.textContent= "00:00:00";
                speaker.appendChild(but);
                var timer = new Timer(time, but);
                allTimer.push(timer);
                speaker.appendChild(time);

                but.addEventListener("click",function(){
                    if(timer.isRunning()){
                        timer.stop();
                    }else
                        timer.start();
                });
                timer.start(); //default, start new timer
                shadow.getElementById("list").appendChild(speaker);
            }
        }
    }
);
