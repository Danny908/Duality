import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  public carousel = [
    {
      title: 'Responsive',
      desc: 'Make fully responsive web-apps.',
      image: 'url(../../../assets/img/responsive.jpg)'
    },
    {
      title: 'Faster',
      desc: 'Reduce development time.',
      image: 'url(../../../assets/img/faster.jpeg)'
    },
    {
      title: 'Easier',
      desc: 'Ready to use and fully documented.',
      image: 'url(../../../assets/img/easier.jpeg)'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
