var NotifierClass = require('../index');

var notifier = new NotifierClass();

console.log('playing sound');
notifier.headsUp(function(err){
  if(err){
    console.error(err.stack);
    return;
  }
  console.log('sound played');
});
