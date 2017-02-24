'use strict';
const chai = require("chai");
const expect = chai.expect;
chai.use(require('chai-as-promised'));

const myModule = require("../src/");

describe('My module', function(){
  it('Says hello world', () => {
    expect(myModule()).to.equal('Hello World!');
  });
});
