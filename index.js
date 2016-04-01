var path = require('path');


Notifier = function(){
  if(!(this instanceof Notifier)) {
    return new Notifier();
  }

  this.player = require('play-sound')();

  this.sounds = [
    path.resolve('assets/n1.mp3'),
    path.resolve('assets/n2.mp3'),
    path.resolve('assets/n3.mp3')
  ];
};

module.exports = Notifier;

Notifier.prototype.headsUp = function(cb){
  cb = cb || function(){};
  this.player.play(this.sounds[(Math.random() * this.sounds.length) >>> 0],cb);
};
