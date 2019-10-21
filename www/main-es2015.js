(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n  <div class=\"calculation\" [innerHTML]=\"temp\"></div>\n  <!-- <div class=\"result\" [innerHTML]=\"hasil\"></div> -->\n  <div class=\"row no-gutters mt-2\">\n    <div class=\"col-8\">\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('1')\">1</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('2')\">2</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('3')\">3</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('4')\">4</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('5')\">5</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('6')\">6</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('7')\">7</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('8')\">8</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('9')\">9</div>\n        <div class=\"col text-center custButton\" (click)=\"addToTemp('0')\">0</div>\n        <div class=\"col-4 text-center custButton\" (click)=\"addToTemp('.')\">.</div>\n      </div>\n      <div class=\"row no-gutters\">\n        <div class=\"col-4 text-center clear\" (click)=\"onclear()\">Clear</div>\n        <div class=\"col-8 text-center custButton\" (click)=\"onresult()\">=</div>\n      </div>  \n    </div>\n    <div class=\"col-4\">\n      <div class=\"col-12 text-center custButton\" (click)=\"addToTemp('+')\">+</div>\n      <div class=\"col-12 text-center custButton\" (click)=\"addToTemp('-')\">-</div>\n      <div class=\"col-12 text-center custButton\" (click)=\"addToTemp('/')\">/</div>\n      <div class=\"col-12 text-center custButton\" (click)=\"addToTemp('*')\">*</div> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calculation {\n  height: 100px;\n  border-top: solid 1px grey;\n  border-left: solid 1px grey;\n  border-right: solid 1px grey;\n  border-bottom: solid 1px grey;\n  font-size: 50px;\n  text-align: right;\n  align-content: center;\n  padding: 0.2em;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(228, 238, 143, 0)), to(rgba(230, 213, 66, 0.3)));\n  background-image: linear-gradient(to bottom, rgba(228, 238, 143, 0), rgba(230, 213, 66, 0.3));\n  box-shadow: inset 0 0 0 5px rgba(0, 0, 0, 0.2), 0 0 6px rgba(0, 0, 0, 0.4);\n}\n\n.custButton {\n  border: solid 1px grey;\n  background-color: #3d3c41;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  height: 100px;\n  font-size: 50px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 100px;\n  color: white;\n}\n\n.custButton:hover {\n  background-color: grey;\n  color: white;\n  cursor: pointer;\n}\n\n.clear {\n  border: solid 1px grey;\n  background-color: #dd2424;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  height: 100px;\n  font-size: 30px;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 100px;\n  color: white;\n}\n\n.clear:hover {\n  background-color: #75e79b;\n  color: white;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGthbGt1bGF0b3Ivc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBSUEsNEhBQUE7RUFBQSw2RkFBQTtFQUVBLDBFQUFBO0FDQUY7O0FEcUJBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9GQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNsQkY7O0FEcUJBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9GQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNsQkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsY3VsYXRpb24ge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggZ3JleTtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAuMmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjI4LCAyMzgsIDE0MywgMCksIHJnYmEoMjMwLCAyMTMsIDY2LCAwLjMpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgyMjgsIDIzOCwgMTQzLCAwKSwgcmdiYSgyMzAsIDIxMywgNjYsIDAuMykpO1xuICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLy8gLnJlc3VsdCB7XG4vLyAgIGhlaWdodDogODBweDtcbi8vICAgYm9yZGVyLXRvcDogMDtcbi8vICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCBncmV5O1xuLy8gICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCBncmV5O1xuLy8gICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JleTtcbi8vICAgZm9udC1zaXplOiA0MHB4O1xuLy8gICB0ZXh0LWFsaWduOiByaWdodDtcbi8vICAgcGFkZGluZzogLjJlbTtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMjgsIDIzOCwgMTQzLCAwKSwgcmdiYSgyMzAsIDIxMywgNjYsIDAuMykpO1xuLy8gICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4vLyAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4vLyAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDIyOCwgMjM4LCAxNDMsIDApLCByZ2JhKDIzMCwgMjEzLCA2NiwgMC4zKSk7XG4vLyAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4vLyAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuLy8gfVxuXG4uY3VzdEJ1dHRvbiB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2MSwgNjAsIDY1KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGVhcntcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMzYsIDM2KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbGVhcjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNywgMjMxLCAxNTUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi8vIC5idXR0b24ge1xuLy8gICBkaXNwbGF5OiBpbmxpbmU7XG4vLyB9XG5cbi8vIC5idXR0b24gLmJ1dHRvbk51bWJlciB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGZsZXgtd3JhcDogd3JhcDtcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyB9XG4vLyAuYnV0dG9uIC5idXR0b25OdW1iZXIgZGl2IHtcbi8vICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbi8vICAgbWFyZ2luOiAyMHB4O1xuLy8gICB3aWR0aDogMTAwcHg7XG5cbi8vIH1cblxuLy8gLmJ1dHRvbiAuYnV0dG9uT3BlcmF0b3Ige1xuLy8gICB3aWR0aDogO1xuLy8gfSIsIi5jYWxjdWxhdGlvbiB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBncmV5O1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IGdyZXk7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmV5O1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjI4LCAyMzgsIDE0MywgMCksIHJnYmEoMjMwLCAyMTMsIDY2LCAwLjMpKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyOCwgMjM4LCAxNDMsIDApLCByZ2JhKDIzMCwgMjEzLCA2NiwgMC4zKSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uY3VzdEJ1dHRvbiB7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNjNDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xlYXIge1xuICBib3JkZXI6IHNvbGlkIDFweCBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQyNDI0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaW5lLWhlaWdodDogMTAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsZWFyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1ZTc5YjtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.temp = '';
        this.temp2 = '';
    }
    // this.cek = false; 
    addToTemp(val) {
        if (this.temp.substring(0, 1) == '0') {
            this.temp = '';
        }
        this.temp = this.temp + val;
        const copr = ['+', '-', '/', '*'];
        if (copr.indexOf(val) > -1) {
            this.nil1 = parseInt(this.temp);
            this.opr = val;
            this.cek = true;
        }
        if (this.cek == true) {
            if (copr.indexOf(val) > -1) {
                val = '';
                this.temp2 = '';
            }
            this.temp2 = this.temp2 + val;
            this.nil2 = parseInt(this.temp2);
        }
    }
    onclear() {
        this.temp = '0';
        this.temp2 = '';
        this.nil1 = 0;
        this.nil2 = 0;
        this.hasil = 0;
    }
    onresult() {
        console.log(this.opr);
        console.log(this.nil1);
        console.log(this.nil2);
        switch (this.opr) {
            case '+':
                this.hasil = this.nil1 + this.nil2;
                break;
            case '-':
                this.hasil = this.nil1 - this.nil2;
                break;
            case '*':
                this.hasil = this.nil1 * this.nil2;
                break;
            case '/':
                this.hasil = this.nil1 / this.nil2;
                break;
        }
        this.temp = this.hasil.toString();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\kalkulator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map