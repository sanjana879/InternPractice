/**
 * @file Library Class
 * @author Sonia Saitawdekar
 */

/**
 * @module
 */
export default class Library {

  /**
   *
   * Constructor
   * @param {string} name - Name of library
   * @param {int} books - Number of books
   * @param {int} pages - Number of patrons
   */
  constructor(name, books, patrons)
  {
      this.name = name;
      this.books = books;
      this.patrons = patrons;
  }

  /**
   * Returns the name of the library
   * @returns {string} - Name of library
   */
  getName() {
    return this.name;
  }

  /**
   * Changes library name to the given name
   * @param {string} newName - New name of library
   */
  setName(newName) {
    this.name = newName;
  }

  /**
   * Returns the number of books
   * @returns {int} - Number of books
   */
  getBooks() {
    return this.books;
  }

  /**
   * Changes the number of books
   * @param {int} newBooksCount - New number of books
   */
  setBooks(newBooksCount) {
    this.books = newName;
  }

  /**
   * Returns the number of patrons
   * @returns {int} - Number of patrons
   */
  getPatrons() {
    return this.patrons;
  }

  /**
   * Changes number of patrons
   * @param {int} newPatronCount - New number of patrons
   */
  setName(newPatronCount) {
    this.patrons = newPatronCount;
  }

}

