import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() size = 130;
  @Input() text: boolean;
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
  }
}
