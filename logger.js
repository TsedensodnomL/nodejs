
let url = 'http://mylogger.io/log';

const EventEmitter = require('events'); //EventEmitter is class

class Logger extends EventEmitter{
    log(msg){
        //HTTP request
        console.log(msg);
    
        //raise event
        this.emit('Logging', {id: 1, url: 'http//'});
    }
}

// module.exports.log = log;

module.exports = Logger;