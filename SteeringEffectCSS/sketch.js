var font;
var vehicles = [];

function preload() {
    font = loadFont('Vegan Style Personal Use.ttf');
}

function setup() {
    createCanvas(800, 800);
    background(180);    

    var points = font.textToPoints('Xclam', 75, 400, 192);
    for(var i=0; i<points.length; i++){
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
        // stroke(255);
        // strokeWeight(8);
        // point(pt.x, pt.y);
    }
}

function draw() {
    background(51);
    for(var i=0; i< vehicles.length; i++){
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}
