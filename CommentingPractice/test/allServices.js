/**
 * @file All services module export
 */
const CapitalizerService = require('../services/capitalizer') ;
const CaeserCipherService = require('../services/caesarCipher')
const SumOfNumberservice = require('../services/sumOfNumber')

import Template from '../model/template.js';
import * as RandomCapitalizer from '../services/capitalizer.js';
import { myName }  from '../services/practice.js';
import * as Spaces from '../services/spaces.js';
import { toPigLatin } from '../services/piglatin.js';
import * as Backwards from '../services/backwardsName.js';
import * as Lowercase from '../services/lowercase.js';
import * as Product from '../services/product.js';
import * as Arithmetic from '../services/arithmetic.js';
import * as CaeserCipher from '../services/caesarCipher.js';
import * as Splitter from '../services/splitor.js';
import * as SumOfNumber from '../services/sumOfNumber.js';

 module.exports = {Template, RandomCapitalizer, myName, Spaces, Backwards, toPigLatin, Lowercase, Product, Arithmetic, CaeserCipher, Splitter, SumOfNumber}