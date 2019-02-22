import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserDetectService {
  getDevice(): string {
    const { userAgent } = navigator;

    let os: string;

    if (userAgent.includes('Macintosh')) {
      os = 'mac';
    }
    if (userAgent.includes('Windows')) {
      os = 'windows';
    }
    if (userAgent.includes('Linux') && !userAgent.includes('Android')) {
      os = 'linux';
    }
    if (userAgent.includes('Linux') && userAgent.includes('Android')) {
      os = 'android';
    }
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
      os = 'iphone';
    }

    return os ? os : 'unknown os';
  }

  getBrowser(): string {
    const { userAgent } = navigator;
    const { vendor } = navigator;

    let browser: string;

    if (window['InstallTrigger']) {
      browser = 'firefox';
    }
    if (window['opr']) {
      browser = 'opera';
    }
    if (userAgent.search('Edge') > 0) {
      browser = 'edge';
    }
    if (window['chrome'] && !window['opr'] &&
        userAgent.search('Edge') < 0 && vendor.includes('Google')) {
          browser = 'chrome';
    }
    if (document['documentMode']) {
      browser = 'ie';
    }
    if (userAgent.search('Chrome') < 0 && userAgent.search('Safari') > 0 && vendor.includes('Apple')) {
      browser = 'safari';
    }

    return browser ? browser : 'unknown browser';
  }

  detect() {
    return {
      device: this.getDevice(),
      browser: this.getBrowser()
    };
  }
}
