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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//const DOMAIN = (process.env.NODE_ENV == 'production')? ''\nvar config = {\n  PORT: process.env.PORT || 3007,\n  DATA_URL: \"mongodb://localhost:27017/voter\"\n};\n\nexports.default = config;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcuanM/NjkyNiJdLCJuYW1lcyI6WyJjb25maWciLCJQT1JUIiwicHJvY2VzcyIsImVudiIsIkRBVEFfVVJMIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsSUFBTUEsU0FBUztBQUNiQyxRQUFNQyxRQUFRQyxHQUFSLENBQVlGLElBQVosSUFBb0IsSUFEYjtBQUViRyxZQUFVO0FBRkcsQ0FBZjs7a0JBS2VKLE0iLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgRE9NQUlOID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WID09ICdwcm9kdWN0aW9uJyk/ICcnXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBQT1JUOiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDcsXHJcbiAgREFUQV9VUkw6IFwibW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNy92b3RlclwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlnLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(0);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _serveFavicon = __webpack_require__(10);\n\nvar _serveFavicon2 = _interopRequireDefault(_serveFavicon);\n\nvar _bodyParser = __webpack_require__(5);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _expressSession = __webpack_require__(7);\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _morgan = __webpack_require__(8);\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _cors = __webpack_require__(6);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _path = __webpack_require__(9);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _index = __webpack_require__(4);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n//import poll from './routers/poll';\n\n//import passport from './passport';\n\n\napp.use((0, _cors2.default)());\napp.use((0, _morgan2.default)('dev'));\napp.use((0, _expressSession2.default)({\n  secret: 'keyboard cat',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n//app.use(passport.initialize());\n//app.use(passport.session());\napp.options('*', (0, _cors2.default)());\n\n//app.get('/getIt', (req, res)=> {\n//  res.end('Helloa from Express');\n//});\napp.use((0, _serveFavicon2.default)(_path2.default.resolve('dist/favicon.ico')));\napp.use(_express2.default.static(_path2.default.resolve('dist')));\napp.get('/', function (req, res) {\n  res.sendFile(_path2.default.resolve('dist/index.html'));\n});\napp.use('/api', _index2.default);\n//app.use('/poll', poll);\n\nexports.default = app;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwcC5qcz9kMzdmIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInNlY3JldCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsIm9wdGlvbnMiLCJyZXNvbHZlIiwic3RhdGljIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLE1BQU0sd0JBQVo7QUFIQTs7QUFQQTs7O0FBWUFBLElBQUlDLEdBQUosQ0FBUSxxQkFBUjtBQUNBRCxJQUFJQyxHQUFKLENBQVEsc0JBQU8sS0FBUCxDQUFSO0FBQ0FELElBQUlDLEdBQUosQ0FBUSw4QkFBUTtBQUNkQyxVQUFRLGNBRE07QUFFZEMsVUFBUSxLQUZNO0FBR2RDLHFCQUFtQjtBQUhMLENBQVIsQ0FBUjtBQUtBSixJQUFJQyxHQUFKLENBQVEscUJBQVdJLElBQVgsRUFBUjtBQUNBTCxJQUFJQyxHQUFKLENBQVEscUJBQVdLLFVBQVgsQ0FBc0IsRUFBQ0MsVUFBVSxJQUFYLEVBQXRCLENBQVI7QUFDQTtBQUNBO0FBQ0FQLElBQUlRLE9BQUosQ0FBWSxHQUFaLEVBQWlCLHFCQUFqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQVIsSUFBSUMsR0FBSixDQUFTLDRCQUFjLGVBQUtRLE9BQUwsQ0FBYSxrQkFBYixDQUFkLENBQVQ7QUFDQVQsSUFBSUMsR0FBSixDQUFRLGtCQUFRUyxNQUFSLENBQWUsZUFBS0QsT0FBTCxDQUFhLE1BQWIsQ0FBZixDQUFSO0FBQ0FULElBQUlXLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDeEJBLE1BQUlDLFFBQUosQ0FBYSxlQUFLTCxPQUFMLENBQWEsaUJBQWIsQ0FBYjtBQUNELENBRkQ7QUFHQVQsSUFBSUMsR0FBSixDQUFRLE1BQVI7QUFDQTs7a0JBRWVELEciLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG4vL2ltcG9ydCBwYXNzcG9ydCBmcm9tICcuL3Bhc3Nwb3J0JztcclxuaW1wb3J0IHNlcnZlRmF2aWNvbiBmcm9tICdzZXJ2ZS1mYXZpY29uJztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuLy9pbXBvcnQgcG9sbCBmcm9tICcuL3JvdXRlcnMvcG9sbCc7XHJcbmltcG9ydCBpbmRleCBmcm9tICcuL3JvdXRlcnMvaW5kZXgnO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xyXG5hcHAudXNlKHNlc3Npb24oe1xyXG4gIHNlY3JldDogJ2tleWJvYXJkIGNhdCcsXHJcbiAgcmVzYXZlOiBmYWxzZSxcclxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKTtcclxuLy9hcHAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSk7XHJcbi8vYXBwLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpO1xyXG5hcHAub3B0aW9ucygnKicsIGNvcnMoKSlcclxuXHJcbi8vYXBwLmdldCgnL2dldEl0JywgKHJlcSwgcmVzKT0+IHtcclxuLy8gIHJlcy5lbmQoJ0hlbGxvYSBmcm9tIEV4cHJlc3MnKTtcclxuLy99KTtcclxuYXBwLnVzZSAoc2VydmVGYXZpY29uIChwYXRoLnJlc29sdmUoJ2Rpc3QvZmF2aWNvbi5pY28nKSkpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKCdkaXN0JykpKTtcclxuYXBwLmdldCgnLycsIChyZXEsIHJlcyk9PiB7XHJcbiAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgnZGlzdC9pbmRleC5odG1sJykpO1xyXG59KTtcclxuYXBwLnVzZSgnL2FwaScsIGluZGV4KTtcclxuLy9hcHAudXNlKCcvcG9sbCcsIHBvbGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(1);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _app = __webpack_require__(2);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import portFinder from 'portfinder'\n//import mongoose from 'mongoose';\n//import User from './models/User';\n//var server;\n//if(server && server.close){\n//  server.close();\n//}\nvar dev = process.env.NODE_ENV !== 'production';\nvar server = void 0;\nvar isPortTaken = function isPortTaken(port, fn) {\n  var net = __webpack_require__(3);\n  var tester = net.createServer().once('error', function (err) {\n    if (err.code != 'EADDRINUSE') return fn(err);\n    fn(null, true);\n  }).once('listening', function () {\n    tester.once('close', function () {\n      fn(null, false);\n    }).close();\n  }).listen(port);\n};\n\nvar PORT = process.env.PORT || 3007;\nfunction startServer(err, isPortTaken) {\n  if (!(err && isPortTaken)) {\n    server = _app2.default.listen(PORT, 'localhost', function () {\n      console.log('express server started at localhost:' + PORT);\n    });\n  }\n}\n\nif (dev) {\n  isPortTaken(PORT, startServer);\n} else {\n  server = _app2.default.listen(PORT, 'localhost', function () {\n    console.log('express server started at localhost:' + PORT);\n  });\n}\n\n//process.on('exit', (code) => {\n//  setTimeout(()=> {\n//    server.close();\n//  }, 0);\n////  console.log('server closed, now killing');\n////  process.kill();\n//});\n//, function() {\n//  console.log(`express server listening on port ${config.PORT}`);\n//}\n\n//const user = new User({local: {username: 'Abdelmageed', password: 'password123'}});\n//user.save((err, newUser)=> {\n//  console.log('user saved');\n//});\n//if(!mongoose.connection.db)\n//  mongoose.connect(config.DATA_URL);\n\nexports.default = server;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzP2Q5YzIiXSwibmFtZXMiOlsiZGV2IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwic2VydmVyIiwiaXNQb3J0VGFrZW4iLCJwb3J0IiwiZm4iLCJuZXQiLCJyZXF1aXJlIiwidGVzdGVyIiwiY3JlYXRlU2VydmVyIiwib25jZSIsImVyciIsImNvZGUiLCJjbG9zZSIsImxpc3RlbiIsIlBPUlQiLCJzdGFydFNlcnZlciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBT0MsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXRDO0FBQ0EsSUFBSUMsZUFBSjtBQUNBLElBQUlDLGNBQWMsU0FBZEEsV0FBYyxDQUFTQyxJQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDbkMsTUFBSUMsTUFBTSxtQkFBQUMsQ0FBUSxDQUFSLENBQVY7QUFDQSxNQUFJQyxTQUFTRixJQUFJRyxZQUFKLEdBQ1pDLElBRFksQ0FDUCxPQURPLEVBQ0UsVUFBVUMsR0FBVixFQUFlO0FBQzVCLFFBQUlBLElBQUlDLElBQUosSUFBWSxZQUFoQixFQUE4QixPQUFPUCxHQUFHTSxHQUFILENBQVA7QUFDOUJOLE9BQUcsSUFBSCxFQUFTLElBQVQ7QUFDRCxHQUpZLEVBS1pLLElBTFksQ0FLUCxXQUxPLEVBS00sWUFBVztBQUM1QkYsV0FBT0UsSUFBUCxDQUFZLE9BQVosRUFBcUIsWUFBVztBQUFFTCxTQUFHLElBQUgsRUFBUyxLQUFUO0FBQWlCLEtBQW5ELEVBQ0NRLEtBREQ7QUFFRCxHQVJZLEVBU1pDLE1BVFksQ0FTTFYsSUFUSyxDQUFiO0FBVUQsQ0FaRDs7QUFjQSxJQUFNVyxPQUFPaEIsUUFBUUMsR0FBUixDQUFZZSxJQUFaLElBQW9CLElBQWpDO0FBQ0EsU0FBU0MsV0FBVCxDQUFxQkwsR0FBckIsRUFBMEJSLFdBQTFCLEVBQXNDO0FBQ3BDLE1BQUcsRUFBR1EsT0FBT1IsV0FBVixDQUFILEVBQTBCO0FBQ3RCRCxhQUFTLGNBQUlZLE1BQUosQ0FBV0MsSUFBWCxFQUFpQixXQUFqQixFQUE4QixZQUFLO0FBQzVDRSxjQUFRQyxHQUFSLDBDQUFtREgsSUFBbkQ7QUFDRCxLQUZVLENBQVQ7QUFHSDtBQUNGOztBQUdELElBQUdqQixHQUFILEVBQVE7QUFDTkssY0FBWVksSUFBWixFQUFrQkMsV0FBbEI7QUFDRCxDQUZELE1BRU87QUFDTGQsV0FBUyxjQUFJWSxNQUFKLENBQVdDLElBQVgsRUFBaUIsV0FBakIsRUFBOEIsWUFBSztBQUN4Q0UsWUFBUUMsR0FBUiwwQ0FBbURILElBQW5EO0FBQ0gsR0FGUSxDQUFUO0FBR0Q7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrQkFFZWIsTSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XHJcblxyXG4vL2ltcG9ydCBwb3J0RmluZGVyIGZyb20gJ3BvcnRmaW5kZXInXHJcbi8vaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuLy9pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy9Vc2VyJztcclxuLy92YXIgc2VydmVyO1xyXG4vL2lmKHNlcnZlciAmJiBzZXJ2ZXIuY2xvc2Upe1xyXG4vLyAgc2VydmVyLmNsb3NlKCk7XHJcbi8vfVxyXG5jb25zdCBkZXYgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyk7XHJcbmxldCBzZXJ2ZXI7XHJcbnZhciBpc1BvcnRUYWtlbiA9IGZ1bmN0aW9uKHBvcnQsIGZuKSB7XHJcbiAgdmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpXHJcbiAgdmFyIHRlc3RlciA9IG5ldC5jcmVhdGVTZXJ2ZXIoKVxyXG4gIC5vbmNlKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgIGlmIChlcnIuY29kZSAhPSAnRUFERFJJTlVTRScpIHJldHVybiBmbihlcnIpXHJcbiAgICBmbihudWxsLCB0cnVlKVxyXG4gIH0pXHJcbiAgLm9uY2UoJ2xpc3RlbmluZycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdGVzdGVyLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24oKSB7IGZuKG51bGwsIGZhbHNlKSB9KVxyXG4gICAgLmNsb3NlKClcclxuICB9KVxyXG4gIC5saXN0ZW4ocG9ydClcclxufVxyXG5cclxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwNztcclxuZnVuY3Rpb24gc3RhcnRTZXJ2ZXIoZXJyLCBpc1BvcnRUYWtlbil7XHJcbiAgaWYoISAoZXJyICYmIGlzUG9ydFRha2VuKSl7XHJcbiAgICAgIHNlcnZlciA9IGFwcC5saXN0ZW4oUE9SVCwgJ2xvY2FsaG9zdCcsICgpPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgZXhwcmVzcyBzZXJ2ZXIgc3RhcnRlZCBhdCBsb2NhbGhvc3Q6JHtQT1JUfWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaWYoZGV2KSB7XHJcbiAgaXNQb3J0VGFrZW4oUE9SVCwgc3RhcnRTZXJ2ZXIpO1xyXG59IGVsc2Uge1xyXG4gIHNlcnZlciA9IGFwcC5saXN0ZW4oUE9SVCwgJ2xvY2FsaG9zdCcsICgpPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgZXhwcmVzcyBzZXJ2ZXIgc3RhcnRlZCBhdCBsb2NhbGhvc3Q6JHtQT1JUfWApO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vL3Byb2Nlc3Mub24oJ2V4aXQnLCAoY29kZSkgPT4ge1xyXG4vLyAgc2V0VGltZW91dCgoKT0+IHtcclxuLy8gICAgc2VydmVyLmNsb3NlKCk7XHJcbi8vICB9LCAwKTtcclxuLy8vLyAgY29uc29sZS5sb2coJ3NlcnZlciBjbG9zZWQsIG5vdyBraWxsaW5nJyk7XHJcbi8vLy8gIHByb2Nlc3Mua2lsbCgpO1xyXG4vL30pO1xyXG4vLywgZnVuY3Rpb24oKSB7XHJcbi8vICBjb25zb2xlLmxvZyhgZXhwcmVzcyBzZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQgJHtjb25maWcuUE9SVH1gKTtcclxuLy99XHJcblxyXG4vL2NvbnN0IHVzZXIgPSBuZXcgVXNlcih7bG9jYWw6IHt1c2VybmFtZTogJ0FiZGVsbWFnZWVkJywgcGFzc3dvcmQ6ICdwYXNzd29yZDEyMyd9fSk7XHJcbi8vdXNlci5zYXZlKChlcnIsIG5ld1VzZXIpPT4ge1xyXG4vLyAgY29uc29sZS5sb2coJ3VzZXIgc2F2ZWQnKTtcclxuLy99KTtcclxuLy9pZighbW9uZ29vc2UuY29ubmVjdGlvbi5kYilcclxuLy8gIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLkRBVEFfVVJMKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);