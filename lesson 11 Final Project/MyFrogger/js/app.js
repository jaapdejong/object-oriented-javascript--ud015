// x directions = columns
var width = 505;
var numCols = 5;
var colStep = 101;

// y directions = rows
var height = 606;
var numRows = 6;
var rowStep = 83;
var minEnemyRow = 1;
var maxEnemyRow = 3;

// Enemies our player must avoid
var Enemy = function(col, row) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = col * colStep;
    this.y = row * rowStep;
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt;
    if (this.x >= width) this.x = 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(col, row) {
    this.x = col * colStep;
    this.y = row * rowStep;
    this.direction = 'up';
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    switch(this.direction) {
        case 'left':  this.x -= dt; break;
        case 'right': this.x += dt; break;
        case 'up':    this.y -= dt; break;
        case 'down':  this.y += dt; break;
    }
    if (this.x < 0) this.x = width - 1;
    if (this.x >= width) this.x = 0;
    if (this.y < 0) this.y = height - 1;
    if (this.y >= height) this.y = 0;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
    this.direction = direction;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(0,1), new Enemy(3,1), new Enemy(1,2), new Enemy(2,2), new Enemy(4,3)];
var player = new Player(2,5);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
