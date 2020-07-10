/**
 * @file TeamMate class
 * @author Luis Moran (Web Development)
 */

/**
 * @module
 */

 export default class TeamMate {
    
    /** 
    * @description creates a Teammate object that will have the first name and last name, with a choice to set a team name. 
    *
    * Constructor
    * @param {string} fName - is first Name 
    * @param {string} lName - is last name
    * 
    */
    constructor(fName, lName){
        this.fName = fName; 
        this.lName = lName;

        let tName; 
    }

    //function will return the team name if set.
    getTeamName(){
        return this.tName; 
    }

    //function setTeamName will alow to set a team name. 
    /**
     * @param {string} tname - Team name 
     */
    setTeamName(tName){
        this.tName = tName; 
    }

    //function hello will return statement using instances for first name, last name and team name
    hello(){
        console.log(`Hello my name is ${this.fName} ${this.lName} and I am on team: ${this.tName === undefined ? 'none': this.tName }`)
    }

}

//Test Enviornment for class. 
// const obito = new TeamMate('Obito', 'Cool'); 
// // obito.setTeamName('Web Development'); 
// obito.hello(); 
