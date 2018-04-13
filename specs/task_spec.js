const assert = require('assert');
const Task = require('../classes/task.js')

let task1

describe('Task', function(){


  beforeEach(function(){
    task1 = new Task(3, 4, 10, false)
  })

  xit('should have a difficulty level');

  xit('should have urgency level');

  xit('should have reward');

  xit('should be able to set completion');

});
