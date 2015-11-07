console.log("hello world");
var exec = require('child_process').exec;
exec('ls -l ./', function(err, stdout, stderr) {
	console.log("stdout:" + stdout);
});