const fs = require('fs'); // load Filesystem API https://nodejs.org/docs/latest/api/fs.html
param= process.argv[2];  //process.argv to get comand line arguments. [0] is path to node.exe, [1] is path to current file
param = param.replace('_',''); // remove chars "_"
param = parseInt(param); //param is string and will NOT be automaticly pased by context

var text =""
for (var i=0;i< param;i++){
    text += number_to_chars(i);
    if (i<param) //nach letzter Zeile kein Umbruch
        text += "\n"
}

fs.writeFileSync('./alpha_files.txt',text);



function number_to_chars(number){ // 0=>A
    var ascii_offset = 65; //65 = 'A' in ascii table
    var chars="";
    do{
        var rest = number % 26;     
        chars = String.fromCharCode(rest+ascii_offset) + chars;
        number = parseInt(number/26);
    } while(number >0);
    console.log(chars);
    return chars;
}
