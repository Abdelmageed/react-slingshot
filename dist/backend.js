require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(5);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(3);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _expressSession = __webpack_require__(6);\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _morgan = __webpack_require__(7);\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _cors = __webpack_require__(4);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import poll from './routers/poll';\n//import index from './routers/index';\n\n//import passport from './passport';\nvar app = (0, _express2.default)();\n\napp.use((0, _cors2.default)());\napp.use((0, _morgan2.default)('dev'));\napp.use((0, _expressSession2.default)({\n  secret: 'keyboard cat',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n//app.use(passport.initialize());\n//app.use(passport.session());\napp.options('*', (0, _cors2.default)());\n\napp.get('/getIt', function (req, res) {\n  res.end('Aiwaz ba2a from Express');\n});\n//app.use('/', index);\n//app.use('/poll', poll);\n\nexports.default = app;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwcC5qcz9kMzdmIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInNlY3JldCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIm9wdGlvbnMiLCJnZXQiLCJyZXEiLCJyZXMiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBO0FBQ0E7O0FBTkE7QUFRQSxJQUFNQSxNQUFNLHdCQUFaOztBQUVBQSxJQUFJQyxHQUFKLENBQVEscUJBQVI7QUFDQUQsSUFBSUMsR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjtBQUNBRCxJQUFJQyxHQUFKLENBQVEsOEJBQVE7QUFDZEMsVUFBUSxjQURNO0FBRWRDLFVBQVEsS0FGTTtBQUdkQyxxQkFBbUI7QUFITCxDQUFSLENBQVI7QUFLQUosSUFBSUMsR0FBSixDQUFRLHFCQUFXSSxJQUFYLEVBQVI7QUFDQUwsSUFBSUMsR0FBSixDQUFRLHFCQUFXSyxVQUFYLENBQXNCLEVBQUNDLFVBQVUsSUFBWCxFQUF0QixDQUFSO0FBQ0E7QUFDQTtBQUNBUCxJQUFJUSxPQUFKLENBQVksR0FBWixFQUFpQixxQkFBakI7O0FBRUFSLElBQUlTLEdBQUosQ0FBUSxRQUFSLEVBQWtCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFhO0FBQzdCQSxNQUFJQyxHQUFKLENBQVEseUJBQVI7QUFDRCxDQUZEO0FBR0E7QUFDQTs7a0JBRWVaLEciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG4vL2ltcG9ydCBwYXNzcG9ydCBmcm9tICcuL3Bhc3Nwb3J0JztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG4vL2ltcG9ydCBwb2xsIGZyb20gJy4vcm91dGVycy9wb2xsJztcclxuLy9pbXBvcnQgaW5kZXggZnJvbSAnLi9yb3V0ZXJzL2luZGV4JztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoY29ycygpKTtcclxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuYXBwLnVzZShzZXNzaW9uKHtcclxuICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxyXG4gIHJlc2F2ZTogZmFsc2UsXHJcbiAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XHJcbi8vYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG4vL2FwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuYXBwLm9wdGlvbnMoJyonLCBjb3JzKCkpXHJcblxyXG5hcHAuZ2V0KCcvZ2V0SXQnLCAocmVxLCByZXMpPT4ge1xyXG4gIHJlcy5lbmQoJ0Fpd2F6IGJhMmEgZnJvbSBFeHByZXNzJyk7XHJcbn0pO1xyXG4vL2FwcC51c2UoJy8nLCBpbmRleCk7XHJcbi8vYXBwLnVzZSgnL3BvbGwnLCBwb2xsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwcDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar config = {\n  PORT: process.env.PORT | 3007,\n  DATA_URL: \"mongodb://localhost:27017/voter\"\n};\n\nexports.default = config;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2NvbmZpZy5qcz8wMDQzIl0sIm5hbWVzIjpbImNvbmZpZyIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwiREFUQV9VUkwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsU0FBUztBQUNiQyxRQUFNQyxRQUFRQyxHQUFSLENBQVlGLElBQVosR0FBbUIsSUFEWjtBQUViRyxZQUFVO0FBRkcsQ0FBZjs7a0JBS2VKLE0iLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcclxuICBQT1JUOiBwcm9jZXNzLmVudi5QT1JUIHwgMzAwNyxcclxuICBEQVRBX1VSTDogXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3ZvdGVyXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = require(\"net\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXRcIj9lYjg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZXRcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzQ2NTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/ODlkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcnNcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIj82M2JkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIj8xOWVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(1);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(0);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import portFinder from 'portfinder'\n//import mongoose from 'mongoose';\n//import User from './models/User';\n//var server;\n//if(server && server.close){\n//  server.close();\n//}\n\nvar server = void 0;\nvar isPortTaken = function isPortTaken(port, fn) {\n  var net = __webpack_require__(2);\n  var tester = net.createServer().once('error', function (err) {\n    if (err.code != 'EADDRINUSE') return fn(err);\n    fn(null, true);\n  }).once('listening', function () {\n    tester.once('close', function () {\n      fn(null, false);\n    }).close();\n  }).listen(port);\n};\n\nfunction startServer(err, isPortTaken) {\n  if (!(err && isPortTaken)) {\n    server = _app2.default.listen(_config2.default.PORT, 'localhost', function () {\n      console.log('express server started at localhost:' + _config2.default.PORT);\n    });\n  }\n}\n\nisPortTaken(_config2.default.PORT, startServer);\n\n//process.on('exit', (code) => {\n//  setTimeout(()=> {\n//    server.close();\n//  }, 0);\n////  console.log('server closed, now killing');\n////  process.kill();\n//});\n//, function() {\n//  console.log(`express server listening on port ${config.PORT}`);\n//}\n\n//const user = new User({local: {username: 'Abdelmageed', password: 'password123'}});\n//user.save((err, newUser)=> {\n//  console.log('user saved');\n//});\n//if(!mongoose.connection.db)\n//  mongoose.connect(config.DATA_URL);\n\nexports.default = server;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzP2Q5YzIiXSwibmFtZXMiOlsic2VydmVyIiwiaXNQb3J0VGFrZW4iLCJwb3J0IiwiZm4iLCJuZXQiLCJyZXF1aXJlIiwidGVzdGVyIiwiY3JlYXRlU2VydmVyIiwib25jZSIsImVyciIsImNvZGUiLCJjbG9zZSIsImxpc3RlbiIsInN0YXJ0U2VydmVyIiwiUE9SVCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLGVBQUo7QUFDQSxJQUFJQyxjQUFjLFNBQWRBLFdBQWMsQ0FBU0MsSUFBVCxFQUFlQyxFQUFmLEVBQW1CO0FBQ25DLE1BQUlDLE1BQU0sbUJBQUFDLENBQVEsQ0FBUixDQUFWO0FBQ0EsTUFBSUMsU0FBU0YsSUFBSUcsWUFBSixHQUNaQyxJQURZLENBQ1AsT0FETyxFQUNFLFVBQVVDLEdBQVYsRUFBZTtBQUM1QixRQUFJQSxJQUFJQyxJQUFKLElBQVksWUFBaEIsRUFBOEIsT0FBT1AsR0FBR00sR0FBSCxDQUFQO0FBQzlCTixPQUFHLElBQUgsRUFBUyxJQUFUO0FBQ0QsR0FKWSxFQUtaSyxJQUxZLENBS1AsV0FMTyxFQUtNLFlBQVc7QUFDNUJGLFdBQU9FLElBQVAsQ0FBWSxPQUFaLEVBQXFCLFlBQVc7QUFBRUwsU0FBRyxJQUFILEVBQVMsS0FBVDtBQUFpQixLQUFuRCxFQUNDUSxLQUREO0FBRUQsR0FSWSxFQVNaQyxNQVRZLENBU0xWLElBVEssQ0FBYjtBQVVELENBWkQ7O0FBY0EsU0FBU1csV0FBVCxDQUFxQkosR0FBckIsRUFBMEJSLFdBQTFCLEVBQXNDO0FBQ3BDLE1BQUcsRUFBR1EsT0FBT1IsV0FBVixDQUFILEVBQTBCO0FBQ3RCRCxhQUFTLGNBQUlZLE1BQUosQ0FBVyxpQkFBT0UsSUFBbEIsRUFBd0IsV0FBeEIsRUFBcUMsWUFBSztBQUNuREMsY0FBUUMsR0FBUiwwQ0FBbUQsaUJBQU9GLElBQTFEO0FBQ0QsS0FGVSxDQUFUO0FBR0g7QUFDRjs7QUFFRGIsWUFBWSxpQkFBT2EsSUFBbkIsRUFBeUJELFdBQXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7a0JBRWViLE0iLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJztcclxuXHJcbi8vaW1wb3J0IHBvcnRGaW5kZXIgZnJvbSAncG9ydGZpbmRlcidcclxuLy9pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG4vL2ltcG9ydCBVc2VyIGZyb20gJy4vbW9kZWxzL1VzZXInO1xyXG4vL3ZhciBzZXJ2ZXI7XHJcbi8vaWYoc2VydmVyICYmIHNlcnZlci5jbG9zZSl7XHJcbi8vICBzZXJ2ZXIuY2xvc2UoKTtcclxuLy99XHJcblxyXG5sZXQgc2VydmVyO1xyXG52YXIgaXNQb3J0VGFrZW4gPSBmdW5jdGlvbihwb3J0LCBmbikge1xyXG4gIHZhciBuZXQgPSByZXF1aXJlKCduZXQnKVxyXG4gIHZhciB0ZXN0ZXIgPSBuZXQuY3JlYXRlU2VydmVyKClcclxuICAub25jZSgnZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICBpZiAoZXJyLmNvZGUgIT0gJ0VBRERSSU5VU0UnKSByZXR1cm4gZm4oZXJyKVxyXG4gICAgZm4obnVsbCwgdHJ1ZSlcclxuICB9KVxyXG4gIC5vbmNlKCdsaXN0ZW5pbmcnLCBmdW5jdGlvbigpIHtcclxuICAgIHRlc3Rlci5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uKCkgeyBmbihudWxsLCBmYWxzZSkgfSlcclxuICAgIC5jbG9zZSgpXHJcbiAgfSlcclxuICAubGlzdGVuKHBvcnQpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0U2VydmVyKGVyciwgaXNQb3J0VGFrZW4pe1xyXG4gIGlmKCEgKGVyciAmJiBpc1BvcnRUYWtlbikpe1xyXG4gICAgICBzZXJ2ZXIgPSBhcHAubGlzdGVuKGNvbmZpZy5QT1JULCAnbG9jYWxob3N0JywgKCk9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBleHByZXNzIHNlcnZlciBzdGFydGVkIGF0IGxvY2FsaG9zdDoke2NvbmZpZy5QT1JUfWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5pc1BvcnRUYWtlbihjb25maWcuUE9SVCwgc3RhcnRTZXJ2ZXIpO1xyXG5cclxuLy9wcm9jZXNzLm9uKCdleGl0JywgKGNvZGUpID0+IHtcclxuLy8gIHNldFRpbWVvdXQoKCk9PiB7XHJcbi8vICAgIHNlcnZlci5jbG9zZSgpO1xyXG4vLyAgfSwgMCk7XHJcbi8vLy8gIGNvbnNvbGUubG9nKCdzZXJ2ZXIgY2xvc2VkLCBub3cga2lsbGluZycpO1xyXG4vLy8vICBwcm9jZXNzLmtpbGwoKTtcclxuLy99KTtcclxuLy8sIGZ1bmN0aW9uKCkge1xyXG4vLyAgY29uc29sZS5sb2coYGV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7Y29uZmlnLlBPUlR9YCk7XHJcbi8vfVxyXG5cclxuLy9jb25zdCB1c2VyID0gbmV3IFVzZXIoe2xvY2FsOiB7dXNlcm5hbWU6ICdBYmRlbG1hZ2VlZCcsIHBhc3N3b3JkOiAncGFzc3dvcmQxMjMnfX0pO1xyXG4vL3VzZXIuc2F2ZSgoZXJyLCBuZXdVc2VyKT0+IHtcclxuLy8gIGNvbnNvbGUubG9nKCd1c2VyIHNhdmVkJyk7XHJcbi8vfSk7XHJcbi8vaWYoIW1vbmdvb3NlLmNvbm5lY3Rpb24uZGIpXHJcbi8vICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5EQVRBX1VSTCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);