
class FileMerger{

    constructor() {

        const fs = require('fs'); // load Filesystem API https://nodejs.org/docs/latest/api/fs.html


        var lines1 =[];
        var lines2 =[];
        var merged_lines= [];
        console.time("test");
        fs.readFile('big_file1.txt','utf8', callback(lines1)); //Beide Files haben jeweils 1 Millionen Zeilen
        fs.readFile('big_file2.txt','utf8', callback(lines2));
        

        function callback(lines) {
            return function(err, data) {
                lines.push(data.split("\n"));   //fill array with lines
                if( lines1.length && lines2.length ){
                    lines1[0].forEach((line,i) => merged_lines[i]= line +" "+lines2[0][i] ); //I dont know why but lines and lines_1, lines_2 are 2 dim array....
                    //result in merged_lines
                    console.log(merged_lines.length + " lines merged in.");
                    console.timeEnd("test");
                }
    
            }
        }
    }

}

module.exports = FileMerger;

new FileMerger();
