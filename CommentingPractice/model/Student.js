/**
 * @file student class
 * @author Adil Merribi (Mobile app)
 */

 /**
  * Person class which includes FirstName & LastName property
  */
/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 */
 function Person(firstName, lastName) {

        this.FirstName = firstName || "unknown";
        this.LastName = lastName || "unknown";

}
Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}


/**
 * Student class that inherits from Person class so that we don't have to redefine FirstName, LastName and getFullName() method in Student class.
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} schoolName 
 * @param {number} grade 
 */
function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}

/**
 * Worker class that inherits from Person class so that we don't have to redefine FirstName, LastName and getFullName() method in Worker class.
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} job 
 * @param {number} age 
 */
function Worker(firstName, lastName, job, age)
{
    Person.call(this, firstName, lastName);

    this.Job = job || "unknown";
    this.Age = age || "unknown";
}

Student.prototype = new Person();
Worker.prototype = new Person();

Student.prototype.constructor = Student;
Worker.prototype.constructor = Worker;

var std1 = new Student("James","Bond", "XYZ", 10);
var std2 = new Worker("Mohamed","Ali", "XYZ", 35);

console.log(std1.getFullName()); 
console.log(std2.getFullName());