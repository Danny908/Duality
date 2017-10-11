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

go to the `AppModule` of your project and import `NgxOverStyleModule` (if you already import `NgxModule` you can skip this step):

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
<!-- Now add the OverStyle directive in the element that you want to enable the multi styles -->
<h1 overStyle>
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

The header comes with the next default styles (You can add your styles in your own .css file).

```scss
  .ngx-header {
    height: 70px;
    overflow: hidden; 
  }
```

### Footer:

This it's a pre-build css lass, add it into your project and make everything easier (yep it's a copy paste).

**Usage**

Once imported the style css file from ngx-duality:

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

The footer comes with the next default styles (You can add your styles in your own .css file).

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

go to the `AppModule` of your proyect and import `NgxSidebarModule`:

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
Once you import the module go to the `app.component.html` file and add the follow template:

```html
  <div class="ngx-wrapper">
   <ngx-sidebar (isMobile)="handleMobile($event)" [toggle]="status.isopen">
   
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
| [toggle] | boolean | Open or hide the modal |
| (isMobile) | event | Emit true if the sidebar it's on mobile mode or false if it's on desktop mode |

If you use the sidebar with the header and footer you should wrap the header and footer elements:
```scss
  .ngx-header {
    margin: 0 0 0 300px;
  }
  .ng-content {
    margin: 0 0 0 300px;
  }
  .ngx-footer {
    margin: 0 0 0 300px;
  }
```

The main style file of the library has a media query son don't worry about the margin when the sidebar enter on mobile mode.


## Live Page

Live page soon :tophat:... 

## License

MIT © [Daniel Torres](mailto:danny908t@gmail.com)

## Note

The library it's updated very offen, so don't forget to check new functionality in the future.
