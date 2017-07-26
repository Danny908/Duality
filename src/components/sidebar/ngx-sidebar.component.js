"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NgxSidebarComponent = (function () {
    function NgxSidebarComponent(renderer) {
        var _this = this;
        this.renderer = renderer;
        this.toggle = false;
        this.isMobile = new core_1.EventEmitter();
        this.screenSize = this.getScreenSize();
        renderer.listen('window', 'resize', function (size) {
            _this.screenSize = size.target.innerWidth;
            _this.getScreenType(_this.screenSize);
        });
    }
    NgxSidebarComponent.prototype.ngOnInit = function () {
        this.getScreenType(this.screenSize);
    };
    NgxSidebarComponent.prototype.getScreenSize = function () {
        return window.screen.width;
    };
    NgxSidebarComponent.prototype.getScreenType = function (screen_size) {
        if (screen_size <= 1100) {
            this.isMobile.emit(true);
        }
        else {
            this.isMobile.emit(false);
        }
    };
    return NgxSidebarComponent;
}());
__decorate([
    core_1.Input()
], NgxSidebarComponent.prototype, "toggle");
__decorate([
    core_1.Output()
], NgxSidebarComponent.prototype, "isMobile");
NgxSidebarComponent = __decorate([
    core_1.Component({
        selector: 'ngx-sidebar',
        templateUrl: 'ngx-sidebar.component.html',
        styleUrls: ['ngx-sidebar.component.scss']
    })
], NgxSidebarComponent);
exports.NgxSidebarComponent = NgxSidebarComponent;
