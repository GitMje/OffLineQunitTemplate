"use strict";

var Example = function Example() {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Ensure object is called with new or Object.create:    
    if (!(this instanceof Example)) {
        return new Example();
    }

    this.add = function (a, b) {
        return a + b;
    };
};