//run a local host httpserver with Express.js module
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
var jsonParser = bodyParser.json();

app.get('/', (req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(`
    <h1>Webserver mit Express.js</h1>
    <p>Senden Sie eine nachricht (post) zum server</p>
    
    <div>
        <input id="text" type="text">
        <button id="send">senden</button>
    </div>
    
    <script>
        document.getElementById("send").addEventListener("click",function(){
            var text = document.getElementById("text").value;
            var data = JSON.stringify({"text": text});
            post(data);
        });
    
        //https://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery
        function post(data){
            var xhr = new XMLHttpRequest();
            var url = "/";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    console.log(json.email + ", " + json.password);
                }
            };
            xhr.send(data);
        }
    </script>
    `)
});
//https://stackoverflow.com/questions/9177049/express-js-req-body-undefined
//send file as download to client
app.post('/', jsonParser, function (req, res) {
    console.log(req.body);
});
    //const file = `${__dirname}/result.txt`;
    //res.download(file); // Set disposition and send it.

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});