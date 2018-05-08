import { Component, OnInit, Input, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { AnimationBuilder, animate, style } from '@angular/animations';

import { Fade } from '../../animations/fade';

@Component({
  selector: 'dl-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class DlCarouselComponent implements OnInit {
  @ViewChildren('gallery') gallery: QueryList<any>;
  @Input() carousel: Array<Object>;
  @Input() showCaption: boolean = true;
  @Input() captionPosition: string = 'bottom';
  @Input() frameWidth: string = '100%';
  @Input() frameHeight: string = '300px';
  @Input() imageSize: string = 'cover';
  @Input() animation = Fade;
  @Input() state: string = 'fadeIn';
  @Input() timing: number | string = '300ms ease-in-out';
  public active  = 0;
  public currentState = 0;
  public lastIndex = 0;
  constructor(
    private animationBuilder: AnimationBuilder
  ) { }

  ngOnInit() {
  }
  setCapPosition(): Object {
    return { [this.captionPosition]: 0 };
  }

  carouselControl(action?: string, index?: number): void {
    if (index) {
      this.active = index;
    } else {
      switch(action) {
        case 'next':
          this.active++;
          break;
        case 'back':
          this.active--;
          break;
      }
      if (this.active < 0) {
        this.active = this.carousel.length - 1;
      }
      else if (this.active > this.carousel.length - 1) {
        this.active = 0;
      }
    }
    this.doAnimation(this.active);
  }
  doAnimation(index: number): void {
    if(index !== this.lastIndex) {
      this.buildAnimation();
      this.lastIndex = index;
    }
  }

  buildAnimation() {
    const myAnimation = this.animationBuilder.build(
      Fade[this.state](this.timing)
    );
    const player = myAnimation.create(this.gallery['_results'][this.active].nativeElement);
    player.play();
  }

}
