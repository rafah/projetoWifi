
// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
return Math.max(
elem.body[ "scroll" + name ], doc[ "scroll" + name ],
elem.body[ "offset" + name ], doc[ "offset" + name ],
doc[ "client" + name ]
);
}
return value === undefined ?
// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css( elem, type, extra ) :
// Set width or height on the element
jQuery.style( elem, type, value, extra );
}, type, chainable ? margin : undefined, chainable, null );
};
});
});
// Limit scope pollution from any deprecated API
// (function() {
// })();
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;
// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
define( "jquery", [], function () { return jQuery; } );
}
})( window );
