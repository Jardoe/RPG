const assert = require('assert');
const Food = require('../classes/food.js')

describe('Food', function(){

  let food1, food2, food3;

  beforeEach(function(){
    food1 = new Food("hamburger", 10);
    food2 = new Food("cheese", 5);
    food3 = new Food("apple", 5)

  })

    xit('should have a name');

    xit('should have a replenishment value');

    xit('should be able to be poisoned');

});
