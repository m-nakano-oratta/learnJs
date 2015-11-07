console.log("hello world");
var exec = require('child_process').exec;
exec('ls -l ./', function(err, stdout, stderr) {
	console.log("stdout:" + stdout);

	files = stdout.split("\n");
	console.log("count" + files.length);
	for (i = 0; i < files.length; i++) {
		console.log("[" + i + "]:" + files[i]);
	}
});

exec('ls -F', function(err, stdout, stderr) {
	files = stdout.split("\n");
	console.log("count" + files.length);
	for (i = 0; i < files.length; i++) {
		console.log("[" + i + "]:" + files[i]);
	}
});

console.log("test");