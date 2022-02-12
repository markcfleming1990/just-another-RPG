const inquirer = require('inquirer');
const inquire = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
this.round = 0;
this.isPlayerTurn = false;
this.enemies = [];
this.currentEnemy;
this.Player;
}


//Method is where well set up the enemy and player objects
Game.prototype.initializeGame = function() {
  this.enemies.push(new Enemy('goblin', 'swords'));
  this.enemies.push(new Enemy('orc', 'baseball bat'));
  this.enemies.push(new Enemy('skeleton', 'axe'));
  this.currentEnemy = this.enemies[0];
  inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  //destructure name from the prompt objects
  .then(({name}) => {
    this.Player = new Player(name);
  
    //test the object creation
    this.startNewBattle();
  });
};


module.exports = Game;