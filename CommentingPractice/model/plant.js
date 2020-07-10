/**
 * @file Plant file
 * @author Sanjana Yadav
 */

/**
 * @module
 */

export class Plant {
  /**
   *
   * @param {String} name - plant name (i.e. Flower, Tree)
   * @param {int} height - average height of plant (feet)
   * @param {boolean} isIndoor - if plant can be kept indoor
   */
  constructor(name, height, isIndoor) {
    this.name = name;
    this.height = height;
    this.isIndoor = isIndoor;
  }

  /**
   * returns plant name
   */
  name() {
    return this.name;
  }

  /**
   * return plant height
   */
  full_height() {
    return this.height;
  }
  /**
   * returns if plant can be kept indoor
   */
  isIndoorPlant() {
    return this.isIndoor;
  }
}

export class OakTree extends Plant {
  /**
   * @param {String} typeOfTree - the type of tree this is (i.e. Oak Tree)
   */

  constructor(name, height, isIndoor, typeOfTree) {
    super(name, height, isIndoor);
    this.typeOfTree = typeOfTree;
  }

  /**
   * returns the type of tree
   */
  type() {
    return this.typeOfTree;
  }
}
