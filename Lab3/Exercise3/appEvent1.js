
const  EventEmitter = require('events');

//Raise: logging (data:)
const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) =>
{
    console.log('Listener called', arg);
});

logger.log('logging data:');