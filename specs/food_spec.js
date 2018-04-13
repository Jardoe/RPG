const assert = require('assert');
const Food = require('../classes/food.js')

describe('Food', function(){

  let food1, food2, food3;

  beforeEach(function(){
    food1 = new Food("hamburger", 10, false);
    food2 = new Food("cheese", 5, false);
    food3 = new Food("apple", 5, true)

  })

    xit('should have a name');

    xit('should have a replenishment value');

    xit('should be able to be poisoned');

});
