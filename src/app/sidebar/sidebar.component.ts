import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public listItems = {
    items: [{
      title: 'Components',
      icon: 'fas fa-cube',
      link: '',
      disabled: false,
      tabActive: false,
      subItems: ['Sidebar','Header', 'Accordion', 'List']
    },
    {
      title: 'Directives',
      icon: 'fas fa-code',
      link: '',
      disabled: false,
      tabActive: false,
      subItems: ['OverStyle']
    },
    {
      title: 'Styles',
      icon: 'fas fa-paint-brush',
      link: '',
      tabActive: false,
      disabled: false,
      subItems: ['Grid']
    }],
    type: '1',
    oneAtTime: true,
  }
  constructor() { }

  ngOnInit() {
  }
  indexTab(index: number) {
    this.listItems.items[index].tabActive = !this.listItems.items[index].tabActive;
  }

}
