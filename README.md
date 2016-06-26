# r2d2
Sound notifier

## Description

Plays a random R2-D2 sound (ogg) as a notification from console or cli.

The sound is played with *gstreamer*. It **WON'T** work without it.

## Install
```bash
npm install r2d2 --save
```

## Usage

Create an instance and call `headsUp()`:
```javascript
var notifier = require('r2d2');

notifier.headsUp(function(error, stdin, stdout){
  if(err) {
    console.error('Error: couldn\'t play sound because:');
    console.error(err.stack);
  }
  console.log('You\'ve been notified');
});
```

## API
### headsUp([callback])
Plays a random sound and executes callback. Callback signature is forwarded from
[child_process.exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback): *error*, *stdin*, *stdout*


Just for fun and testing
