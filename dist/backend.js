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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar config = {\n  PORT: process.env.PORT || 3007,\n  DATA_URL: process.env.DATA_URL || \"mongodb://localhost:27017/cross-trial\",\n  TEST_PORT: 3008\n};\n\nexports.default = config;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWdzL21haW4uanM/ZjE2YiJdLCJuYW1lcyI6WyJjb25maWciLCJQT1JUIiwicHJvY2VzcyIsImVudiIsIkRBVEFfVVJMIiwiVEVTVF9QT1JUIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLFNBQVM7QUFDYkMsUUFBTUMsUUFBUUMsR0FBUixDQUFZRixJQUFaLElBQW9CLElBRGI7QUFFYkcsWUFBVUYsUUFBUUMsR0FBUixDQUFZQyxRQUFaLElBQTBCLHVDQUZ2QjtBQUdiQyxhQUFXO0FBSEUsQ0FBZjs7a0JBTWVMLE0iLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbmZpZyA9IHtcclxuICBQT1JUOiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDcsXHJcbiAgREFUQV9VUkw6IHByb2Nlc3MuZW52LkRBVEFfVVJMIHx8ICAgXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2Nyb3NzLXRyaWFsXCIsXHJcbiAgVEVTVF9QT1JUOiAzMDA4XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29uZmlncy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2Q1MDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29vc2VcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _bcryptNodejs = __webpack_require__(9);\n\nvar _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);\n\nvar _mongoose = __webpack_require__(1);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Schema = _mongoose2.default.Schema;\n\nvar UserSchema = new Schema({\n  local: {\n    username: String,\n    password: String\n  }\n});\n\nUserSchema.pre('save', function (next) {\n  var user = this;\n  // only hash the password if it has been modified (or is new)\n  if (!user.isModified('local.password')) return next();\n\n  _bcryptNodejs2.default.hash(user.local.password, null, null, function (err, hash) {\n    if (err) return next(err);\n\n    // override the cleartext password with the hashed one\n    user.local.password = hash;\n    next();\n  });\n});\n\nUserSchema.methods.validatePassword = function (password) {\n  return _bcryptNodejs2.default.compareSync(password, this.local.password) ? {\n    isMatch: true\n  } : {\n    error: 'wrong password'\n  };\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL21vZGVscy9Vc2VyLmpzPzQwNTkiXSwibmFtZXMiOlsiU2NoZW1hIiwiVXNlclNjaGVtYSIsImxvY2FsIiwidXNlcm5hbWUiLCJTdHJpbmciLCJwYXNzd29yZCIsInByZSIsIm5leHQiLCJ1c2VyIiwiaXNNb2RpZmllZCIsImhhc2giLCJlcnIiLCJtZXRob2RzIiwidmFsaWRhdGVQYXNzd29yZCIsImNvbXBhcmVTeW5jIiwiaXNNYXRjaCIsImVycm9yIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQU1BLFNBQVMsbUJBQVNBLE1BQXhCOztBQUVBLElBQU1DLGFBQWEsSUFBSUQsTUFBSixDQUFXO0FBQzVCRSxTQUFPO0FBQ0xDLGNBQVVDLE1BREw7QUFFTEMsY0FBVUQ7QUFGTDtBQURxQixDQUFYLENBQW5COztBQU9BSCxXQUFXSyxHQUFYLENBQWUsTUFBZixFQUF1QixVQUFVQyxJQUFWLEVBQWdCO0FBQ3JDLE1BQUlDLE9BQU8sSUFBWDtBQUNBO0FBQ0EsTUFBSSxDQUFDQSxLQUFLQyxVQUFMLENBQWdCLGdCQUFoQixDQUFMLEVBQXdDLE9BQU9GLE1BQVA7O0FBRXhDLHlCQUFPRyxJQUFQLENBQVlGLEtBQUtOLEtBQUwsQ0FBV0csUUFBdkIsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkMsRUFBNkMsVUFBVU0sR0FBVixFQUFlRCxJQUFmLEVBQXFCO0FBQ2hFLFFBQUlDLEdBQUosRUFBUyxPQUFPSixLQUFLSSxHQUFMLENBQVA7O0FBRVQ7QUFDQUgsU0FBS04sS0FBTCxDQUFXRyxRQUFYLEdBQXNCSyxJQUF0QjtBQUNBSDtBQUNELEdBTkQ7QUFPRCxDQVpEOztBQWNBTixXQUFXVyxPQUFYLENBQW1CQyxnQkFBbkIsR0FBc0MsVUFBVVIsUUFBVixFQUFvQjtBQUN4RCxTQUFRLHVCQUFPUyxXQUFQLENBQW1CVCxRQUFuQixFQUE2QixLQUFLSCxLQUFMLENBQVdHLFFBQXhDLENBQUQsR0FBc0Q7QUFDM0RVLGFBQVM7QUFEa0QsR0FBdEQsR0FFSDtBQUNGQyxXQUFPO0FBREwsR0FGSjtBQUtELENBTkQ7O2tCQVFlLG1CQUFTQyxLQUFULENBQWUsTUFBZixFQUF1QmhCLFVBQXZCLEMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0LW5vZGVqcyc7XHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IFNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBsb2NhbDoge1xyXG4gICAgdXNlcm5hbWU6IFN0cmluZyxcclxuICAgIHBhc3N3b3JkOiBTdHJpbmdcclxuICB9XHJcbn0pO1xyXG5cclxuVXNlclNjaGVtYS5wcmUoJ3NhdmUnLCBmdW5jdGlvbiAobmV4dCkge1xyXG4gIHZhciB1c2VyID0gdGhpcztcclxuICAvLyBvbmx5IGhhc2ggdGhlIHBhc3N3b3JkIGlmIGl0IGhhcyBiZWVuIG1vZGlmaWVkIChvciBpcyBuZXcpXHJcbiAgaWYgKCF1c2VyLmlzTW9kaWZpZWQoJ2xvY2FsLnBhc3N3b3JkJykpIHJldHVybiBuZXh0KCk7XHJcblxyXG4gIGJjcnlwdC5oYXNoKHVzZXIubG9jYWwucGFzc3dvcmQsIG51bGwsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGhhc2gpIHtcclxuICAgIGlmIChlcnIpIHJldHVybiBuZXh0KGVycik7XHJcblxyXG4gICAgLy8gb3ZlcnJpZGUgdGhlIGNsZWFydGV4dCBwYXNzd29yZCB3aXRoIHRoZSBoYXNoZWQgb25lXHJcbiAgICB1c2VyLmxvY2FsLnBhc3N3b3JkID0gaGFzaDtcclxuICAgIG5leHQoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5Vc2VyU2NoZW1hLm1ldGhvZHMudmFsaWRhdGVQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gIHJldHVybiAoYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB0aGlzLmxvY2FsLnBhc3N3b3JkKSkgPyB7XHJcbiAgICBpc01hdGNoOiB0cnVlXHJcbiAgfSA6IHtcclxuICAgIGVycm9yOiAnd3JvbmcgcGFzc3dvcmQnXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9tb2RlbHMvVXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCI/ZDJkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydFwiPzAzMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGFzc3BvcnRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _passport = __webpack_require__(7);\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _serveFavicon = __webpack_require__(16);\n\nvar _serveFavicon2 = _interopRequireDefault(_serveFavicon);\n\nvar _bodyParser = __webpack_require__(10);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _expressSession = __webpack_require__(12);\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nvar _morgan = __webpack_require__(13);\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _cors = __webpack_require__(11);\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _path = __webpack_require__(15);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _user = __webpack_require__(8);\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use((0, _cors2.default)());\nif (process.env.NODE_ENV !== 'test') {\n  app.use((0, _morgan2.default)('dev')); //don't litter tests with log\n}\napp.use((0, _expressSession2.default)({\n  secret: 'keyboard cat',\n  resave: false,\n  saveUninitialized: false\n}));\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use(_passport2.default.initialize());\napp.use(_passport2.default.session());\napp.options('*', (0, _cors2.default)());\n\napp.use((0, _serveFavicon2.default)(_path2.default.resolve('dist/favicon.ico')));\napp.use(_express2.default.static(_path2.default.resolve('dist')));\napp.get('/', function (req, res) {\n  res.sendFile(_path2.default.resolve('dist/index.html'));\n});\napp.use('/api', _user2.default);\n\nexports.default = app;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwcC5qcz9kMzdmIl0sIm5hbWVzIjpbImFwcCIsInVzZSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInNlY3JldCIsInJlc2F2ZSIsInNhdmVVbmluaXRpYWxpemVkIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImluaXRpYWxpemUiLCJzZXNzaW9uIiwib3B0aW9ucyIsInJlc29sdmUiLCJzdGF0aWMiLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kRmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaOztBQUVBQSxJQUFJQyxHQUFKLENBQVEscUJBQVI7QUFDQSxJQUFHQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsTUFBNUIsRUFBb0M7QUFDbENKLE1BQUlDLEdBQUosQ0FBUSxzQkFBTyxLQUFQLENBQVIsRUFEa0MsQ0FDVjtBQUN6QjtBQUNERCxJQUFJQyxHQUFKLENBQVEsOEJBQVE7QUFDZEksVUFBUSxjQURNO0FBRWRDLFVBQVEsS0FGTTtBQUdkQyxxQkFBbUI7QUFITCxDQUFSLENBQVI7QUFLQVAsSUFBSUMsR0FBSixDQUFRLHFCQUFXTyxJQUFYLEVBQVI7QUFDQVIsSUFBSUMsR0FBSixDQUFRLHFCQUFXUSxVQUFYLENBQXNCLEVBQUNDLFVBQVUsSUFBWCxFQUF0QixDQUFSO0FBQ0FWLElBQUlDLEdBQUosQ0FBUSxtQkFBU1UsVUFBVCxFQUFSO0FBQ0FYLElBQUlDLEdBQUosQ0FBUSxtQkFBU1csT0FBVCxFQUFSO0FBQ0FaLElBQUlhLE9BQUosQ0FBWSxHQUFaLEVBQWlCLHFCQUFqQjs7QUFFQWIsSUFBSUMsR0FBSixDQUFTLDRCQUFjLGVBQUthLE9BQUwsQ0FBYSxrQkFBYixDQUFkLENBQVQ7QUFDQWQsSUFBSUMsR0FBSixDQUFRLGtCQUFRYyxNQUFSLENBQWUsZUFBS0QsT0FBTCxDQUFhLE1BQWIsQ0FBZixDQUFSO0FBQ0FkLElBQUlnQixHQUFKLENBQVEsR0FBUixFQUFhLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFhO0FBQ3hCQSxNQUFJQyxRQUFKLENBQWEsZUFBS0wsT0FBTCxDQUFhLGlCQUFiLENBQWI7QUFDRCxDQUZEO0FBR0FkLElBQUlDLEdBQUosQ0FBUSxNQUFSOztrQkFFZUQsRyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICcuL3Bhc3Nwb3J0JztcclxuaW1wb3J0IHNlcnZlRmF2aWNvbiBmcm9tICdzZXJ2ZS1mYXZpY29uJztcclxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xyXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nO1xyXG5pbXBvcnQgbW9yZ2FuIGZyb20gJ21vcmdhbic7XHJcbmltcG9ydCBjb3JzIGZyb20gJ2NvcnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IHVzZXIgZnJvbSAnLi9yb3V0ZXJzL3VzZXInO1xyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5cclxuYXBwLnVzZShjb3JzKCkpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XHJcbiAgYXBwLnVzZShtb3JnYW4oJ2RldicpKTsgLy9kb24ndCBsaXR0ZXIgdGVzdHMgd2l0aCBsb2dcclxufVxyXG5hcHAudXNlKHNlc3Npb24oe1xyXG4gIHNlY3JldDogJ2tleWJvYXJkIGNhdCcsXHJcbiAgcmVzYXZlOiBmYWxzZSxcclxuICBzYXZlVW5pbml0aWFsaXplZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKTtcclxuYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xyXG5hcHAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcbmFwcC5vcHRpb25zKCcqJywgY29ycygpKVxyXG5cclxuYXBwLnVzZSAoc2VydmVGYXZpY29uIChwYXRoLnJlc29sdmUoJ2Rpc3QvZmF2aWNvbi5pY28nKSkpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKCdkaXN0JykpKTtcclxuYXBwLmdldCgnLycsIChyZXEsIHJlcyk9PiB7XHJcbiAgcmVzLnNlbmRGaWxlKHBhdGgucmVzb2x2ZSgnZGlzdC9pbmRleC5odG1sJykpO1xyXG59KTtcclxuYXBwLnVzZSgnL2FwaScsIHVzZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("module.exports = require(\"net\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXRcIj9lYjg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZXRcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _User = __webpack_require__(2);\n\nvar _User2 = _interopRequireDefault(_User);\n\nvar _passport = __webpack_require__(4);\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(14);\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _main = __webpack_require__(0);\n\nvar _main2 = _interopRequireDefault(_main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar localStrategy = _passportLocal2.default.Strategy;\n\n_passport2.default.use(new localStrategy(function (username, password, done) {\n  _User2.default.findOne({ 'local.username': username }, function (err, user) {\n    if (err) return done(err);\n\n    if (!user) {\n      return done(null, false, { message: 'wrong username' });\n    }\n\n    if (user.validatePassword(password).error) {\n      return done(null, false, { message: 'wrong password' });\n    }\n\n    return done(null, user);\n  });\n}));\n\n_passport2.default.use('local-signup', new _passportLocal2.default(function (username, password, done) {\n\n  _User2.default.findOne({ 'local.username': username }, function (err, user) {\n\n    if (err) return done(err);\n\n    if (user) return done(null, false, { message: 'username already in use' });\n\n    var newUser = new _User2.default({\n      local: {\n        username: username,\n        password: password\n      }\n    });\n\n    newUser.save(function (err, newUser) {\n      if (err) return done(err);\n      return done(null, newUser);\n    });\n  });\n}));\n\n_passport2.default.serializeUser(function (user, done) {\n  done(null, user.id);\n});\n\n_passport2.default.deserializeUser(function (id, done) {\n  _User2.default.findById(id, function (err, user) {\n    done(err, user);\n  });\n});\n\nexports.default = _passport2.default;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3Bhc3Nwb3J0LmpzP2E3YjMiXSwibmFtZXMiOlsibG9jYWxTdHJhdGVneSIsIlN0cmF0ZWd5IiwidXNlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImRvbmUiLCJmaW5kT25lIiwiZXJyIiwidXNlciIsIm1lc3NhZ2UiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiZXJyb3IiLCJuZXdVc2VyIiwibG9jYWwiLCJzYXZlIiwic2VyaWFsaXplVXNlciIsImlkIiwiZGVzZXJpYWxpemVVc2VyIiwiZmluZEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxJQUFNQSxnQkFBZ0Isd0JBQWNDLFFBQXBDOztBQUVBLG1CQUFTQyxHQUFULENBQWEsSUFBSUYsYUFBSixDQUFrQixVQUFDRyxRQUFELEVBQVdDLFFBQVgsRUFBcUJDLElBQXJCLEVBQTZCO0FBQzFELGlCQUFLQyxPQUFMLENBQWEsRUFBQyxrQkFBa0JILFFBQW5CLEVBQWIsRUFBMkMsVUFBQ0ksR0FBRCxFQUFNQyxJQUFOLEVBQWM7QUFDdkQsUUFBSUQsR0FBSixFQUFTLE9BQU9GLEtBQUtFLEdBQUwsQ0FBUDs7QUFHVCxRQUFHLENBQUNDLElBQUosRUFBVTtBQUNSLGFBQU9ILEtBQUssSUFBTCxFQUFXLEtBQVgsRUFBa0IsRUFBQ0ksU0FBUyxnQkFBVixFQUFsQixDQUFQO0FBQ0Q7O0FBRUQsUUFBR0QsS0FBS0UsZ0JBQUwsQ0FBc0JOLFFBQXRCLEVBQWdDTyxLQUFuQyxFQUF5QztBQUN2QyxhQUFPTixLQUFLLElBQUwsRUFBVyxLQUFYLEVBQWtCLEVBQUNJLFNBQVMsZ0JBQVYsRUFBbEIsQ0FBUDtBQUNEOztBQUVELFdBQU9KLEtBQU0sSUFBTixFQUFZRyxJQUFaLENBQVA7QUFDRCxHQWJEO0FBY0QsQ0FmWSxDQUFiOztBQWlCQSxtQkFBU04sR0FBVCxDQUFhLGNBQWIsRUFBNkIsNEJBQWtCLFVBQUNDLFFBQUQsRUFBV0MsUUFBWCxFQUFxQkMsSUFBckIsRUFBNkI7O0FBRXhFLGlCQUFLQyxPQUFMLENBQWEsRUFBQyxrQkFBa0JILFFBQW5CLEVBQWIsRUFBMkMsVUFBQ0ksR0FBRCxFQUFNQyxJQUFOLEVBQWM7O0FBRXZELFFBQUlELEdBQUosRUFBUyxPQUFPRixLQUFLRSxHQUFMLENBQVA7O0FBRVQsUUFBSUMsSUFBSixFQUFVLE9BQU9ILEtBQUssSUFBTCxFQUFXLEtBQVgsRUFBa0IsRUFBQ0ksU0FBUyx5QkFBVixFQUFsQixDQUFQOztBQUVWLFFBQUlHLFVBQVUsbUJBQVM7QUFDckJDLGFBQU87QUFDTFYsMEJBREs7QUFFTEM7QUFGSztBQURjLEtBQVQsQ0FBZDs7QUFPQVEsWUFBUUUsSUFBUixDQUFhLFVBQUNQLEdBQUQsRUFBTUssT0FBTixFQUFpQjtBQUM1QixVQUFJTCxHQUFKLEVBQVMsT0FBT0YsS0FBS0UsR0FBTCxDQUFQO0FBQ1QsYUFBT0YsS0FBSyxJQUFMLEVBQVdPLE9BQVgsQ0FBUDtBQUNELEtBSEQ7QUFJRCxHQWpCRDtBQWtCRCxDQXBCMEIsQ0FBN0I7O0FBc0JBLG1CQUFTRyxhQUFULENBQXVCLFVBQUNQLElBQUQsRUFBT0gsSUFBUCxFQUFlO0FBQ3BDQSxPQUFLLElBQUwsRUFBV0csS0FBS1EsRUFBaEI7QUFDRCxDQUZEOztBQUlBLG1CQUFTQyxlQUFULENBQXlCLFVBQUNELEVBQUQsRUFBS1gsSUFBTCxFQUFhO0FBQ3BDLGlCQUFLYSxRQUFMLENBQWNGLEVBQWQsRUFBa0IsVUFBU1QsR0FBVCxFQUFjQyxJQUFkLEVBQW9CO0FBQ3BDSCxTQUFLRSxHQUFMLEVBQVVDLElBQVY7QUFDRCxHQUZEO0FBR0QsQ0FKRCIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCBMb2NhbFN0cmF0ZWd5IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWdzL21haW4nO1xyXG5jb25zdCBsb2NhbFN0cmF0ZWd5ID0gTG9jYWxTdHJhdGVneS5TdHJhdGVneTtcclxuXHJcbnBhc3Nwb3J0LnVzZShuZXcgbG9jYWxTdHJhdGVneSgodXNlcm5hbWUsIHBhc3N3b3JkLCBkb25lKT0+IHtcclxuICBVc2VyLmZpbmRPbmUoeydsb2NhbC51c2VybmFtZSc6IHVzZXJuYW1lfSwgKGVyciwgdXNlcik9PiB7XHJcbiAgICBpZiAoZXJyKSByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGlmKCF1c2VyKSB7XHJcbiAgICAgIHJldHVybiBkb25lKG51bGwsIGZhbHNlLCB7bWVzc2FnZTogJ3dyb25nIHVzZXJuYW1lJ30pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZih1c2VyLnZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLmVycm9yKXtcclxuICAgICAgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UsIHttZXNzYWdlOiAnd3JvbmcgcGFzc3dvcmQnfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBkb25lIChudWxsLCB1c2VyKTtcclxuICB9KTtcclxufSkpO1xyXG5cclxucGFzc3BvcnQudXNlKCdsb2NhbC1zaWdudXAnLCBuZXcgTG9jYWxTdHJhdGVneSgodXNlcm5hbWUsIHBhc3N3b3JkLCBkb25lKT0+IHtcclxuICAgIFxyXG4gICAgVXNlci5maW5kT25lKHsnbG9jYWwudXNlcm5hbWUnOiB1c2VybmFtZX0sIChlcnIsIHVzZXIpPT4ge1xyXG4gICAgICBcclxuICAgICAgaWYgKGVycikgcmV0dXJuIGRvbmUoZXJyKTtcclxuICAgICAgXHJcbiAgICAgIGlmICh1c2VyKSByZXR1cm4gZG9uZShudWxsLCBmYWxzZSwge21lc3NhZ2U6ICd1c2VybmFtZSBhbHJlYWR5IGluIHVzZSd9KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBuZXdVc2VyID0gbmV3IFVzZXIoe1xyXG4gICAgICAgIGxvY2FsOiB7XHJcbiAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgIHBhc3N3b3JkXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIG5ld1VzZXIuc2F2ZSgoZXJyLCBuZXdVc2VyKT0+IHtcclxuICAgICAgICBpZiAoZXJyKSByZXR1cm4gZG9uZShlcnIpO1xyXG4gICAgICAgIHJldHVybiBkb25lKG51bGwsIG5ld1VzZXIpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KSlcclxuXHJcbnBhc3Nwb3J0LnNlcmlhbGl6ZVVzZXIoKHVzZXIsIGRvbmUpPT4ge1xyXG4gIGRvbmUobnVsbCwgdXNlci5pZCk7XHJcbn0pO1xyXG5cclxucGFzc3BvcnQuZGVzZXJpYWxpemVVc2VyKChpZCwgZG9uZSk9PiB7XHJcbiAgVXNlci5maW5kQnlJZChpZCwgZnVuY3Rpb24oZXJyLCB1c2VyKSB7XHJcbiAgICBkb25lKGVyciwgdXNlcik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFzc3BvcnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9wYXNzcG9ydC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _passport = __webpack_require__(4);\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _express = __webpack_require__(3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _User = __webpack_require__(2);\n\nvar _User2 = _interopRequireDefault(_User);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = _express2.default.Router();\n\nrouter.post('/login', _passport2.default.authenticate('local'), function (req, res) {\n  if (!req.user) {\n    res.status(401);\n    res.end();\n  }\n  var user = {\n    id: req.user._id,\n    username: req.user.local.username\n  };\n  res.json({ user: user });\n  res.end();\n});\n\nrouter.post('/signup', _passport2.default.authenticate('local-signup'), function (req, res) {\n  var user = {\n    id: req.user._id,\n    username: req.user.local.username\n  };\n  res.json({ user: user });\n  res.end();\n});\n\nrouter.get('/logout', function (req, res) {\n  req.logout();\n  res.end();\n});\n\nrouter.post('/check_username/', function (req, res) {\n  _User2.default.findOne({ 'local.username': req.body.username }, function (err, doc) {\n    if (doc) {\n      res.send({ valid: false });\n    } else {\n      res.send({ valid: true });\n    }\n    res.end();\n  });\n});\n\nexports.default = router;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3JvdXRlcnMvdXNlci5qcz83ZjA5Il0sIm5hbWVzIjpbInJvdXRlciIsIlJvdXRlciIsInBvc3QiLCJhdXRoZW50aWNhdGUiLCJyZXEiLCJyZXMiLCJ1c2VyIiwic3RhdHVzIiwiZW5kIiwiaWQiLCJfaWQiLCJ1c2VybmFtZSIsImxvY2FsIiwianNvbiIsImdldCIsImxvZ291dCIsImZpbmRPbmUiLCJib2R5IiwiZXJyIiwiZG9jIiwic2VuZCIsInZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsa0JBQVFDLE1BQVIsRUFBZjs7QUFFQUQsT0FBT0UsSUFBUCxDQUFZLFFBQVosRUFBc0IsbUJBQVNDLFlBQVQsQ0FBc0IsT0FBdEIsQ0FBdEIsRUFBc0QsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDakUsTUFBRyxDQUFDRCxJQUFJRSxJQUFSLEVBQWM7QUFDWkQsUUFBSUUsTUFBSixDQUFXLEdBQVg7QUFDQUYsUUFBSUcsR0FBSjtBQUNEO0FBQ0QsTUFBSUYsT0FBTztBQUNURyxRQUFJTCxJQUFJRSxJQUFKLENBQVNJLEdBREo7QUFFVEMsY0FBVVAsSUFBSUUsSUFBSixDQUFTTSxLQUFULENBQWVEO0FBRmhCLEdBQVg7QUFJQU4sTUFBSVEsSUFBSixDQUFTLEVBQUNQLFVBQUQsRUFBVDtBQUNBRCxNQUFJRyxHQUFKO0FBQ0QsQ0FYRDs7QUFhQVIsT0FBT0UsSUFBUCxDQUFZLFNBQVosRUFBdUIsbUJBQVNDLFlBQVQsQ0FBc0IsY0FBdEIsQ0FBdkIsRUFBOEQsVUFBQ0MsR0FBRCxFQUFLQyxHQUFMLEVBQVk7QUFDeEUsTUFBSUMsT0FBTztBQUNURyxRQUFJTCxJQUFJRSxJQUFKLENBQVNJLEdBREo7QUFFVEMsY0FBVVAsSUFBSUUsSUFBSixDQUFTTSxLQUFULENBQWVEO0FBRmhCLEdBQVg7QUFJQU4sTUFBSVEsSUFBSixDQUFTLEVBQUNQLFVBQUQsRUFBVDtBQUNBRCxNQUFJRyxHQUFKO0FBQ0QsQ0FQRDs7QUFTQVIsT0FBT2MsR0FBUCxDQUFXLFNBQVgsRUFBc0IsVUFBQ1YsR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDakNELE1BQUlXLE1BQUo7QUFDQVYsTUFBSUcsR0FBSjtBQUNELENBSEQ7O0FBS0FSLE9BQU9FLElBQVAsQ0FBWSxrQkFBWixFQUFnQyxVQUFDRSxHQUFELEVBQU1DLEdBQU4sRUFBYTtBQUMzQyxpQkFBS1csT0FBTCxDQUFhLEVBQUMsa0JBQWtCWixJQUFJYSxJQUFKLENBQVNOLFFBQTVCLEVBQWIsRUFBb0QsVUFBQ08sR0FBRCxFQUFNQyxHQUFOLEVBQWE7QUFDL0QsUUFBSUEsR0FBSixFQUFRO0FBQ05kLFVBQUllLElBQUosQ0FBUyxFQUFDQyxPQUFPLEtBQVIsRUFBVDtBQUNELEtBRkQsTUFFTztBQUNMaEIsVUFBSWUsSUFBSixDQUFTLEVBQUNDLE9BQU8sSUFBUixFQUFUO0FBQ0Q7QUFDRGhCLFFBQUlHLEdBQUo7QUFDRCxHQVBEO0FBUUQsQ0FURDs7a0JBV2VSLE0iLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9tb2RlbHMvVXNlcic7XHJcblxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy9sb2dpbicsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwnKSwgKHJlcSwgcmVzKT0+IHtcclxuICBpZighcmVxLnVzZXIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKTtcclxuICAgIHJlcy5lbmQoKTtcclxuICB9XHJcbiAgbGV0IHVzZXIgPSB7XHJcbiAgICBpZDogcmVxLnVzZXIuX2lkLFxyXG4gICAgdXNlcm5hbWU6IHJlcS51c2VyLmxvY2FsLnVzZXJuYW1lXHJcbiAgfTtcclxuICByZXMuanNvbih7dXNlcn0pO1xyXG4gIHJlcy5lbmQoKTtcclxufSk7XHJcblxyXG5yb3V0ZXIucG9zdCgnL3NpZ251cCcsIHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZSgnbG9jYWwtc2lnbnVwJyksIChyZXEscmVzKT0+IHtcclxuICBsZXQgdXNlciA9IHtcclxuICAgIGlkOiByZXEudXNlci5faWQsXHJcbiAgICB1c2VybmFtZTogcmVxLnVzZXIubG9jYWwudXNlcm5hbWVcclxuICB9O1xyXG4gIHJlcy5qc29uKHt1c2VyfSk7XHJcbiAgcmVzLmVuZCgpO1xyXG59KTtcclxuXHJcbnJvdXRlci5nZXQoJy9sb2dvdXQnLCAocmVxLCByZXMpPT4ge1xyXG4gIHJlcS5sb2dvdXQoKTtcclxuICByZXMuZW5kKCk7XHJcbn0pO1xyXG5cclxucm91dGVyLnBvc3QoJy9jaGVja191c2VybmFtZS8nLCAocmVxLCByZXMpPT4ge1xyXG4gIFVzZXIuZmluZE9uZSh7J2xvY2FsLnVzZXJuYW1lJzogcmVxLmJvZHkudXNlcm5hbWV9LCAoZXJyLCBkb2MpPT4ge1xyXG4gICAgaWYgKGRvYyl7XHJcbiAgICAgIHJlcy5zZW5kKHt2YWxpZDogZmFsc2V9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcy5zZW5kKHt2YWxpZDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gICAgcmVzLmVuZCgpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3JvdXRlcnMvdXNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHQtbm9kZWpzXCI/MmI1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJjcnlwdC1ub2RlanNcIlxuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzQ2NTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/ODlkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JzXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLXNlc3Npb25cIj82M2JkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzcy1zZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzcy1zZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIj8xOWVmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9yZ2FuXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXNzcG9ydC1sb2NhbFwiP2YzZWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhc3Nwb3J0LWxvY2FsXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-favicon\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCI/M2UwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJzZXJ2ZS1mYXZpY29uXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(1);\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _main = __webpack_require__(0);\n\nvar _main2 = _interopRequireDefault(_main);\n\nvar _app = __webpack_require__(5);\n\nvar _app2 = _interopRequireDefault(_app);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar dev = process.env.NODE_ENV !== 'production';\nvar server = void 0;\nvar isPortTaken = function isPortTaken(port, fn) {\n  var net = __webpack_require__(6);\n  var tester = net.createServer().once('error', function (err) {\n    if (err.code != 'EADDRINUSE') return fn(err);\n    fn(null, true);\n  }).once('listening', function () {\n    tester.once('close', function () {\n      fn(null, false);\n    }).close();\n  }).listen(port);\n};\n\nvar PORT = process.env.PORT || 3007;\nfunction startServer(err, isPortTaken) {\n  if (!(err && isPortTaken)) {\n    server = _app2.default.listen(PORT, function () {\n      console.log('express server started at localhost:' + PORT);\n    });\n  }\n}\n\nif (dev) {\n  isPortTaken(PORT, startServer);\n} else {\n  server = _app2.default.listen(PORT, function () {\n    console.log('express server started at localhost:' + PORT);\n  });\n}\n\nif (!_mongoose2.default.connection.db) _mongoose2.default.connect(_main2.default.DATA_URL);\nconsole.log('connected to db at ' + _main2.default.DATA_URL);\nexports.default = server;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2luZGV4LmpzP2Q5YzIiXSwibmFtZXMiOlsiZGV2IiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwic2VydmVyIiwiaXNQb3J0VGFrZW4iLCJwb3J0IiwiZm4iLCJuZXQiLCJyZXF1aXJlIiwidGVzdGVyIiwiY3JlYXRlU2VydmVyIiwib25jZSIsImVyciIsImNvZGUiLCJjbG9zZSIsImxpc3RlbiIsIlBPUlQiLCJzdGFydFNlcnZlciIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9uIiwiZGIiLCJjb25uZWN0IiwiREFUQV9VUkwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBT0MsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQXRDO0FBQ0EsSUFBSUMsZUFBSjtBQUNBLElBQUlDLGNBQWMsU0FBZEEsV0FBYyxDQUFTQyxJQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDbkMsTUFBSUMsTUFBTSxtQkFBQUMsQ0FBUSxDQUFSLENBQVY7QUFDQSxNQUFJQyxTQUFTRixJQUFJRyxZQUFKLEdBQ1pDLElBRFksQ0FDUCxPQURPLEVBQ0UsVUFBVUMsR0FBVixFQUFlO0FBQzVCLFFBQUlBLElBQUlDLElBQUosSUFBWSxZQUFoQixFQUE4QixPQUFPUCxHQUFHTSxHQUFILENBQVA7QUFDOUJOLE9BQUcsSUFBSCxFQUFTLElBQVQ7QUFDRCxHQUpZLEVBS1pLLElBTFksQ0FLUCxXQUxPLEVBS00sWUFBVztBQUM1QkYsV0FBT0UsSUFBUCxDQUFZLE9BQVosRUFBcUIsWUFBVztBQUFFTCxTQUFHLElBQUgsRUFBUyxLQUFUO0FBQWlCLEtBQW5ELEVBQ0NRLEtBREQ7QUFFRCxHQVJZLEVBU1pDLE1BVFksQ0FTTFYsSUFUSyxDQUFiO0FBVUQsQ0FaRDs7QUFjQSxJQUFNVyxPQUFPaEIsUUFBUUMsR0FBUixDQUFZZSxJQUFaLElBQW9CLElBQWpDO0FBQ0EsU0FBU0MsV0FBVCxDQUFxQkwsR0FBckIsRUFBMEJSLFdBQTFCLEVBQXNDO0FBQ3BDLE1BQUcsRUFBR1EsT0FBT1IsV0FBVixDQUFILEVBQTBCO0FBQ3RCRCxhQUFTLGNBQUlZLE1BQUosQ0FBV0MsSUFBWCxFQUFpQixZQUFLO0FBQy9CRSxjQUFRQyxHQUFSLDBDQUFtREgsSUFBbkQ7QUFDRCxLQUZVLENBQVQ7QUFHSDtBQUNGOztBQUdELElBQUdqQixHQUFILEVBQVE7QUFDTkssY0FBWVksSUFBWixFQUFrQkMsV0FBbEI7QUFDRCxDQUZELE1BRU87QUFDTGQsV0FBUyxjQUFJWSxNQUFKLENBQVdDLElBQVgsRUFBaUIsWUFBSztBQUMzQkUsWUFBUUMsR0FBUiwwQ0FBbURILElBQW5EO0FBQ0gsR0FGUSxDQUFUO0FBR0Q7O0FBRUQsSUFBRyxDQUFDLG1CQUFTSSxVQUFULENBQW9CQyxFQUF4QixFQUNFLG1CQUFTQyxPQUFULENBQWlCLGVBQU9DLFFBQXhCO0FBQ0ZMLFFBQVFDLEdBQVIseUJBQWtDLGVBQU9JLFFBQXpDO2tCQUNlcEIsTSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZ3MvbWFpbic7XHJcbmltcG9ydCBhcHAgZnJvbSAnLi9hcHAnO1xyXG5cclxuY29uc3QgZGV2ID0gKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpO1xyXG5sZXQgc2VydmVyO1xyXG52YXIgaXNQb3J0VGFrZW4gPSBmdW5jdGlvbihwb3J0LCBmbikge1xyXG4gIHZhciBuZXQgPSByZXF1aXJlKCduZXQnKVxyXG4gIHZhciB0ZXN0ZXIgPSBuZXQuY3JlYXRlU2VydmVyKClcclxuICAub25jZSgnZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICBpZiAoZXJyLmNvZGUgIT0gJ0VBRERSSU5VU0UnKSByZXR1cm4gZm4oZXJyKVxyXG4gICAgZm4obnVsbCwgdHJ1ZSlcclxuICB9KVxyXG4gIC5vbmNlKCdsaXN0ZW5pbmcnLCBmdW5jdGlvbigpIHtcclxuICAgIHRlc3Rlci5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uKCkgeyBmbihudWxsLCBmYWxzZSkgfSlcclxuICAgIC5jbG9zZSgpXHJcbiAgfSlcclxuICAubGlzdGVuKHBvcnQpXHJcbn1cclxuXHJcbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDc7XHJcbmZ1bmN0aW9uIHN0YXJ0U2VydmVyKGVyciwgaXNQb3J0VGFrZW4pe1xyXG4gIGlmKCEgKGVyciAmJiBpc1BvcnRUYWtlbikpe1xyXG4gICAgICBzZXJ2ZXIgPSBhcHAubGlzdGVuKFBPUlQsICgpPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgZXhwcmVzcyBzZXJ2ZXIgc3RhcnRlZCBhdCBsb2NhbGhvc3Q6JHtQT1JUfWApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaWYoZGV2KSB7XHJcbiAgaXNQb3J0VGFrZW4oUE9SVCwgc3RhcnRTZXJ2ZXIpO1xyXG59IGVsc2Uge1xyXG4gIHNlcnZlciA9IGFwcC5saXN0ZW4oUE9SVCwgKCk9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBleHByZXNzIHNlcnZlciBzdGFydGVkIGF0IGxvY2FsaG9zdDoke1BPUlR9YCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmlmKCFtb25nb29zZS5jb25uZWN0aW9uLmRiKVxyXG4gIG1vbmdvb3NlLmNvbm5lY3QoY29uZmlnLkRBVEFfVVJMKTtcclxuY29uc29sZS5sb2coYGNvbm5lY3RlZCB0byBkYiBhdCAke2NvbmZpZy5EQVRBX1VSTH1gKVxyXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);