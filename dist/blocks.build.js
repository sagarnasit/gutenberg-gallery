/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * BLOCK: my-block\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText,\n    MediaUpload = _wp$blocks.MediaUpload; // Import registerBlockType() from wp.blocks\n\nvar Button = wp.components.Button;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-my-block', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Gallery'), // Block title.\n\ticon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('gallery block'), __('photo block'), __('images block')],\n\tattributes: {\n\t\tphotos: {\n\t\t\ttype: 'array'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\t\tvar _attributes$photos = attributes.photos,\n\t\t    photos = _attributes$photos === undefined ? [] : _attributes$photos;\n\t\t// remove photo from photos\n\n\t\tvar removePhoto = function removePhoto(photoToRemove) {\n\t\t\t// filter to remove clicked photo\n\t\t\tvar newPhotos = photos.filter(function (photo) {\n\t\t\t\tif (photo.id != photoToRemove.id) {\n\t\t\t\t\treturn photo;\n\t\t\t\t}\n\t\t\t});\n\t\t\t// save state\n\t\t\tsetAttributes({\n\t\t\t\tphotos: newPhotos\n\t\t\t});\n\t\t};\n\n\t\t// Display Photos\n\t\tvar displayImages = function displayImages(photos) {\n\t\t\treturn photos.map(function (photo) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'imageBox' },\n\t\t\t\t\twp.element.createElement('img', { className: 'photoImage', key: photos.id, src: photo.url }),\n\t\t\t\t\twp.element.createElement('div', { className: 'blurBG' }),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'image-title' },\n\t\t\t\t\t\tphoto.title\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'remove-block', onClick: function onClick() {\n\t\t\t\t\t\t\t\treturn removePhoto(photo);\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t'Remove'\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\tconsole.log(media);setAttributes({ photos: [].concat(_toConsumableArray(photos), _toConsumableArray(media)) });\n\t\t\t\t},\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: photos,\n\t\t\t\tmultiple: true,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\tButton,\n\t\t\t\t\t\t{ onClick: open },\n\t\t\t\t\t\t'Select Photos'\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tdisplayImages(photos)\n\t\t\t),\n\t\t\twp.element.createElement('div', { className: 'clearDiv' })\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\t\tvar photos = attributes.photos;\n\n\t\tvar displayImages = function displayImages(photos) {\n\t\t\treturn photos.map(function (photo) {\n\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'imageBox' },\n\t\t\t\t\twp.element.createElement('img', { className: 'photoImage', key: photos.id, src: photo.url }),\n\t\t\t\t\twp.element.createElement('div', { className: 'blurBG' }),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'image-title' },\n\t\t\t\t\t\tphoto.title\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'remove-block', onClick: function onClick() {\n\t\t\t\t\t\t\t\treturn removePhoto(photo);\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\t'Remove'\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\tdisplayImages(photos)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vKipcbiAqIEJMT0NLOiBteS1ibG9ja1xuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgUmljaFRleHQgPSBfd3AkYmxvY2tzLlJpY2hUZXh0LFxuICAgIE1lZGlhVXBsb2FkID0gX3dwJGJsb2Nrcy5NZWRpYVVwbG9hZDsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIEJ1dHRvbiA9IHdwLmNvbXBvbmVudHMuQnV0dG9uO1xuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLW15LWJsb2NrJywge1xuXHQvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cblx0dGl0bGU6IF9fKCdHYWxsZXJ5JyksIC8vIEJsb2NrIHRpdGxlLlxuXHRpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuXHRjYXRlZ29yeTogJ2xheW91dCcsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuXHRrZXl3b3JkczogW19fKCdnYWxsZXJ5IGJsb2NrJyksIF9fKCdwaG90byBibG9jaycpLCBfXygnaW1hZ2VzIGJsb2NrJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0cGhvdG9zOiB7XG5cdFx0XHR0eXBlOiAnYXJyYXknXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBlZGl0IGZ1bmN0aW9uIGRlc2NyaWJlcyB0aGUgc3RydWN0dXJlIG9mIHlvdXIgYmxvY2sgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGVkaXRvci5cbiAgKiBUaGlzIHJlcHJlc2VudHMgd2hhdCB0aGUgZWRpdG9yIHdpbGwgcmVuZGVyIHdoZW4gdGhlIGJsb2NrIGlzIHVzZWQuXG4gICpcbiAgKiBUaGUgXCJlZGl0XCIgcHJvcGVydHkgbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLlxuICAqXG4gICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvYmxvY2stZWRpdC1zYXZlL1xuICAqL1xuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblx0XHR2YXIgX2F0dHJpYnV0ZXMkcGhvdG9zID0gYXR0cmlidXRlcy5waG90b3MsXG5cdFx0ICAgIHBob3RvcyA9IF9hdHRyaWJ1dGVzJHBob3RvcyA9PT0gdW5kZWZpbmVkID8gW10gOiBfYXR0cmlidXRlcyRwaG90b3M7XG5cdFx0Ly8gcmVtb3ZlIHBob3RvIGZyb20gcGhvdG9zXG5cblx0XHR2YXIgcmVtb3ZlUGhvdG8gPSBmdW5jdGlvbiByZW1vdmVQaG90byhwaG90b1RvUmVtb3ZlKSB7XG5cdFx0XHQvLyBmaWx0ZXIgdG8gcmVtb3ZlIGNsaWNrZWQgcGhvdG9cblx0XHRcdHZhciBuZXdQaG90b3MgPSBwaG90b3MuZmlsdGVyKGZ1bmN0aW9uIChwaG90bykge1xuXHRcdFx0XHRpZiAocGhvdG8uaWQgIT0gcGhvdG9Ub1JlbW92ZS5pZCkge1xuXHRcdFx0XHRcdHJldHVybiBwaG90bztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHQvLyBzYXZlIHN0YXRlXG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0cGhvdG9zOiBuZXdQaG90b3Ncblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyBEaXNwbGF5IFBob3Rvc1xuXHRcdHZhciBkaXNwbGF5SW1hZ2VzID0gZnVuY3Rpb24gZGlzcGxheUltYWdlcyhwaG90b3MpIHtcblx0XHRcdHJldHVybiBwaG90b3MubWFwKGZ1bmN0aW9uIChwaG90bykge1xuXHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnaW1hZ2VCb3gnIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IGNsYXNzTmFtZTogJ3Bob3RvSW1hZ2UnLCBrZXk6IHBob3Rvcy5pZCwgc3JjOiBwaG90by51cmwgfSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ2JsdXJCRycgfSksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2ltYWdlLXRpdGxlJyB9LFxuXHRcdFx0XHRcdFx0cGhvdG8udGl0bGVcblx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdyZW1vdmUtYmxvY2snLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiByZW1vdmVQaG90byhwaG90byk7XG5cdFx0XHRcdFx0XHRcdH0gfSxcblx0XHRcdFx0XHRcdCdSZW1vdmUnXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0b25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cobWVkaWEpO3NldEF0dHJpYnV0ZXMoeyBwaG90b3M6IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocGhvdG9zKSwgX3RvQ29uc3VtYWJsZUFycmF5KG1lZGlhKSkgfSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHR5cGU6ICdpbWFnZScsXG5cdFx0XHRcdHZhbHVlOiBwaG90b3MsXG5cdFx0XHRcdG11bHRpcGxlOiB0cnVlLFxuXHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZjIub3Blbjtcblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdFx0eyBvbkNsaWNrOiBvcGVuIH0sXG5cdFx0XHRcdFx0XHQnU2VsZWN0IFBob3Rvcydcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdGRpc3BsYXlJbWFnZXMocGhvdG9zKVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdjbGVhckRpdicgfSlcblx0XHQpO1xuXHR9LFxuXG5cdC8qKlxuICAqIFRoZSBzYXZlIGZ1bmN0aW9uIGRlZmluZXMgdGhlIHdheSBpbiB3aGljaCB0aGUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGNvbWJpbmVkXG4gICogaW50byB0aGUgZmluYWwgbWFya3VwLCB3aGljaCBpcyB0aGVuIHNlcmlhbGl6ZWQgYnkgR3V0ZW5iZXJnIGludG8gcG9zdF9jb250ZW50LlxuICAqXG4gICogVGhlIFwic2F2ZVwiIHByb3BlcnR5IG11c3QgYmUgc3BlY2lmaWVkIGFuZCBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24uXG4gICpcbiAgKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9ibG9jay1lZGl0LXNhdmUvXG4gICovXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZjMpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYzLmF0dHJpYnV0ZXM7XG5cdFx0dmFyIHBob3RvcyA9IGF0dHJpYnV0ZXMucGhvdG9zO1xuXG5cdFx0dmFyIGRpc3BsYXlJbWFnZXMgPSBmdW5jdGlvbiBkaXNwbGF5SW1hZ2VzKHBob3Rvcykge1xuXHRcdFx0cmV0dXJuIHBob3Rvcy5tYXAoZnVuY3Rpb24gKHBob3RvKSB7XG5cdFx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdpbWFnZUJveCcgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgY2xhc3NOYW1lOiAncGhvdG9JbWFnZScsIGtleTogcGhvdG9zLmlkLCBzcmM6IHBob3RvLnVybCB9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnYmx1ckJHJyB9KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnaW1hZ2UtdGl0bGUnIH0sXG5cdFx0XHRcdFx0XHRwaG90by50aXRsZVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3JlbW92ZS1ibG9jaycsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlbW92ZVBob3RvKHBob3RvKTtcblx0XHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFx0J1JlbW92ZSdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0bnVsbCxcblx0XHRcdGRpc3BsYXlJbWFnZXMocGhvdG9zKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);