import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private status = {
    ismobile: false,
    isopen: false
  };
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  handleMobile(mobile: boolean): void {
    this.status.ismobile = mobile;
    this.cdr.detectChanges();
  }
}
