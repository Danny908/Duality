import { Sidebar, MainPage } from '../types/app';

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

export const main_page: MainPage = {
  slogan: 'The Coolest UI Lib for Angular',
  title: `What's Duality`,
  description: `
    Duality it's a library for Angular, this library contains a bundle of features
    most common used on web pages.<br>
    The purpose of Duality it's reduce development time, making the web content creation easier and faster.`
};


