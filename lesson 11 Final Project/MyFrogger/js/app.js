var numRows = 6;
var numCols = 5;
var rowStep = 83;
var colStep = 101;
            
var minEnemyRow = 1;
var maxEnemyRow = 3;

// Enemies our player must avoid
var Enemy = function(row, col) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    if (row < minEnemyRow) row = minEnemyRow;
    if (row > maxEnemyRow) row = maxEnemyRow;
    if (col < 0) col = 0;
    if (col >= numCols) col = numCols - 1;
    this.x = row * rowStep;
    this.y = col * colStep;
    
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
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = ((numCols - 1) / 2) * colStep;
    this.y = (numRows - 1) * rowStep;
    this.direction = 'up';
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    switch(this.direction) {
        case 'left':  this.x -= 1; break;
        case 'right': this.x += 1; break;
        case 'up':    this.y -= 1; break;
        case 'down':  this.y += 1; break;
    }
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
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();

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
