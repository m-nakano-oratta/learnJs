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
		fl = files[i];
		// 末尾が/なのかを確認
		if (fl.match(/.*\//i)) {
			console.log(fl + " is directory");
		} else {
			console.log(fl + " is file");
		}
	}
});

var execSync = require('child_process').execSync;

var stdout = "" + execSync('ls -l');
console.log("it's sync" + stdout);

console.log("test");