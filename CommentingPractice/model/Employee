/**
 * @file Employee Class
 * @author Ramitha Kotarkonda
 */

/**
 * @module
 */
export default class Employee {

  /**
   *
   * Constructor
   * @param {string} first_name - first name of employee
   * @param {string} last_name - last name of employee
   */
  constructor(first_name, last_name)
  {
      this.first_name = first_name;
      this.last_name = last_name;
  }

  /**
   * Returns the first name of the employee
   * @returns {string} - first name of employee
   */
  getFirst_name() {
    return this.first_name;
  }

  /**
   * Returns the last name of the employee
   * @returns {string} - last name of employee
   */
  getLast_name() {
    return this.first_name;
  }
  
  
  /**
   * sets the first name of the employee
   */
  setFirst_name(f_name) {
    this.first_name = f_name;
  }
  
   /**
   * sets the last name of the employee
   */
  setLast_name(l_name) {
    this.last_name = l_name;
  }

}
export class Fulltime extends Employee {

     /**
     * 
     * Constructor 
     * @param {int} hours - number of hours the employee works
     */
    constructor(first_name, last_name, hours){
        super(first_name, last_name);
        this.hours = hours;
    }
    
    /**
     * 
     * prints whether the employee is a full time or part time employee
     */
    employement(){
      if (this.hours >=30) {
        return "full time";
      }
      return "part time";
    }
}
