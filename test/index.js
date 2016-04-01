var NotifierClass = require('../index');

var notifier = new NotifierClass();

console.log('playing sound');
notifier.headsUp(function(){
  console.log('sound played');
});
