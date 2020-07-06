/**
 * @file Template class
 * @author Amonte Andrews (no team)
 */

/**
 * @module
 */
export default class Template {

    /** 
     * Prints out the assignment instructions
     * @static
     * @description Prints the instructions
     */
    static printInstructions() 
    {
        console.log(`
        
       
        In the near future, we'll have an assignment to add documenting comments to a file that handles a lot of business logic for the TurnUp app.
                
        As a lead up to that assignment, we're going to practice code commenting and collaboration.  The main goal of the exercise is to ensure that everyone codes and comments in the same way.  However, there are number of items that can be practiced along the way:
                * Debugging javascript code in VS via Node.
                * Familiarizing oneself with how a project that uses node is structured 
                * Generally practicing javascript
                * Utilizing hotkeys in VS Code
        
        First you'll need to ensure you're working against the latest changes. Fetch the changes from upstream. Then merge those changes into your local development branch. Lastly, push the changes resulting from that merge up to your fork.
                
                The task for everyone is as follows:
                1. Add a javascript file(s) to appropriate folder(s) (services or model) 
                2. Using someone else's code within the project, add something to the comment-practice.js. Preferably within the self-invoking function.
                3. Make sure the code you add is documented appropriately.
                        -> Please follow the commenting syntax for JSDocs: https://jsdoc.app/about-getting-started.html
                4. As per the previous assignment, we'll be going through the same submission process involving branching and submitting pull requests.
        
                I'll try to quickly accept pull requests so that people continue to have fresh material to source from for #2.
        
        Feel free to DM with questions/comments/concerns.
        
            
      

        `);
    }

    /**
     * 
     * Constructor 
     * @param {string} name - Name
     * @param {string} description - Description
     */
    constructor(name, description)
    {
        this.name = name;
        this.desciption = description;

    }

}

