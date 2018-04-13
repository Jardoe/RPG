const Task = function(difficulty, urgency, reward, status){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.status = status;
}

module.exports = Task;
