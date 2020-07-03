/**
 * @file Main
 *
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import { myName } from './services/practice.js';
import * as martin from './services/spaces.js';
import { toPigLatin } from './services/piglatin.js';





( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));
     console.log(myName());
    //used my own function because it doesnt seem like anybody else added something
    var space = "space is large";
     console.log(amonte.randomlyCapitalize(space));
    // everyone's has been done, so I repeated one and did my own
    console.log(amonte.randomlyCapitalize("hello"));
    console.log(toPigLatin("book"));
 })();



