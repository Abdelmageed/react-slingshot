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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//const DOMAIN = (process.env.NODE_ENV == 'production')? ''\nvar config = {\n  PORT: process.env.PORT | 3007,\n  DATA_URL: \"mongodb://localhost:27017/voter\"\n};\n\nexports.default = config;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/NjkyNiJdLCJuYW1lcyI6WyJjb25maWciLCJQT1JUIiwicHJvY2VzcyIsImVudiIsIkRBVEFfVVJMIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsSUFBTUEsU0FBUztBQUNiQyxRQUFNQyxRQUFRQyxHQUFSLENBQVlGLElBQVosR0FBbUIsSUFEWjtBQUViRyxZQUFVO0FBRkcsQ0FBZjs7a0JBS2VKLE0iLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgRE9NQUlOID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJyk/ICcnXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBQT1JUOiBwcm9jZXNzLmVudi5QT1JUIHwgMzAwNyxcclxuICBEQVRBX1VSTDogXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3ZvdGVyXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb25maWcuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(0);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _serveFavicon = __webpack_require__(10);\n\nvar _serveFavicon2 = _interopRequireDefault(_serveFavicon);\n\nvar _bodyParser = __webpack_require__(5);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _expressSession = __webpack_require__(7);\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _morgan = __webpack_require__(8);\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _cors = __webpack_require__(6);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _path = __webpack_require__(9);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _index = __webpack_require__(4);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n//import poll from './routers/poll';\n\n//import passport from './passport';\n\n\napp.use((0, _cors2.default)());\napp.use((0, _morgan2.default)('dev'));\napp.use((0, _expressSession2.default)({\n  secret: 'keyboard cat',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n//app.use(passport.initialize());\n//app.use(passport.session());\napp.options('*', (0, _cors2.default)());\n\n//app.get('/getIt', (req, res)=> {\n//  res.end('Helloa from Express');\n//});\napp.use((0, _serveFavicon2.default)(__dirname + '/dist/favicon.ico'));\napp.use(_express2.default.static(_path2.default.resolve('dist')));\napp.get('/', function (req, res) {\n  res.sendFile(_path2.default.resolve('dist/index.html'));\n});\napp.use('/api', _index2.default);\n//app.use('/poll', poll);\n\nexports.default = app;\n/* WEBPACK VAR INJECTION */}.call(exports, \"/\"))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwcC5qcz9kMzdmIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInNlY3JldCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIm9wdGlvbnMiLCJfX2Rpcm5hbWUiLCJzdGF0aWMiLCJyZXNvbHZlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLE1BQU0sd0JBQVo7QUFIQTs7QUFQQTs7O0FBWUFBLElBQUlDLEdBQUosQ0FBUSxxQkFBUjtBQUNBRCxJQUFJQyxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0FELElBQUlDLEdBQUosQ0FBUSw4QkFBUTtBQUNkQyxVQUFRLGNBRE07QUFFZEMsVUFBUSxLQUZNO0FBR2RDLHFCQUFtQjtBQUhMLENBQVIsQ0FBUjtBQUtBSixJQUFJQyxHQUFKLENBQVEscUJBQVdJLElBQVgsRUFBUjtBQUNBTCxJQUFJQyxHQUFKLENBQVEscUJBQVdLLFVBQVgsQ0FBc0IsRUFBQ0MsVUFBVSxJQUFYLEVBQXRCLENBQVI7QUFDQTtBQUNBO0FBQ0FQLElBQUlRLE9BQUosQ0FBWSxHQUFaLEVBQWlCLHFCQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQVIsSUFBSUMsR0FBSixDQUFTLDRCQUFjUSxZQUFZLG1CQUExQixDQUFUO0FBQ0FULElBQUlDLEdBQUosQ0FBUSxrQkFBUVMsTUFBUixDQUFlLGVBQUtDLE9BQUwsQ0FBYSxNQUFiLENBQWYsQ0FBUjtBQUNBWCxJQUFJWSxHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFhO0FBQ3hCQSxNQUFJQyxRQUFKLENBQWEsZUFBS0osT0FBTCxDQUFhLGlCQUFiLENBQWI7QUFDRCxDQUZEO0FBR0FYLElBQUlDLEdBQUosQ0FBUSxNQUFSO0FBQ0E7O2tCQUVlRCxHIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuLy9pbXBvcnQgcGFzc3BvcnQgZnJvbSAnLi9wYXNzcG9ydCc7XHJcbmltcG9ydCBzZXJ2ZUZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbic7XHJcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IHNlc3Npb24gZnJvbSAnZXhwcmVzcy1zZXNzaW9uJztcclxuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbi8vaW1wb3J0IHBvbGwgZnJvbSAnLi9yb3V0ZXJzL3BvbGwnO1xyXG5pbXBvcnQgaW5kZXggZnJvbSAnLi9yb3V0ZXJzL2luZGV4JztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoY29ycygpKTtcclxuYXBwLnVzZShtb3JnYW4oJ2RldicpKTtcclxuYXBwLnVzZShzZXNzaW9uKHtcclxuICBzZWNyZXQ6ICdrZXlib2FyZCBjYXQnLFxyXG4gIHJlc2F2ZTogZmFsc2UsXHJcbiAgc2F2ZVVuaW5pdGlhbGl6ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xyXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XHJcbi8vYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG4vL2FwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKTtcclxuYXBwLm9wdGlvbnMoJyonLCBjb3JzKCkpXHJcblxyXG4vL2FwcC5nZXQoJy9nZXRJdCcsIChyZXEsIHJlcyk9PiB7XHJcbi8vICByZXMuZW5kKCdIZWxsb2EgZnJvbSBFeHByZXNzJyk7XHJcbi8vfSk7XHJcbmFwcC51c2UgKHNlcnZlRmF2aWNvbiAoX19kaXJuYW1lICsgJy9kaXN0L2Zhdmljb24uaWNvJykpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKCdkaXN0JykpKTtcclxuYXBwLmdldCgnLycsIChyZXEsIHJlcyk9PiB7XHJcbiAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgnZGlzdC9pbmRleC5odG1sJykpO1xyXG59KTtcclxuYXBwLnVzZSgnL2FwaScsIGluZGV4KTtcclxuLy9hcHAudXNlKCcvcG9sbCcsIHBvbGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"net\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXRcIj9lYjg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZXRcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(0);\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.get('/getIt', function (req, res) {\n  res.end('Helloa from Express');\n});\n\nexports.default = router;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcnMvaW5kZXguanM/ZTMxYyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJSb3V0ZXIiLCJnZXQiLCJyZXEiLCJyZXMiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLGtCQUFRQyxNQUFSLEVBQWY7O0FBRUFELE9BQU9FLEdBQVAsQ0FBVyxRQUFYLEVBQXFCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFhO0FBQ2hDQSxNQUFJQyxHQUFKLENBQVEscUJBQVI7QUFDRCxDQUZEOztrQkFJZUwsTSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnL2dldEl0JywgKHJlcSwgcmVzKT0+IHtcclxuICByZXMuZW5kKCdIZWxsb2EgZnJvbSBFeHByZXNzJyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvcm91dGVycy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzQ2NTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYm9keS1wYXJzZXJcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/ODlkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcnNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIj82M2JkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzLXNlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIj8xOWVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb3JnYW5cIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-favicon\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCI/M2UwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(1);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(2);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import portFinder from 'portfinder'\n//import mongoose from 'mongoose';\n//import User from './models/User';\n//var server;\n//if(server && server.close){\n//  server.close();\n//}\n\nvar server = void 0;\nvar isPortTaken = function isPortTaken(port, fn) {\n  var net = __webpack_require__(3);\n  var tester = net.createServer().once('error', function (err) {\n    if (err.code != 'EADDRINUSE') return fn(err);\n    fn(null, true);\n  }).once('listening', function () {\n    tester.once('close', function () {\n      fn(null, false);\n    }).close();\n  }).listen(port);\n};\nvar PORT = process.env.PORT | 3007;\nfunction startServer(err, isPortTaken) {\n  if (!(err && isPortTaken)) {\n    server = _app2.default.listen(PORT, 'localhost', function () {\n      console.log('express server started at localhost:' + PORT);\n    });\n  }\n}\n\nisPortTaken(_config2.default.PORT, startServer);\n\n//process.on('exit', (code) => {\n//  setTimeout(()=> {\n//    server.close();\n//  }, 0);\n////  console.log('server closed, now killing');\n////  process.kill();\n//});\n//, function() {\n//  console.log(`express server listening on port ${config.PORT}`);\n//}\n\n//const user = new User({local: {username: 'Abdelmageed', password: 'password123'}});\n//user.save((err, newUser)=> {\n//  console.log('user saved');\n//});\n//if(!mongoose.connection.db)\n//  mongoose.connect(config.DATA_URL);\n\nexports.default = server;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzP2Q5YzIiXSwibmFtZXMiOlsic2VydmVyIiwiaXNQb3J0VGFrZW4iLCJwb3J0IiwiZm4iLCJuZXQiLCJyZXF1aXJlIiwidGVzdGVyIiwiY3JlYXRlU2VydmVyIiwib25jZSIsImVyciIsImNvZGUiLCJjbG9zZSIsImxpc3RlbiIsIlBPUlQiLCJwcm9jZXNzIiwiZW52Iiwic3RhcnRTZXJ2ZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxlQUFKO0FBQ0EsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQVNDLElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUNyQyxNQUFJQyxNQUFNLG1CQUFBQyxDQUFRLENBQVIsQ0FBVjtBQUNBLE1BQUlDLFNBQVNGLElBQUlHLFlBQUosR0FDWkMsSUFEWSxDQUNQLE9BRE8sRUFDRSxVQUFVQyxHQUFWLEVBQWU7QUFDNUIsUUFBSUEsSUFBSUMsSUFBSixJQUFZLFlBQWhCLEVBQThCLE9BQU9QLEdBQUdNLEdBQUgsQ0FBUDtBQUM5Qk4sT0FBRyxJQUFILEVBQVMsSUFBVDtBQUNELEdBSlksRUFLWkssSUFMWSxDQUtQLFdBTE8sRUFLTSxZQUFXO0FBQzVCRixXQUFPRSxJQUFQLENBQVksT0FBWixFQUFxQixZQUFXO0FBQUVMLFNBQUcsSUFBSCxFQUFTLEtBQVQ7QUFBaUIsS0FBbkQsRUFDQ1EsS0FERDtBQUVELEdBUlksRUFTWkMsTUFUWSxDQVNMVixJQVRLLENBQWI7QUFVRCxDQVpEO0FBYUEsSUFBTVcsT0FBT0MsUUFBUUMsR0FBUixDQUFZRixJQUFaLEdBQW1CLElBQWhDO0FBQ0EsU0FBU0csV0FBVCxDQUFxQlAsR0FBckIsRUFBMEJSLFdBQTFCLEVBQXNDO0FBQ3BDLE1BQUcsRUFBR1EsT0FBT1IsV0FBVixDQUFILEVBQTBCO0FBQ3RCRCxhQUFTLGNBQUlZLE1BQUosQ0FBV0MsSUFBWCxFQUFpQixXQUFqQixFQUE4QixZQUFLO0FBQzVDSSxjQUFRQyxHQUFSLDBDQUFtREwsSUFBbkQ7QUFDRCxLQUZVLENBQVQ7QUFHSDtBQUNGOztBQUVEWixZQUFZLGlCQUFPWSxJQUFuQixFQUF5QkcsV0FBekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFFZWhCLE0iLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuLy9pbXBvcnQgcG9ydEZpbmRlciBmcm9tICdwb3J0ZmluZGVyJ1xyXG4vL2ltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbi8vaW1wb3J0IFVzZXIgZnJvbSAnLi9tb2RlbHMvVXNlcic7XHJcbi8vdmFyIHNlcnZlcjtcclxuLy9pZihzZXJ2ZXIgJiYgc2VydmVyLmNsb3NlKXtcclxuLy8gIHNlcnZlci5jbG9zZSgpO1xyXG4vL31cclxuXHJcbmxldCBzZXJ2ZXI7XHJcbmNvbnN0IGlzUG9ydFRha2VuID0gZnVuY3Rpb24ocG9ydCwgZm4pIHtcclxuICB2YXIgbmV0ID0gcmVxdWlyZSgnbmV0JylcclxuICB2YXIgdGVzdGVyID0gbmV0LmNyZWF0ZVNlcnZlcigpXHJcbiAgLm9uY2UoJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xyXG4gICAgaWYgKGVyci5jb2RlICE9ICdFQUREUklOVVNFJykgcmV0dXJuIGZuKGVycilcclxuICAgIGZuKG51bGwsIHRydWUpXHJcbiAgfSlcclxuICAub25jZSgnbGlzdGVuaW5nJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0ZXN0ZXIub25jZSgnY2xvc2UnLCBmdW5jdGlvbigpIHsgZm4obnVsbCwgZmFsc2UpIH0pXHJcbiAgICAuY2xvc2UoKVxyXG4gIH0pXHJcbiAgLmxpc3Rlbihwb3J0KVxyXG59XHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHwgMzAwNztcclxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoZXJyLCBpc1BvcnRUYWtlbil7XHJcbiAgaWYoISAoZXJyICYmIGlzUG9ydFRha2VuKSl7XHJcbiAgICAgIHNlcnZlciA9IGFwcC5saXN0ZW4oUE9SVCwgJ2xvY2FsaG9zdCcsICgpPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgZXhwcmVzcyBzZXJ2ZXIgc3RhcnRlZCBhdCBsb2NhbGhvc3Q6JHtQT1JUfWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5pc1BvcnRUYWtlbihjb25maWcuUE9SVCwgc3RhcnRTZXJ2ZXIpO1xyXG5cclxuLy9wcm9jZXNzLm9uKCdleGl0JywgKGNvZGUpID0+IHtcclxuLy8gIHNldFRpbWVvdXQoKCk9PiB7XHJcbi8vICAgIHNlcnZlci5jbG9zZSgpO1xyXG4vLyAgfSwgMCk7XHJcbi8vLy8gIGNvbnNvbGUubG9nKCdzZXJ2ZXIgY2xvc2VkLCBub3cga2lsbGluZycpO1xyXG4vLy8vICBwcm9jZXNzLmtpbGwoKTtcclxuLy99KTtcclxuLy8sIGZ1bmN0aW9uKCkge1xyXG4vLyAgY29uc29sZS5sb2coYGV4cHJlc3Mgc2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7Y29uZmlnLlBPUlR9YCk7XHJcbi8vfVxyXG5cclxuLy9jb25zdCB1c2VyID0gbmV3IFVzZXIoe2xvY2FsOiB7dXNlcm5hbWU6ICdBYmRlbG1hZ2VlZCcsIHBhc3N3b3JkOiAncGFzc3dvcmQxMjMnfX0pO1xyXG4vL3VzZXIuc2F2ZSgoZXJyLCBuZXdVc2VyKT0+IHtcclxuLy8gIGNvbnNvbGUubG9nKCd1c2VyIHNhdmVkJyk7XHJcbi8vfSk7XHJcbi8vaWYoIW1vbmdvb3NlLmNvbm5lY3Rpb24uZGIpXHJcbi8vICBtb25nb29zZS5jb25uZWN0KGNvbmZpZy5EQVRBX1VSTCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);