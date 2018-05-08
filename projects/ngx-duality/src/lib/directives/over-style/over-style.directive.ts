import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Document, Window } from '../../core/types/types';

@Directive({
    selector: '[dlOverStyle]'
})
export class OverStyleDirective implements OnInit {
    private os: string;
    private browser: string;
    private _window: Window = window;
    private _document: Document = document;

    constructor(private el: ElementRef, private renderer: Renderer2) {}
    ngOnInit() {
        // Get machine os...
        if (navigator.userAgent.includes('Macintosh')) {
            this.os = 'mac';
        }
        if (navigator.userAgent.includes('Windows')) {
            this.os = 'windows';
        }
        if (navigator.userAgent.includes('Linux') && !navigator.userAgent.includes('Android')) {
            this.os = 'linux';
        }
        if (navigator.userAgent.includes('Linux') && navigator.userAgent.includes('Android')) {
            this.os = 'android';
        }
        if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
            this.os = 'iphone';
        }
        // Get machine browser...
        if (this._window['InstallTrigger']) {
            this.browser = 'firefox';
        }
        if (this._window['opr']) {
            this.browser = 'opera';
        }
        if (navigator.userAgent.search('Edge') > 0) {
            this.browser = 'edge';
        }
        if (
            this._window['chrome'] &&
            !this._window['opr'] &&
            navigator.userAgent.search('Edge') < 0 &&
            navigator.vendor.includes('Google')
        ) {
            this.browser = 'chrome';
        }
        if (this._document['documentMode']) {
            this.browser = 'ie';
        }
        if (navigator.userAgent.search('Chrome') < 0 &&
            navigator.userAgent.search('Safari') > 0 &&
            navigator.vendor.includes('Apple')) {
            this.browser = 'safari';
        }
        this.setClasses();
    }
    // Set classes to DOM...
    setClasses(): void {
        this.renderer.addClass(this.el.nativeElement, this.os);
        this.renderer.addClass(this.el.nativeElement, this.browser);
    }
}
