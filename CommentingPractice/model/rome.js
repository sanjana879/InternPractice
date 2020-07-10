/**
 * @file Rome class
 * @author Martin Vityk (firebase)
 */

/**
 * @module
 */
export class Rome {

    /**
     * 
     * Constructor 
     * @param {int} time - Time Period in + is AD - is BC
     */
    constructor(time)
    {
        this.time = time;
    }

    /**
     * tells us what year it is in the empire
     */
    whatTimeisIt()
    {
        return this.time;
    }

}

/**
 * Emperor Class
 */
export class Emperor extends Rome {
    /**
     * 
     * Constructor 
     * @param {boolean} isGood - is the emperor good or not good
     */
    constructor(isGood, time)
    {
        super(time);
        this.isGood = isGood;
    }

    /**
     * prints out who the emperor is
     */
    whoIsHe()
    {
        if(this.isGood)
        {
            return `I am Augustus Caesar! The great emperor of Rome! Bask in my greatness!`;
        }
        return `I am not Augustus Caesar :(`;
    }
}

