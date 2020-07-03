/**
 * @file Main
 * 
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import * as martin from './services/spaces.js';



( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));
    //used my own function because it doesnt seem like anybody else added something
    var space = "space is large";
     console.log(amonte.randomlyCapitalize(space));
 })()



