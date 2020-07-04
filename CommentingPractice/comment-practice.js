/**
 * @file Main
 * 
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import { myName } from './services/practice.js';
import * as martin from './services/spaces.js';


import * as luis from './services/backwardsName.js';



( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));

     console.log(myName());
   
     var space = "space is large";
     console.log(amonte.randomlyCapitalize(space));

     let myName = "Luis Moran"
     console.log(luis.backwardsName(myName));


 })()



