const fs = require('fs');
// This line opens the file as a readable stream

var lines1 =[];
var lines2 =[];
var merged_lines= [];
console.time("test");
var stream1 = fs.createReadStream('big_file1.txt',"utf8"); //Beide Files haben jeweils 1 Millionen Zeilen
var stream2 = fs.createReadStream('big_file2.txt',"utf8");
      
stream1.on("data", process_chunk( lines1 ) ); //asyncron
stream2.on("data", process_chunk( lines2 ) );

//Code aus Vorlesung 6 Seite 55

stream1.on("end", output ); // beide Events lösen output aus
stream2.on("end", output ); // aber nur der Letzte gewinnt

function process_chunk(lines) { //fülle lines array zeilenweise
    return function ( chunk ){
        let i = 0;
        chunk.split("\n").forEach(function (line) {
        if (!lines[i])
            lines[i] = '';
        lines[i++] += line;
        });
    }
}

let count = 0;
function output() {
    count += 1;
    if ( count === 2 ){ // Der Letzte darf drucken
        lines1.forEach( (line,i) => merged_lines[i]=line+" "+lines2[i] );
        console.timeEnd("test");
    }
}
