import { Component, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { Fade, Translate } from '@ngx-duality/animations';
import { BrowserDetectService } from '@ngx-duality/browser-detect';

@Component({
  selector: 'duality-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [ Fade, Translate ]
})
export class SidebarComponent implements AfterContentInit {
  @Input() animated = true;
  @Input() timing = '200ms ease-in-out';
  @Input() backdropColor = 'rgba(0, 0, 0, 0.7)';
  @Input() screenPosition = 'left';
  @Output() status: EventEmitter<{open: boolean, mobile: boolean}>  = new EventEmitter();
  open = true;
  mobile = false;
  fadeAnimation = 'active';
  translateAnimation = 'inactive';
  position: {};
  animation: {x: string | number, y: string | number} =  {x: 0, y: 0};
  constructor(
    private browserDetectService: BrowserDetectService
  ) {
    this.getDevice();
  }

  ngAfterContentInit() {
    this.setScreenPosition();
    this.updateAnimation();
    this.emitStatus();
  }

  toggle() {
    this.open = !this.open;
    this.updateAnimation();
    this.emitStatus();
  }

  emitStatus() {
    const { mobile, open } = this;
    this.status.emit({open, mobile});
  }

  getDevice() {
    const { device } = this.browserDetectService.detect();
    if (device === 'android' || device === 'iphone') {
      this.mobile = true;
      this.open = false;
    }
  }

  setScreenPosition() {
    switch (this.screenPosition) {
      case 'left':
        this.animation = {
          x: '-100%',
          y: 0
        };
        this.position = {
          top: 0,
          left: 0,
          height: '100%'
        };
      break;
      case 'right':
        this.animation = {
          x: '100%',
          y: 0
        };
        this.position = {
          top: 0,
          right: 0,
          height: '100%'
        };
      break;
      case 'top':
        this.animation = {
          x: 0,
          y: '-100%'
        };
        this.position = {
          top: 0,
          left: 0,
          right: 0,
          width: '100%'
        };
      break;
      case 'bottom':
        this.animation = {
          x: 0,
          y: '100%'
        };
        this.position = {
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%'
        };
      break;
    }
  }

  updateAnimation() {
    this.translateAnimation = this.open ? 'inactive' : 'active';
    this.fadeAnimation = this.open ? 'active' : 'inactive';
  }

}
