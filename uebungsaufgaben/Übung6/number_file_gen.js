const fs = require('fs'); // load Filesystem API https://nodejs.org/docs/latest/api/fs.html
param= process.argv[2];  //process.argv to get comand line arguments. [0] is path to node.exe, [1] is path to current file

param = param.replace('_',''); // remove chars "_"
param = parseInt(param); //param is string and will NOT be automaticly pased by context

var text ="";
for (var i=1;i< param+1;i++){
    text += i + ".";
    if (i<param) //nach letzter Zeile kein Umbruch
        text += "\n";
}

fs.writeFileSync('./number_files.txt',text);


// Dauert wesentlich länger ! Vermutlich da es nach jeder iteration schreib lese Prozesse auf Massenspeicher gibt.
// for (var i=1;i< param+1;i++){
//     if (i<param) //nach letzter Zeile kein Umbruch
//         fs.appendFileSync('./test.txt',i +".\n");
//     else
//         fs.appendFileSync('./test.txt',i +".");
// }

