import { Directive, ElementRef, OnInit } from '@angular/core';

import  { Window, Document } from './types';

@Directive({
    selector: '[dualOverStyle]',
    exportAs: 'dual-over-style',
})
export class DualOverStyleDirective implements OnInit {
    private window: Window = window;
    private document: Document = document;
    private OS: string;
    private BROWSER: string;

    constructor(private el: ElementRef) {}
    ngOnInit(): void {
        // GET MACHINE OS...
        if (navigator.userAgent.includes('Macintosh')) {
            this.OS = 'MAC';
        }
        if (navigator.userAgent.includes('Windows')) {
            this.OS = 'WINDOWS';
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
    }

    setClasses(): void {
        this.el.nativeElement.classList.add(this.OS);
        this.el.nativeElement.classList.add(this.BROWSER);
    }
}
