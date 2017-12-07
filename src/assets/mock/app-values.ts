import { Dashboard, Sidebar } from '../types/app';

export const sidebar: Array<Sidebar> = [
  {
    menu: 'COMPONENTS',
    sub_menu: ['Sidebar'],
    link: [''],
    icon: 'fa fa-th-large',
    // sub_icon: ['fa-bars']
  },
  {
    menu: 'DIRECTIVES',
    sub_menu: ['OverStyle'],
    link: [''],
    icon: 'fa fa-sitemap'
  },
  {
    menu: 'STYLES',
    sub_menu: ['Grid Layout', 'Wrapper Layout', 'Header', 'Footer'],
    link: [''],
    icon: 'fa fa-paint-brush'
  }
];

export const dashboard_page: Dashboard = {
  title: `What's Duality?`,
  description: `
    ngx-duality it's a library for Angular 4+, this library contains a bundle of features
    most commonly used for web developers.
    The purpose of Duality it's to reduce development time, making the web content creation easier and faster.`
};


