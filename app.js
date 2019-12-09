////////////////////////
// const logger = require('./logger'); // ./  is indicate same folder

///////////////////////

// const path = require ('path');

// let pathObj = path.parse(__filename);

// console.log(pathObj);

///////////////////

// const os = require('os');

// let total = os.totalmem();

// console.log(`Total memory: ${total}`);

//////////////////////

// const fs = require('fs');

// fs.readdir('./', function(err, files){ ///async bolohoor callback function avna ehnii argument error message, 2dahi n butsaj irsen utga
//     if(err) console.log(err);
//     else console.log(files);
// });

////////////////////////

// const EventEmitter = require('events'); //EventEmitter is class
// const emitter = new EventEmitter(); //emitter is object or variable

// //event listener
// emitter.on('Logging', (e)=>{
//     console.log('Logging '+e.parse());
// });

// emitter.emit('Logging', {id: 1, url: 'http//'});

////////////////////////////// extends eventemitter

// const EventEmitter = require('events');

// const Logger = require('./Logger');
// const logger = new Logger();

// logger.on('Logging', (e)=>{
//     console.log('Logging', e);
// });
// logger.log('msg');

///////////////////////////////

const http = require('http');

http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
}).listen('3000');

