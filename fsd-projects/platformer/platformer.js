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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(300, 650, 100, 25, "purple");
    createPlatform(500, 550, 100, 25, "purple");
    createPlatform(300, 425, 100, 25, "purple");
    createPlatform(100, 300, 100, 25, "purple");
    createPlatform(300, 200, 300, 25, "purple");
    createPlatform(975, 550, 100, 25, "purple");
    createPlatform(100, 0, 25, 300, "purple");
    // TODO 3 - Create Collectables
    createCollectable("diamond_collectable", 125, 230);
    createCollectable("diamond_collectable", 525, 130);
    createCollectable("diamond_collectable", 1250, 325);
    // TODO 4 - Create Cannons
    createCannon("bottom", 800, 1500);
    createCannon("left", 300, 3000);
    createCannon("top", 300, 3000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
