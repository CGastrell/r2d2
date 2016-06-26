var path = require('path');
var child = require('child_process');

var cmd = 'gst-launch-1.0';

Notifier = function(){
  if(!(this instanceof Notifier)) {
    return new Notifier();
  }

  //check, not ready
  // child.exec(cmd, function(e,i,o){
  //   if(e) {
  //     throw new Error(e);
  //   }
  // });

  this.player = play;

  this.sounds = [
    path.resolve(__dirname,'assets/n1.ogg'),
    path.resolve(__dirname,'assets/n2.ogg'),
    path.resolve(__dirname,'assets/n3.ogg')
  ];
};

module.exports = new Notifier();

Notifier.prototype.headsUp = function(cb){
  cb = cb || function(){};
  this.player(this.sounds[(Math.random() * this.sounds.length) >>> 0],cb);
};

/**
 * @param oggfile: String, filepath to ogg file
 * @param cb: Function, callback with error, stdout, stderr
 */
function play(oggfile, cb) {

  // var options = { cwd: process.cwd() };//null;
  var args = [
    'filesrc location='+oggfile,
    '!', 'oggdemux',
    '!', 'vorbisdec',
    '!', 'audioconvert',
    '!', 'audioresample',
    '!', 'alsasink'
  ];

  var runner = cmd + " " + args.join(" ");
  // console.log('Running:',runner);
  cb = cb || function(){};

  return child.exec(runner, cb);
  // var gst = child.exec(runner, function(error, stdout, stderr){
  //   if (error) {
  //     // console.error(error.stack);
  //     // console.error('Error code: ',error.code);
  //     // console.error('Signal received: ',error.signal);
  //     cb(error, stdout, stderr);
  //     return;
  //   }
  //   // console.log('Child Process STDOUT: ',stdout);
  //   // console.log('Child Process STDERR: ',stderr);
  //   return cb(null);
  // });
  //
  // gst.on('exit', function (code) {
  //   // console.log('Child process exited with exit code', code);
  //   // console.log('Dump:');
  // });
}
