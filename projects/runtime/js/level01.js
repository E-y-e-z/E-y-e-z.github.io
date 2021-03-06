var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        
        //"Level 1"
        
        
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -1,
            "gameItems": [
                
                
                { "type": "sawblade", "x": 400, "y": groundY -100 },
                { "type": "sawblade", "x": 600, "y": groundY -100 },
                { "type": "sawblade", "x": 1200, "y": groundY -100 },
                { "type": "enemy", "x": 1000, "y": groundY -100 },
                { "type": "sawblade", "x": 1600, "y": groundY -20 },
                { "type": "spike", "x": 800, "y": groundY -20},
                { "type": "spike", "x": 1500, "y": groundY -20 },
                { "type": "spike", "x": 1800, "y": groundY -20 },
                { "type": "enemy", "x": 4000, "y": groundY -100 },
                { "type": "spike", "x":2500, "y": groundY -20},
                { "type": "spike", "x": 4000, "y": groundY -20 },
                { "type": "spike", "x": 3000, "y": groundY -20 },
                { "type": "sawblade", "x": 3000, "y": groundY -20 },
                { "type": "sawblade", "x": 3500, "y": groundY -20 },
            
       
        
       
        
                { "type": "sawblade", "x": 6000, "y": groundY -100 },
                { "type": "sawblade", "x": 6500, "y": groundY -100 },
                { "type": "sawblade", "x": 8090, "y": groundY -100 },
                { "type": "enemy", "x": 8900, "y": groundY -100 },
                { "type": "sawblade", "x": 6000, "y": groundY -20 },
                { "type": "spike", "x": 8000, "y": groundY -20},
                { "type": "spike", "x": 4500, "y": groundY -20 },
                { "type": "spike", "x": 7500, "y": groundY -20 },
                { "type": "enemy", "x": 10000, "y": groundY -100 },
                { "type": "spike", "x":7900, "y": groundY -20},
                { "type": "spike", "x": 8000, "y": groundY -20 },
                { "type": "spike", "x": 5000, "y": groundY -20 },
                { "type": "sawblade", "x": 5500, "y": groundY -20 },
                { "type": "sawblade", "x": 7000, "y": groundY -20 },
            
            
            
                { "type": "sawblade", "x": 11500, "y": groundY -100 },
                { "type": "sawblade", "x": 10000, "y": groundY -100 },
                { "type": "sawblade", "x": 11000, "y": groundY -100 },
                { "type": "enemy", "x": 10500, "y": groundY -100 },
                { "type": "sawblade", "x": 10500, "y": groundY -20 },
                { "type": "spike", "x": 11500, "y": groundY -20},
                { "type": "spike", "x": 11000, "y": groundY -20 },
                { "type": "spike", "x": 12500, "y": groundY -20 },
                { "type": "enemy", "x": 10000, "y": groundY -100 },
                { "type": "spike", "x":8900, "y": groundY -20},
                { "type": "spike", "x": 9200, "y": groundY -20 },
                { "type": "spike", "x": 9000, "y": groundY -20 },
                { "type": "sawblade", "x": 9000, "y": groundY -20 },
                { "type": "sawblade", "x": 10000, "y": groundY -20 },
                { "type": "spike", "x": 12000, "y": groundY -20},
                { "type": "spike", "x": 12500, "y": groundY -20 },
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            ]
        };
        
        
        
        
        
        
        
        
        
        
        
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE

        function createSawblade (x,y){
            
        var hitZoneSize = 12;
        var damageFromObstacle = 5;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        
        game.addGameItem(sawBladeHitZone);  
        
        var obstacleImage = draw.bitmap('img/sword.png');
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -10;
        obstacleImage.y = -10;
        
        }
        
       
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameObject = levelData.gameItems[i];
                if(gameObject.type==="sawblade"){
                    createSawblade(gameObject.x, gameObject.y);
                }
                
                if(gameObject.type==="spike"){
                    createSpikes(gameObject.x, gameObject.y);
                }

                if(gameObject.type==="enemy"){
                    createEnemy(gameObject.x, gameObject.y);
                }
                
                
                
                function createSpikes(x,y) { 
                    var hitZoneSize = 45;
                    var damageFromObstacle = 3;
                    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
                    sawBladeHitZone.x = x;
                    sawBladeHitZone.y = y;
                    
                    game.addGameItem(sawBladeHitZone);  
                    
                    var obstacleImage = draw.bitmap('img/spike.png');
                    sawBladeHitZone.addChild(obstacleImage);
                    obstacleImage.x = -25;
                    obstacleImage.y = -35;
                    obstacleImage.scaleX = .12
                    obstacleImage.scaleY = .12
                // code for creating myObstacle
                 };
                 
                 
                 
                 
                 










                function createEnemy(x,y){
                var enemy =  game.createGameItem('enemy',25);
                var redSquare = draw.rect(50,50,'black');
                redSquare.x = -20;
                redSquare.y = -20;
                enemy.addChild(redSquare);
                
                enemy.x = 400;
                enemy.y = groundY-50;
                
                game.addGameItem(enemy);

                enemy.velocityX = -2;

                enemy.onPlayerCollision = function() {
                    console.log('The enemy has hit Halle');
                    game.changeIntegrity(-30);
                    enemy.fadeout();
                };

                enemy.onProjectileCollision = function(){
                    game.increaseScore(100);
                     enemy.fadeout();
                };



            }
         // code to do something with each element
    }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
