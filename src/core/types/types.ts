export interface Window {
  [key: string]: any;
}
export interface Document {
  [key: string]: any;
}
export interface SideBar {
  animated: boolean;
  draggable: boolean;
  backdrop: string;
  place: string;
  [key: string]: any;
}

export interface Status {
  isOpen: boolean;
  isMobile: boolean;
  screenSize: number;
  prevMobile: any;
}
