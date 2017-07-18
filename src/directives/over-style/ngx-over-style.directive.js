"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NgxOverStyleDirective = (function () {
    function NgxOverStyleDirective(el) {
        this.el = el;
        this.window = window;
        this.document = document;
    }
    NgxOverStyleDirective.prototype.ngOnInit = function () {
        // GET MACHINE OS...
        if (navigator.userAgent.includes('Macintosh')) {
            this.OS = 'MAC';
        }
        if (navigator.userAgent.includes('Windows')) {
            this.OS = 'WINDOWS';
        }
        if (navigator.userAgent.includes('Linux')) {
            this.OS = 'LINUX';
        }
        // GET MACHINE BROWSER...
        if (this.window.InstallTrigger) {
            this.BROWSER = 'FIREFOX';
        }
        if (this.window.opr) {
            this.BROWSER = 'OPERA';
        }
        if (navigator.userAgent.search('Edge') > 0) {
            this.BROWSER = 'EDGE';
        }
        if (this.window.chrome && !this.window.opr && navigator.userAgent.search('Edge') < 0) {
            this.BROWSER = 'CHROME';
        }
        if (this.document.documentMode) {
            this.BROWSER = 'IE';
        }
        if (navigator.userAgent.search('Chrome') < 0 && navigator.userAgent.search('Safari') > 0) {
            this.BROWSER = 'SAFARI';
        }
        // SET CLASSES TO DOM...
        this.setClasses();
    };
    NgxOverStyleDirective.prototype.setClasses = function () {
        this.el.nativeElement.classList.add(this.OS);
        this.el.nativeElement.classList.add(this.BROWSER);
    };
    return NgxOverStyleDirective;
}());
NgxOverStyleDirective = __decorate([
    core_1.Directive({
        selector: '[overStyle]',
        exportAs: 'ngx-over-style'
    })
], NgxOverStyleDirective);
exports.NgxOverStyleDirective = NgxOverStyleDirective;
