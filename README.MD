# Duality

WIP Library with pre-build directives for Angular 2

## Table of contents 
1. [Installation](#installation)
2. [Available Modules](#available-modules)
3. [Modules Description & Usage](#modules-description--usage)

# Installation

To install Duality, run:

```bash
$ npm install duality --save
```

# Available Modules

I'm planning create more modules with the time.

**List of modules:**

1. [OverStyle](#overstyle)

# Modules Description & Usage

### OverStyle:

Overstyle is a directive that allow to create multiple styles to different browsers and operating systems.

**Usage:**

Once you install Duality:

```bash
$ npm install duality
```

go to the `AppModule` of your project and import `DualOverStyleModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import OverStyle module
import { DualOverStyleModule } from 'duality';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the module as an import
    DualOverStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once DualOverStyleModule is imported, you can use the directive in your Angular application:

```xml
<!-- Now add the OverStyle directive in the element that you want to enable the multi styles -->
<h1 dualOverStyle>
  {{title}}
</h1>
```
Now you can create your styles for differents browsers and OS:
```sass
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

**Browser classes:**
* CHROME
* FIREFOX
* OPERA
* SAFARI
* EDGE
* IE

## License

MIT © [Daniel Torres](mailto:danny908t@gmail.com)
