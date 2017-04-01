import config from '../../config';
import app from './app';

//import portFinder from 'portfinder'
//import mongoose from 'mongoose';
//import User from './models/User';
//var server;
//if(server && server.close){
//  server.close();
//}
const dev = (process.env.NODE_ENV !== 'production');
let server;
var isPortTaken = function(port, fn) {
  var net = require('net')
  var tester = net.createServer()
  .once('error', function (err) {
    if (err.code != 'EADDRINUSE') return fn(err)
    fn(null, true)
  })
  .once('listening', function() {
    tester.once('close', function() { fn(null, false) })
    .close()
  })
  .listen(port)
}

function startServer(err, isPortTaken){
  if(! (err && isPortTaken)){
      server = app.listen(config.PORT, 'localhost', ()=> {
      console.log(`express server started at localhost:${config.PORT}`);
    });
  }
}


if(dev) {
  isPortTaken(config.PORT, startServer);
} else {
  server = app.listen(config.PORT, 'localhost', ()=> {
      console.log(`express server started at localhost:${config.PORT}`);
  });
}

//process.on('exit', (code) => {
//  setTimeout(()=> {
//    server.close();
//  }, 0);
////  console.log('server closed, now killing');
////  process.kill();
//});
//, function() {
//  console.log(`express server listening on port ${config.PORT}`);
//}

//const user = new User({local: {username: 'Abdelmageed', password: 'password123'}});
//user.save((err, newUser)=> {
//  console.log('user saved');
//});
//if(!mongoose.connection.db)
//  mongoose.connect(config.DATA_URL);

export default server;