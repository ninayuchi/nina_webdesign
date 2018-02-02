// function setup(){
//   createCanvas(1000, 700, WEBGL);
// }

// function draw(){
//   background(0);

//   var locY = (mouseY / height - 0.5) * (-2);
//   var locX = (mouseX / width - 0.5) * 2;

//   ambientLigt(30);
//   directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
//   pointLight(200, 0, 200, locX, locY, 0);
//   pointLight(200, 200, 200, -locX, -locY, 0);

//   push();
//   translate(-250, 0, 0);
//   rotateZ(frameCount * 0.02);
//   rotateX(frameCount * 0.02);
//   specularMaterial(200);
//   box(200, 150, 100);
//   pop();

//   translate(250, 0, 0);
//   ambientMaterial(250);
//   sphere(120, 64);
// }

function setup(){
  createCanvas(1500, 800, WEBGL);
}

function draw(){
  background(250);
  var radius = width;
  
  //drag to move the world.
  orbitControl();

  normalMaterial();
  translate(0, 0, -600);
  for(var i = 0; i <= 12; i++){
    for(var j = 0; j <= 12; j++){
      push();
      var a = j/12 * PI;
      var b = i/12 * PI;
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2 , cos(2 * a) * radius * sin(b));    
      if(j%2 === 0){
        sphere(50);
      }else{
        sphere(30);
      }
      pop();
    }
  }
}
