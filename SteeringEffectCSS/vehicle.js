
function Vehicle(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();// default (0, 0)
    this.target = createVector(x, y);
    this.r = 8;
    this.maxSpeed = 40;
    this.maxForce = 1;
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
}

Vehicle.prototype.show = function() {
    stroke(140 , 255, 100);
    strokeWeight(6);
    point(this.pos.x, this.pos.y);
}

Vehicle.prototype.behaviors = function() {
    var arrive = this.arrive(this.target)
    var mouse = createVector(mouseX, mouseY); // uses position of mouse.
    var flee = this.flee(mouse);
    
    flee.mult(1.8);
    arrive.mult(2);
    
    this.applyForce(arrive);
    this.applyForce(flee);
}

Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
 }

Vehicle.prototype.arrive= function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();

    if (d < 100) {
         var speed = map ( d, 0 , 100, 0 , this.maxSpeed);
         desired.setMag(speed);
    }
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
}

Vehicle.prototype.flee= function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if( d < 50 ) {
    desired.setMag(this.maxSpeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer.mult(-1);
    } else {
        return createVector(0 , 0);
    }
}
