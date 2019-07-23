(function () {

    'use strict';

    var CanvasRenderingContext2D = require('./CanvasRenderingContext2D');
    var WebGLRenderingContext = require('./WebGLRenderingContext');

    function HTMLCanvasElement( width, height ) {
        this.width = width !== undefined ? width : 100;
        this.height = height !== undefined ? height : 100;
        this.style = { width: this.width, height: this.height };
    }

    HTMLCanvasElement.prototype.getContext = function( arg ) {
        switch ( arg ) {
            case '2d':
                return new CanvasRenderingContext2D( this );
            case 'webgl':
            case 'experimental-webgl':
                return new WebGLRenderingContext( this );
        }
        return null;
    };

    // add nothing: this function is crucial in order to fake three.js
    HTMLCanvasElement.prototype.addEventListener = function() {}

    HTMLCanvasElement.prototype.getBoundingClientRect = function() {
      return {
        width: this.width,
        height: this.height
      }
    }

    module.exports = HTMLCanvasElement;

}());
