import { Directive, ElementRef, OnInit } from '@angular/core';

import { Window, Document } from './types';

@Directive({
    selector: '[ngx-over-style]'
})
export class NgxOverStyleDirective implements OnInit {
    public OS: string;
    public BROWSER: string;
    private _window: Window = window;
    private _document: Document = document;

    constructor(private el: ElementRef) {}
    public ngOnInit(): void {
        // GET MACHINE OS...
        if (navigator.userAgent.includes('Macintosh')) {
            this.OS = 'MAC';
        }
        if (navigator.userAgent.includes('Windows')) {
            this.OS = 'WINDOWS';
        }
        if (navigator.userAgent.includes('Linux') && !navigator.userAgent.includes('Android')) {
            this.OS = 'LINUX';
        }
        if (navigator.userAgent.includes('Linux') && navigator.userAgent.includes('Android')) {
            this.OS = 'ANDROID';
        }
        if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
            this.OS = 'IPHONE';
        }
        // GET MACHINE BROWSER...
        if (this._window['InstallTrigger']) {
            this.BROWSER = 'FIREFOX';
        }
        if (this._window['opr']) {
            this.BROWSER = 'OPERA';
        }
        if (navigator.userAgent.search('Edge') > 0) {
            this.BROWSER = 'EDGE';
        }
        if (
            this._window['chrome'] &&
            !this._window['opr'] &&
            navigator.userAgent.search('Edge') < 0 &&
            navigator.vendor.includes('Google')
        ) {
            this.BROWSER = 'CHROME';
        }
        if (this._document['documentMode']) {
            this.BROWSER = 'IE';
        }
        if (navigator.userAgent.search('Chrome') < 0 &&
            navigator.userAgent.search('Safari') > 0 &&
            navigator.vendor.includes('Apple')) {
            this.BROWSER = 'SAFARI';
        }
        // SET CLASSES TO DOM...
        this.setClasses();
    }

    public setClasses(): void {
        this.el.nativeElement.classList.add(this.OS);
        this.el.nativeElement.classList.add(this.BROWSER);
    }
}
