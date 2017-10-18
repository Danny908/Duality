import { Component, OnInit } from '@angular/core';

import { TickTockService } from '../../services';

@Component({
  selector: 'tick-tock',
  styleUrls: ['./tick-tock.component.scss'],
  templateUrl: './tick-tock.component.html',
})
export class TickTockComponent implements OnInit {
  // Current time string.
  public welcome: string;

  /**
   * Component constructor with injected dependencies.
   * @param tickTockService
   */
  // public constructor() {}

  /**
   * Implements onInit event handler.
   */
  public ngOnInit(): void {
    this.welcome = 'Welcome to my lib';
  }
}
