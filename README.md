# webgl-mock-threejs

[![Dependency Status](https://david-dm.org/kbirk/webgl-mock.svg)](https://david-dm.org/kbirk/webgl-mock)

A simple implementation-less interface for testing code _outside_ of WebGL **& three.js**, forked from [webgl-mock](https://github.com/kbirk/webgl-mock)

## Motivation

Since ```THREE.WebGLRenderer``` asks ```WebGLContext ``` much detail of graphic capability of device, original ```webgl-mock``` could not be used to test apps with three.js, causing NPE stuffs. This package simply has additional mock-answers for ```THREE.WebGLRenderer```, allowing it to run in node.

It also includes mock for ```navigator``` object since ```THREE.WebGLRenderer``` does not run without it.

## Installation

Requires [node](http://nodejs.org/).

```bash
npm i -D webgl-mock-threejs
```

## Usage

Instantiate ```HTMLCanvasElement``` and pass it to your app which uses ```THREE.WebGLRenderer```:

```javascript
require('webgl-mock-threejs');

const canvas = new HTMLCanvasElement( 640, 480 );

describe("App test", () => {
  it("Can initialize successfully", async () => {
    let app = new YourApp(canvas);
    await app.init();
  })
})
```

Your app would be like:

```javascript
class YourApp {

  constructor( canvas ) {

    this.renderer = null;
    this.canvas = canvas;

  }

  async init() {

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });

    /* your code continues.. */

  }

}
```

## Warning

Importing this module results to inject ```global.nagivator``` mock to global namespace of Node, if no another exists.
If you get some problems around ```navigator```, this module may have caused it.

## canvas arg for app constructor/init function? I don't want it!
I'm planning [jsdom](https://github.com/jsdom/jsdom) integration which enables to add  ```HTMLCanvasElement``` into DOM elements.
