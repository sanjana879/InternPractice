/**
 * @file Template class
 * @author Amonte Andrews (no team)
 */

export default class Template {

    /** 
     * Prints out the assignment instructions
     */
    static printInstructions() 
    {
        console.log(`
        
        In the near future, we'll have an assignment to add documenting comments to file that handles a lot of business logic for the TurnUp app.
        
        The purpose of this exercise is to practice commenting code and ensure that everyone comments in the same way. 
        However, because of this project is set up, there are number of items that can be practiced:
        * Debugging javascript code in VS via Node.
        * Familiarizing oneself with how a project that uses node is structured 
        * Generally practicing javascript
        * Utilizing hotkeys in VS Code

        
        The task for everyone is to add some javascript code to this file (or to another file that is then imported into this one). 
            Try to make your code unique and make sure it is documented
                -> Please follow the commenting syntax for JSDocs: https://jsdoc.app/about-getting-started.html
            Within your changes make use of someone else's code.
            
      

        `);
    }

    /**
     * 
     * Constructor 
     * @param {string} name 
     * @param {string} description 
     */
    constructor(name, description)
    {
        this.name = name;
        this.desciption = description;

    }

}

