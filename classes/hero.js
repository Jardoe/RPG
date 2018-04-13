const Hero = function(name, health, favFood, wallet, tasks, inventory){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.wallet = wallet;
  this.tasks = tasks;
  this.inventory = inventory;
  this.completedTasks = [];
};

Hero.prototype.talk = function () {
    return `My name is ${this.name}`
};

Hero.prototype.addToWallet = function (money) {
    this.wallet += money;
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task)
};

Hero.prototype.addFood = function (food) {
  this.inventory.push(food);
};

Hero.prototype.eatFood = function (food) {
  this.inventory.pop(food => food.name === food)
    if(food.name === this.favFood){
      this.health += (food.replenish * 1.5)
    } else {
    this.health += food.replenish;
  }
};

Hero.prototype.sortTaskDifficulty = function () {
  this.tasks.sort(function(a,b) {
    return a.difficulty - b.difficulty;
  })
};

Hero.prototype.sortTaskUrgency = function () {
  this.tasks.sort(function(a,b){
    return a.urgency - b.urgency;
  })
};

Hero.prototype.sortTaskReward = function () {
  this.tasks.sort(function(a,b){
    return a.reward - b.reward;
  })
};
// 
// Hero.prototype.completeTask = function (completedTask) {
//   for(task of this.tasks){
//     if(task === completedTask){
//       task.status = true;
//
//     }
//     return this.completedTasks = this.tasks.filter((task) => {task.status === true})
//   }
//
// };


module.exports = Hero;
