# r2d2
Sound notifier

## Description

Plays a random sound (mp3,ogg) as a notification from console or cli

## Install
```bash
npm install r2d2 --save
```

## Usage

Create an instance and call `headsUp()`:
```javascript
var notifier = require('r2d2')();

notifier.headsUp(function(err){
  if(err) {
    console.error('Error: couldn\'t play sound because:');
    console.error(err.stack);
  }
  console.log('You\'ve been notified');
});
```

## API
### headsUp([callback])
Plays a random sound and executes callback. Callback signature is `(err)` (aka *thunk*)


Just for fun and testing
