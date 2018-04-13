const assert = require('assert');
const Hero = require('../classes/hero.js')
const Task = require('../classes/task.js')

describe('Hero', function(){

  let hero;
  let quests;
  let task1, task2, task3;
  let inventory;
  let completedQuests;


  beforeEach(function(){
    hero = new Hero("Steve", 100, "hamburger")
    task1 = new Task("Find the cat", 1, 2, 10, false)
    task2 = new Task("Slay the dragon", 5, 5, 1000, false)
    task3 = new Task("Rule the world", 5, 1, 1, false)
    quests = [task1];
    completedQuests = [];
  })

  it('should have a name', function(){
    actual = hero.name;
    assert.strictEqual(actual, "Steve")
  });

  xit('should have health');

  xit('should have a favourite food');

  xit('should be able to talk (say their name)');

  xit('should have an inventory');

  xit('should have a collection of tasks');

  xit('should be able to eat food');

  xit('food should replenish health');

  xit('favourite food should replenish more health');

  xit('should be able to sort tasks by difficulty');

  xit('should be able to sort tasks by urgency');

  xit('should be able to sort tasks by reward');

  xit('should be able to view tasks by completed, or incompleted');

  xit('should be able to eat poisonous food');

  xit('should be able to lose health points from food');





})
