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
import * as ramitha from './services/lowercase.js';
import * as sum from './services/sumOfNumber.js';
import * as sanjana from './services/product.js';
import * as Arithmetic from './services/arithmetic.js';
import * as mitchell from './services/caesarCipher.js';
import * as adil from './services/splitor.js';
import * as iniya from './services/wordArray.js';

import * as giovann from './services/test.js';
import * as richard from './services/vowelSwitcher.js';
import * as adrianna from './services/sum.js';
import * as glory from './model/rome.js';
import Animal from './model/animal.js';
import TeamMate from './model/teammate.js'; 
import ColorConverter from './services/colorConverter'; 



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

    var word = "WORD";
    console.log(ramitha.lowercase(word));

	  let num = 5;
	  console.log(sum.sumOfNumber(num));


	  var num1 = 8;
	  var num2 = 9;
    console.log(sanjana.product(num1,num2));


    /** Sum function from sum.js imported as adrianna. */
    console.log(adrianna.sum(num1, num2));


    var num1 = 10, num2 = 2;
    console.log(Arithmetic.Add(num1, num2) + " :: " +
                Arithmetic.Subtract(num1, num2) + " :: " +
                Arithmetic.Multiply(num1, num2) + " :: " +
                Arithmetic.Divide(num1, num2));



     let message = "Mitchell";
     console.log(mitchell.caesarCipher(message));


     var MyString = "My name is Adil Merribi";
     console.log(adil.myChars(MyString));
 
     let sentence = "TurnUp is an app that centralizes youth activism by connecting organizations, campaigns and movements."
     console.log(iniya.sentenceToWords(sentence));
     
     console.log(giovann.helloWorld());

     var name = "Richard";
     console.log(richard.randomVowels(name));


    //utilizing template.js model for task 3 ~ Kyle Kobayashi
     let temp = new Template("ROYBGIV","The colors of the rainbow in their respective order");
     console.log(temp.name + ": " + temp.description);


    var templateObj = new Template("Martin", "First Commit")
    console.log(templateObj.name); 

    let bear = new Animal();
    bear.setName("bear");
    bear.setGroup("mammal");
    console.log(bear.getName() + " is a " + bear.getGroup());

    //utilizing rome.js model for task 3 ~ Luis Moran 
    const whoIsEmperor = new glory.Emperor(true, 10); 
    console.log(whoIsEmperor.whoIsHe());

    const member = new TeamMate("Sanjana", "Yadav");
    console.log(whoIsEmperor.whoIsHe());	  member.setTeamName("Interns");

    member.hello();

    //utilizing animal.js for task 3 ~ Ramitha Kotarkonda
    let lizard = new Animal();
    lizard.setName("lizard");
    lizard.setGroup("reptiles");
    console.log(lizard.getName() + " is a " + lizard.getGroup());


 })();

