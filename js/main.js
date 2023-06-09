


// add "check" function to player object to check all shape cells for overlapping non-zero world.field cells




// -------- Testris -------- //

const localStorage = window.localStorage;

const wrap = document.getElementById("main-wrap")

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let fps = 60;

let x = 0;
let y = 0;

let score = 0;
let highScore = 0;

let zoom = 1;

// Start();


function Resize() {
    zoom = Math.min(window.innerWidth / canvas.width, window.innerHeight / canvas.height);
    canvas.style.transform = "scale(" + zoom + ")";
    console.log("RESIZE");
}


function Start() {
    
    Resize();
    
    world.reset();
    world.draw();
    highScore = parseInt(localStorage.getItem("Score")); 
    world.highScore();
    gui.start();
    
    player.generateNext();
    
    // setTimeout(update, 1000/fps);
}


function Update() {
    
    ctx.clearRect(0, 0, 512, 512);
    
    
    world.draw();
    gui.draw();
    
    // player.update();
    
    
    // setTimeout(update, 1000/fps);
}
