    const  EventEmitter = require('events');

    console.log(__filename);
    console.log(__dirname);
    
    var url = 'http://mylogger.io/log';
class Logger extends EventEmitter
{
    log(message)
    {
        //send an http request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'}); //emit: Making a noise, produce - signalling event has happened
    }
}
    module.exports = Logger;
