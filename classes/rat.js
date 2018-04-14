const Rat = function(health){
  this.health = health;
}

Rat.prototype.touch = function (food) {
    food.poisoned = true;
};

module.exports = Rat;
