# Duality

WIP Library with pre-build directives for Angular 2

## Table of contents 
1. [Installation](#installation)
2. [Available Modules](#available-modules)
3. [Modules Description & Usage](#modules-description--usage)
4. [Live Page](#live-page)
4. [License](#license)
5. [Note](#note)

# Installation

To install Duality, run:

```bash
$ npm install ngx-duality --save
```
Import `NgxModule` to your `AppModule` to get access to all functions of this library, or if you prefer you can import the specific module that you need for your project.
(PD: See modules description for more details.)

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import OverStyle module
import { NgxOverStyleModule } from 'duality';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify the module as an import
    NgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Then add the follow css file into your main styles file (should be styles.css), this file it's required for most components.

```scss
 @import url('~../node_modules/ngx-duality/style/ngx-style.css');
```

# Available Modules

I'm planning create more modules with the time.

**List of modules:**

1. [OverStyle](#overstyle)
2. [Grid Layout](#grid)
3. [Wrapper Layout](#wrapper)
4. [Header](#header)
5. [Footer](#footer)
6. [Sidebar](#sidebar)

# Modules Description & Usage

### OverStyle:

Overstyle is a directive that allow you to create multiple styles to different browsers and operating systems.

**Usage:**

Once you install Duality:

```bash
$ npm install ngx-duality
```

go to the `AppModule` of your project and import `NgxOverStyleModule` (if you already imported `NgxModule` you can skip this step):

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import OverStyle module
import { NgxOverStyleModule } from 'duality';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify the module as an import
    NgxOverStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once NgxOverStyleModule is imported, you can use the directive in your Angular application:

```html
<!-- Now add the ngxOverStyle directive in the element that you want to enable the multi styles -->
<h1 ngxOverStyle>
  {{title}}
</h1>
```
Now you can create your styles for differents browsers and OS:
```scss
h1.WINDOWS {
  // WINDOWS STYLES...
  &.CHROME {
    // CHROME STYLES...
  }
  &.FIREFOX {
    // FIREFOX STYLES...
  }
  .
  .
  .
}
```

**OverStyle provide the next classes**

**OS classes:**
* WINDOWS
* LINUX
* MAC
* ANDROID
* IPHONE

**Browser classes:**
* CHROME
* FIREFOX
* OPERA
* SAFARI
* EDGE
* IE

### Grid Layout

Grid layout based on flex-box (You know, the grid of all life based on 12 columns).

**Usage**

Only you need to import the style sass file from ngx-duality to get access to the grid classes:

```scss
  @import url('~../node_modules/ngx-duality/style/ngx-style.css');
```

Live demo soon :tophat:... 

### Wrapper Layout

The wrapper are a couple of classes to maintain everything in his place (required for header and footer).

**Usage**

First import the style css file from ngx-duality:

```scss
 @import url('~../node_modules/ngx-duality/style/ngx-style.css');
```

then add the following template into your `app.component.html` file:

```html 
  <div class="ngx-wrapper">
    <div class="ngx-content ngx-row">
    
      <!-- All your stuffs here! -->
      
    </div>
</div>
<!-- PD: "ngx-row" It's optional (for more information see "Grid Layout" section) -->
```

### Header:

This it's a pre-build css class, add it into your project and make everything easier.

**Usage**

Once imported the style css file from ngx-duality:

```scss
 @import url('~../node_modules/ngx-duality/style/ngx-style.css');
```
go to `app.component.html` file and add the following template:

```html
  <div class="ngx-wrapper">

    <!-- Page wrapper -->

    <header class="ngx-header">
    
      <!-- Header content here! -->
      
    </header>
    <div class="ngx-content ngx-row">
      <!-- All your stuffs here! -->
    </div>
</div>
```

The header comes with the next default styles (You can add/overwrite the styles in your own .css file).

```scss
  .ngx-header {
    height: 70px;
    overflow: hidden; 
  }
```

### Footer:

This it's a pre-build css class, add it into your project and make everything easier (yep it's a copy paste).

**Usage**

Once imported the css file from ngx-duality:

```scss
 @import url('~../node_modules/ngx-duality/style/ngx-style.css');
```
go to `app.component.html` file and add the following template:

```html
  <div class="ngx-wrapper">
    <header class="ngx-header">

      <!-- Header content here! -->

    </header>
    <div class="ngx-content ngx-row">

      <!-- All your stuffs here! -->

    </div>
    <footer class="ngx-footer">
    
      <!-- Footer content here! -->
      
    </footer>
</div>
<!-- PD: "ngx-row" It's optional (for more information see "Grid Layout" section) -->
```

The footer comes with the next default styles (You can add/overwrite the styles in your own .css file).

```scss
  .ngx-footer {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    height: 70px;
    overflow: hidden; 
  }
```

### Sidebar:

The sidebar it's a pre-build component, if you wanna use it in your proyect follow the next steps:

**Usage**

Once you install Duality:

```bash
$ npm install ngx-duality
```

go to the `AppModule` of your proyect and import `NgxSidebarModule` (if you already imported `NgxModule` you can skip this step):

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Sidebar module
import { NgxSidebarModule } from 'ngx-duality';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the module as an import
    NgxSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Once you import the module go to the `app.component.html` file and add the following template:

```html
  <div class="ngx-wrapper">
   <ngx-sidebar [options]="sidebarOptions" (isMobile)="handleMobile($event)" #toggle>
   
     <!-- Sidebar content here! -->
     
  </ngx-sidebar>
    <header class="ngx-header">
      <!-- Header content here! -->
    </header>
    <div class="ngx-content ngx-row">
      <!-- All your stuffs here! -->
    </div>
    <footer class="ngx-footer">
      <!-- Footer content here! -->
    </footer>
</div>
```
If you notice the component comes with some attributes, in the next table will be explained:

| Atributte | Type | Descritpion |
|-----------|------|-------------|
| [options] | @Input Object | Add/Overwrite the settings of the sidebar |
| (isMobile) | @Output EventEmitter | Emit true if the sidebar it's on mobile mode or false if it's on desktop mode (mobile <= 1100px, desktop >= 1100px) |
| #toggle | Function | Use it to hide/show the sidebar |

**Attributes usage:**

**[options]:**

[options] allows the next values

| Paramter | Type | Default | Description |
|----------|------|---------|-------------|
| animated | boolean| true | Enable slice animation on sidebar |
| backdrop | string | rgba(0, 0, 0, 0.5) | Set the backdrop color fo the sidebar |
| place | string | left | Set the position fo the sidebar |
| width | string | 300px | Set the sidebar width |
| background | string | whitesmoke | Set the sidebar background |
| top | string | 0 | Set the 'top' position of the sidebar |  

If you use the sidebar with the header content and footer classes you should wrap it to avoid overlapping:
```scss
  .ngx-header {
    /* If options.place: left */
    margin-left: 300px;
  }
  .ng-content {
    /* If options.place: left */
    margin-left: 300px;
  }
  .ngx-footer {
    /* If options.place: left */
    margin-left: 300px;
  }
```
The main style file of the library has a media query so don't worry about the margin when the sidebar enter on mobile mode.

**#toggle: & (isMobile)**

To enable the toggle functionality go to your `app.component.ts` and add the following template:

```typescript
// Import ViewChild
import { Component, OnInit, ViewChild } from '@angular/core';
// Import NgxSidebarComponent to your component 
import { NgxSidebarComponent } from 'ngx-duality';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Use ViewChild to match Sidebar Component
  @ViewChild('toggle') public toggle: NgxSidebarComponent;
  // User sidebar options... (optional)
  public sidebarOptions: any = {
      background: 'orange',
      top: '70px',
  };
  
  title = 'app';

  ngOnInit(): void {
  }

  // Triggered when sidebar component emit
  handleMobile(event: boolean) {
    // PD: If you wanna change the options on mobile or desktop mode you need to re-instance the 'options' object to triggers trigger the changes on the sidebar component
    if (event) {
      this.sidebarOptions = Object.assign({}, this.sidebarOptions, { top: '0' });
    } else {
      this.sidebarOptions = Object.assign({}, this.sidebarOptions, { top: '70px' });
    }

  }
  // Hide/Show sidebar
  handleToggle(): void {
    // Call the 'onToggle()' method from Sidebar component
    this.toggle.onToggle();
  }
}
```

## Live Page

Live page soon :tophat:... 

## License

MIT © [Daniel Torres](mailto:danny908t@gmail.com)

## Note

The library it's updated very offen, so don't forget to check new functionality in the future.
