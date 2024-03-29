$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(1080, 430, 60, 80)
    createPlatform(770, 450, 70, 32);
    createPlatform(860, 550, 440, 70);
    createPlatform(680, 650, 270, 40);
    createPlatform(650, 350, 340,20);
    createPlatform(850, 450, 320, 20);
    createPlatform(650, 220, 420, 25)
    createPlatform(450, 230,  320, 32)
    createPlatform(50, 430, 240, 42)
    createPlatform(1050, 400, 250, 42)
    createPlatform(800, 780, 252, 52)
    createPlatform(275, 450, 252, 72)
    createPlatform(270, 350, 75, 32)
    createPlatform(250, 550, 65, 42)
    createPlatform(340, 450, 445, 32)
    createPlatform(270, 359, 255, 53)



    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("youngthug", 350, 250, 2,1)
    createCollectable("youngthug", 650, 350, 2,1)
    createCollectable("youngthug", 450, 350, 2,2)
    createCollectable("youngthug", 550,250, 3,1 )
    createCollectable("youngthug", 350, 350, 2, 2)







    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("bottom", 200, 1005,)
    createCannon("bottom", 200, 1000,)
    createCannon("right", 300, 1000,)
    createCannon("top", 400, 1002,)
    createCannon("left", 300, 1000,)
    




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
