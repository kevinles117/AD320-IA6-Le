var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str_arr = (buf.toString()).split('\n');
console.log(str_arr.length-1);
