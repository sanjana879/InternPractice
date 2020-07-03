/**
 * @file Main
 * 
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import { myName } from './services/practice.js';



( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));
     myName();
 })()



