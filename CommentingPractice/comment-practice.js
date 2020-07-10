/**
 * @file Main
 *
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import { myName }  from './services/practice.js';
import * as martin from './services/spaces.js';
import { toPigLatin } from './services/piglatin.js';
import * as luis from './services/backwardsName.js';
import * as henry from './services/encode-decode.js';



( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));

     myName();

     var space = "space is large";
     console.log(amonte.randomlyCapitalize(space));

     let luisMyName = "Luis Moran"
     console.log(luis.backwardsName(luisMyName));

     let greeting = "hello";
     console.log(martin.addSpace(greeting));

     let secretMessage = "Slack Practice";
     console.log(henry.encode(secretMessage));
 })();



