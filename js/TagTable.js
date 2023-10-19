/*\
title: $:/macros/ulaulaman/TagTable.js
type: application/javascript
module-type: macro

<<TagTable tag>>

Example:
<<TagTable>>
<<TagTable "tag">>

\*/
(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";
    
    /*
    Information about this macro
    Create a styled table in order to show tiddlers from a specific tag as a menu.
    */
    
    exports.name = "TagTable";
    
    exports.params = [
        { name: "tag" }
    ];
    
    /*
    Run the macro
    */
    exports.run = function(tag) {
        if( !tag) tag = "menu";
        var output = "{{" + tag + "||$:/core/macros/ulaulaman/TagTable}}";
        return output;
    };
    
    })();