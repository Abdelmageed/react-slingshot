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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(0);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(5);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _expressSession = __webpack_require__(7);\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _morgan = __webpack_require__(8);\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _cors = __webpack_require__(6);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _path = __webpack_require__(9);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _index = __webpack_require__(4);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import passport from './passport';\nvar app = (0, _express2.default)();\n//import poll from './routers/poll';\n\n\napp.use((0, _cors2.default)());\napp.use((0, _morgan2.default)('dev'));\napp.use((0, _expressSession2.default)({\n  secret: 'keyboard cat',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n//app.use(passport.initialize());\n//app.use(passport.session());\napp.options('*', (0, _cors2.default)());\n\n//app.get('/getIt', (req, res)=> {\n//  res.end('Helloa from Express');\n//});\napp.use(_express2.default.static(_path2.default.resolve('dist')));\napp.get('/', function (req, res) {\n  res.sendFile(_path2.default.resolve('dist/index.html'));\n});\napp.use('/api', _index2.default);\n//app.use('/poll', poll);\n\nexports.default = app;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwcC5qcz9kMzdmIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInNlY3JldCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIm9wdGlvbnMiLCJzdGF0aWMiLCJyZXNvbHZlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFQQTtBQVNBLElBQU1BLE1BQU0sd0JBQVo7QUFIQTs7O0FBS0FBLElBQUlDLEdBQUosQ0FBUSxxQkFBUjtBQUNBRCxJQUFJQyxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0FELElBQUlDLEdBQUosQ0FBUSw4QkFBUTtBQUNkQyxVQUFRLGNBRE07QUFFZEMsVUFBUSxLQUZNO0FBR2RDLHFCQUFtQjtBQUhMLENBQVIsQ0FBUjtBQUtBSixJQUFJQyxHQUFKLENBQVEscUJBQVdJLElBQVgsRUFBUjtBQUNBTCxJQUFJQyxHQUFKLENBQVEscUJBQVdLLFVBQVgsQ0FBc0IsRUFBQ0MsVUFBVSxJQUFYLEVBQXRCLENBQVI7QUFDQTtBQUNBO0FBQ0FQLElBQUlRLE9BQUosQ0FBWSxHQUFaLEVBQWlCLHFCQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQVIsSUFBSUMsR0FBSixDQUFRLGtCQUFRUSxNQUFSLENBQWUsZUFBS0MsT0FBTCxDQUFhLE1BQWIsQ0FBZixDQUFSO0FBQ0FWLElBQUlXLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDeEJBLE1BQUlDLFFBQUosQ0FBYSxlQUFLSixPQUFMLENBQWEsaUJBQWIsQ0FBYjtBQUNELENBRkQ7QUFHQVYsSUFBSUMsR0FBSixDQUFRLE1BQVI7QUFDQTs7a0JBRWVELEciLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG4vL2ltcG9ydCBwYXNzcG9ydCBmcm9tICcuL3Bhc3Nwb3J0JztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuLy9pbXBvcnQgcG9sbCBmcm9tICcuL3JvdXRlcnMvcG9sbCc7XHJcbmltcG9ydCBpbmRleCBmcm9tICcuL3JvdXRlcnMvaW5kZXgnO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG5hcHAudXNlKHNlc3Npb24oe1xyXG4gIHNlY3JldDogJ2tleWJvYXJkIGNhdCcsXHJcbiAgcmVzYXZlOiBmYWxzZSxcclxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKTtcclxuLy9hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbi8vYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xyXG5hcHAub3B0aW9ucygnKicsIGNvcnMoKSlcclxuXHJcbi8vYXBwLmdldCgnL2dldEl0JywgKHJlcSwgcmVzKT0+IHtcclxuLy8gIHJlcy5lbmQoJ0hlbGxvYSBmcm9tIEV4cHJlc3MnKTtcclxuLy99KTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLnJlc29sdmUoJ2Rpc3QnKSkpO1xyXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKT0+IHtcclxuICByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKCdkaXN0L2luZGV4Lmh0bWwnKSk7XHJcbn0pO1xyXG5hcHAudXNlKCcvYXBpJywgaW5kZXgpO1xyXG4vL2FwcC51c2UoJy9wb2xsJywgcG9sbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9");

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(1);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(2);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import portFinder from 'portfinder'\n//import mongoose from 'mongoose';\n//import User from './models/User';\n//var server;\n//if(server && server.close){\n//  server.close();\n//}\n\nvar server = void 0;\nvar isPortTaken = function isPortTaken(port, fn) {\n  var net = __webpack_require__(3);\n  var tester = net.createServer().once('error', function (err) {\n    if (err.code != 'EADDRINUSE') return fn(err);\n    fn(null, true);\n  }).once('listening', function () {\n    tester.once('close', function () {\n      fn(null, false);\n    }).close();\n  }).listen(port);\n};\n\nfunction startServer(err, isPortTaken) {\n  if (!(err && isPortTaken)) {\n    server = _app2.default.listen(_config2.default.PORT, 'localhost', function () {\n      console.log('express server started at localhost:' + _config2.default.PORT);\n    });\n  }\n}\n\nisPortTaken(_config2.default.PORT, startServer);\n\n//process.on('exit', (code) => {\n//  setTimeout(()=> {\n//    server.close();\n//  }, 0);\n////  console.log('server closed, now killing');\n////  process.kill();\n//});\n//, function() {\n//  console.log(`express server listening on port ${config.PORT}`);\n//}\n\n//const user = new User({local: {username: 'Abdelmageed', password: 'password123'}});\n//user.save((err, newUser)=> {\n//  console.log('user saved');\n//});\n//if(!mongoose.connection.db)\n//  mongoose.connect(config.DATA_URL);\n\nexports.default = server;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzP2Q5YzIiXSwibmFtZXMiOlsic2VydmVyIiwiaXNQb3J0VGFrZW4iLCJwb3J0IiwiZm4iLCJuZXQiLCJyZXF1aXJlIiwidGVzdGVyIiwiY3JlYXRlU2VydmVyIiwib25jZSIsImVyciIsImNvZGUiLCJjbG9zZSIsImxpc3RlbiIsInN0YXJ0U2VydmVyIiwiUE9SVCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLGVBQUo7QUFDQSxJQUFJQyxjQUFjLFNBQWRBLFdBQWMsQ0FBU0MsSUFBVCxFQUFlQyxFQUFmLEVBQW1CO0FBQ25DLE1BQUlDLE1BQU0sbUJBQUFDLENBQVEsQ0FBUixDQUFWO0FBQ0EsTUFBSUMsU0FBU0YsSUFBSUcsWUFBSixHQUNaQyxJQURZLENBQ1AsT0FETyxFQUNFLFVBQVVDLEdBQVYsRUFBZTtBQUM1QixRQUFJQSxJQUFJQyxJQUFKLElBQVksWUFBaEIsRUFBOEIsT0FBT1AsR0FBR00sR0FBSCxDQUFQO0FBQzlCTixPQUFHLElBQUgsRUFBUyxJQUFUO0FBQ0QsR0FKWSxFQUtaSyxJQUxZLENBS1AsV0FMTyxFQUtNLFlBQVc7QUFDNUJGLFdBQU9FLElBQVAsQ0FBWSxPQUFaLEVBQXFCLFlBQVc7QUFBRUwsU0FBRyxJQUFILEVBQVMsS0FBVDtBQUFpQixLQUFuRCxFQUNDUSxLQUREO0FBRUQsR0FSWSxFQVNaQyxNQVRZLENBU0xWLElBVEssQ0FBYjtBQVVELENBWkQ7O0FBY0EsU0FBU1csV0FBVCxDQUFxQkosR0FBckIsRUFBMEJSLFdBQTFCLEVBQXNDO0FBQ3BDLE1BQUcsRUFBR1EsT0FBT1IsV0FBVixDQUFILEVBQTBCO0FBQ3RCRCxhQUFTLGNBQUlZLE1BQUosQ0FBVyxpQkFBT0UsSUFBbEIsRUFBd0IsV0FBeEIsRUFBcUMsWUFBSztBQUNuREMsY0FBUUMsR0FBUiwwQ0FBbUQsaUJBQU9GLElBQTFEO0FBQ0QsS0FGVSxDQUFUO0FBR0g7QUFDRjs7QUFFRGIsWUFBWSxpQkFBT2EsSUFBbkIsRUFBeUJELFdBQXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7a0JBRWViLE0iLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuLy9pbXBvcnQgcG9ydEZpbmRlciBmcm9tICdwb3J0ZmluZGVyJ1xyXG4vL2ltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbi8vaW1wb3J0IFVzZXIgZnJvbSAnLi9tb2RlbHMvVXNlcic7XHJcbi8vdmFyIHNlcnZlcjtcclxuLy9pZihzZXJ2ZXIgJiYgc2VydmVyLmNsb3NlKXtcclxuLy8gIHNlcnZlci5jbG9zZSgpO1xyXG4vL31cclxuXHJcbmxldCBzZXJ2ZXI7XHJcbnZhciBpc1BvcnRUYWtlbiA9IGZ1bmN0aW9uKHBvcnQsIGZuKSB7XHJcbiAgdmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpXHJcbiAgdmFyIHRlc3RlciA9IG5ldC5jcmVhdGVTZXJ2ZXIoKVxyXG4gIC5vbmNlKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgIGlmIChlcnIuY29kZSAhPSAnRUFERFJJTlVTRScpIHJldHVybiBmbihlcnIpXHJcbiAgICBmbihudWxsLCB0cnVlKVxyXG4gIH0pXHJcbiAgLm9uY2UoJ2xpc3RlbmluZycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdGVzdGVyLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24oKSB7IGZuKG51bGwsIGZhbHNlKSB9KVxyXG4gICAgLmNsb3NlKClcclxuICB9KVxyXG4gIC5saXN0ZW4ocG9ydClcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoZXJyLCBpc1BvcnRUYWtlbil7XHJcbiAgaWYoISAoZXJyICYmIGlzUG9ydFRha2VuKSl7XHJcbiAgICAgIHNlcnZlciA9IGFwcC5saXN0ZW4oY29uZmlnLlBPUlQsICdsb2NhbGhvc3QnLCAoKT0+IHtcclxuICAgICAgY29uc29sZS5sb2coYGV4cHJlc3Mgc2VydmVyIHN0YXJ0ZWQgYXQgbG9jYWxob3N0OiR7Y29uZmlnLlBPUlR9YCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmlzUG9ydFRha2VuKGNvbmZpZy5QT1JULCBzdGFydFNlcnZlcik7XHJcblxyXG4vL3Byb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xyXG4vLyAgc2V0VGltZW91dCgoKT0+IHtcclxuLy8gICAgc2VydmVyLmNsb3NlKCk7XHJcbi8vICB9LCAwKTtcclxuLy8vLyAgY29uc29sZS5sb2coJ3NlcnZlciBjbG9zZWQsIG5vdyBraWxsaW5nJyk7XHJcbi8vLy8gIHByb2Nlc3Mua2lsbCgpO1xyXG4vL30pO1xyXG4vLywgZnVuY3Rpb24oKSB7XHJcbi8vICBjb25zb2xlLmxvZyhgZXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtjb25maWcuUE9SVH1gKTtcclxuLy99XHJcblxyXG4vL2NvbnN0IHVzZXIgPSBuZXcgVXNlcih7bG9jYWw6IHt1c2VybmFtZTogJ0FiZGVsbWFnZWVkJywgcGFzc3dvcmQ6ICdwYXNzd29yZDEyMyd9fSk7XHJcbi8vdXNlci5zYXZlKChlcnIsIG5ld1VzZXIpPT4ge1xyXG4vLyAgY29uc29sZS5sb2coJ3VzZXIgc2F2ZWQnKTtcclxuLy99KTtcclxuLy9pZighbW9uZ29vc2UuY29ubmVjdGlvbi5kYilcclxuLy8gIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLkRBVEFfVVJMKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);