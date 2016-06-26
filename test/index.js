var notifier = require('../index');

console.log('playing sound');
notifier.headsUp(function(err){
  if(err){
    console.error(err.stack);
    return;
  }
  console.log('sound played');
});
