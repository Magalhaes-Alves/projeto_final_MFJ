let aabb1, aabb2;
let circle1, circle2;
let obb, obbAABB;

function setup() {
  createCanvas(400, 400);
  
  // Criar instâncias das classes
  aabb1 = new AABB(generateRandomPoint(5));
  aabb2 = new AABB(generateRandomPoint(5));
  
  circle1 = new Circle(generateRandomPoint(2));
  circle2 = new Circle(generateRandomPoint(2));
  
  obbAABB = new OBB(generateRandomPoint(5));
}

function draw() {
  goCartesian()
  background(220);

  // Desenhar as instâncias
  stroke(0,255,0) //verde
  aabb1.draw();
  stroke(255,255,0) 
  aabb2.draw();
  
  stroke(0, 0, 255) //Azul
  circle1.draw();
  stroke(60, 120, 100) 

  circle2.draw();
  
  stroke(30, 140, 50)
  obbAABB.draw(color(0, 255, 0));

  // Verificar colisões
  if (aabb1.collidesAABB(aabb2)) {
    console.log('AABB colidiu com AABB');
    stroke(255,0,0) //verde
    aabb1.draw();
    stroke(255,0,0) //vermelho
    aabb2.draw();
  }

  if (aabb1.collidesCircle(circle1)) {
    console.log('AABB colidiu com Circle 1');
    stroke(255,0,0) 
    aabb1.draw()
    stroke(255, 0, 0) 
    circle1.draw();
  }

  if (aabb1.collidesAABBOBB(obbAABB)) {
    console.log('AABB colidiu com OBB');
    stroke(255,0,0) 
    aabb1.draw();
    stroke(255, 0, 0)
    obbAABB.draw();
  }

  if (circle1.collidesSphere(circle2)) {
    console.log('Circle 1 colidiu com Circle 2');
    stroke(255,0,0) 
    circle1.draw();
    stroke(255, 0, 0)
    circle2.draw();
  }
}


class OBB{


    constructor(nuvem_pontos){
      this.center =null
      this.extends =null
      this.u=null
      this.v=null
      this.vertex
  
  
      if((nuvem_pontos.length===0)|| nuvem_pontos === undefined){
        console.log("Conjunto de pontos vazio.");
        return;
      }
  
  
      let best = {'area':Infinity}
  
      for(let theta=0;theta<360;theta++){
  
        let anguloRad = radians(theta)
  
        let u = createVector(cos(anguloRad),sin(anguloRad)).normalize()
        let v = createVector(-u.y,u.x)
        let info =this.calcOBB(u,v,nuvem_pontos)
  
        if (info['area']<best['area']){
          best = info
        }
  
        this.u = best.u
        this.v = best.v
        this.center = best.center
        this.extends = best.extends
  
        this.updateVertex()  
      }
  
    }
  
    updateVertex(){
      let canto1 = add(this.center, mult(this.v, this.extends.y));
      canto1 = add(canto1, mult(this.u, this.extends.x));
  
      let canto2 = sub(this.center, mult(this.v, this.extends.y));
      canto2 = add(canto2, mult(this.u, this.extends.x));
      
      let canto3 = sub(this.center, mult(this.v, this.extends.y));
      canto3 = sub(canto3, mult(this.u, this.extends.x));
  
      let canto4 = add(this.center, mult(this.v, this.extends.y));
      canto4 = sub(canto4, mult(this.u, this.extends.x));
  
      this.vertex= [canto1,
                    canto2,
                    canto3,
                    canto4]
  
    }
  
    calcOBB(u,v,points){
      let min_u = Infinity;
      let max_u = -Infinity;
      let min_v = Infinity;
      let max_v = -Infinity;
  
      points.forEach(point => {
  
        let proj_u = dot(u,point)
        let proj_v = dot(v,point)
              
        min_u= min(min_u,proj_u)
        max_u= max(max_u,proj_u)
        min_v= min(min_v,proj_v)
        max_v= max(max_v,proj_v)
  
      });

  
      let center = add(
        mult(u,(min_u+max_u)).mult(0.5),
        mult(v,(min_v+max_v)).mult(0.5)
      )
  
      let area = (max_u-min_u)* (max_v-min_v)
  
  
      let dict = {
        'u':u,
        'v':v,
        'center':center,
        'area':area,
        'extends': createVector(max_u-min_u,max_v-min_v).mult(0.5)
      }
  
      return dict
  
    }
  
    draw() {
      // Configurar o estilo da OBB
      noFill();

  
      // Desenhar a OBB
      beginShape();
      for(let i=0;i<4;i++){
        vertex(this.vertex[i].x, this.vertex[i].y);      
      }
  
      endShape(CLOSE);
    }
  
    isInside(point) {
      const toPoint = sub(point, this.center);
  
      // Projetar o vetor até o ponto nos eixos principais da OBB
      const uProjection = dot(this.u, toPoint);
      const vProjection = dot(this.v, toPoint);
  
      // Verificar se as projeções estão dentro das dimensões da OBB
      return (
        uProjection >= -this.extends.x &&
        uProjection <= this.extends.x &&
        vProjection >= -this.extends.y &&
        vProjection <= this.extends.y
      );
    }

    collides(bondary){

        if(bondary instanceof AABB){
            return bondary.collides(this)
        }else{
            console.log("Não é um envoltorio compatível.")
        }
    }
  
    
}
  
class Circle{

  constructor(nuvem_pontos){


    if (nuvem_pontos.length == 0 || nuvem_pontos === undefined){
      console.log("Conjunto de pontos vazio.")
      return
    }

    this.r =null
    this.center =null

    let r= +Infinity
    let best_center,center

    for (let i=0;i<500;i++){


      center = generateRandomPoint(1)[0]

      let r_i= -Infinity
      nuvem_pontos.forEach(p =>{

        r_i = max(dist(center.x,center.y,p.x,p.y),r_i )

      })


      if (r_i<r){
        best_center = center
        r=r_i
      }


    }

    this.center=best_center
    this.r =r

  }
  draw(fill_color =null) {
    if (fill_color==null){
      noFill()
    }else{
      fill(fill_color)
    }
    circle(this.center.x, this.center.y, this.r * 2);
  }

  isInside(point) {
    return this.center.dist(point) <= this.r;
  }

  collidesSphere(otherSphere) {

    if(!(otherSphere instanceof Circle)){

      console.log("Não é uma esfera.")
      return null
    }

    let distance = this.center.dist(otherSphere.center);
    let sumRadii = this.r + otherSphere.r;

    return distance <= sumRadii;
  }

  collidesAABB(bondary){

      return bondary.collides(this)
  }

  collides(bondary){

      if(bondary instanceof AABB){
          return this.collidesAABB(bondary)
      }else if(bondary instanceof Circle){
          return this.collidesSphere(bondary)
      }else{
          console.log("Não é um envoltorio compatível.")
      }
  }
}
  
  
  
  
class AABB{


  //Recebe um vetor não vazio de pontos
  constructor(nuvem_pontos){
      this.max =null
      this.min =null


      if (nuvem_pontos.length == 0 || nuvem_pontos === undefined){
          return
      }

      let maxX = nuvem_pontos[0].x
      let maxY = nuvem_pontos[0].y
      let minX = nuvem_pontos[0].x
      let minY = nuvem_pontos[0].y


      nuvem_pontos.forEach( ponto => {

        // Atualiza maxX se ponto.x é maior
        maxX = Math.max(maxX, ponto.x);
        // Atualiza maxY se ponto.y é maior
        maxY = Math.max(maxY, ponto.y);
        // Atualiza minX se ponto.x é menor
        minX = Math.min(minX, ponto.x);
        // Atualiza minY se ponto.y é menor
        minY = Math.min(minY, ponto.y);


        this.max= createVector(maxX,maxY)
        this.min= createVector(minX,minY)
      });



  }

  draw(){
    strokeWeight(0.5)
    rect(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y)
  }

  getMax(){
      return this.max
  }

  getMin(){
      return this.min
  }

  isInside(point) {
    return (
      point.x >= this.min.x &&
      point.x <= this.max.x &&
      point.y >= this.min.y &&
      point.y <= this.max.y
    );
  }

  collidesAABB(bondary){


    if (!(bondary instanceof AABB)){
      console.log("Não é uma AABB")
    }

    let overlapX = this.max.x > bondary.min.x && this.min.x < bondary.max.x;

    let overlapY = this.max.y > bondary.min.y && this.min.y < bondary.max.y;

    return overlapX && overlapY

  }
  collides(bondary){

      if(bondary instanceof OBB){
          return this.collidesAABBOBB(bondary)
      }else if(bondary instanceof AABB){
          return this.collides(bondary)
      }else if(bondary instanceof Circle){
          return this.collidesCircle(bondary)
      }else{
          console.log("Não é um envoltorio compatível")
      }
  }

  collidesCircle(circle) {
    if (!(circle instanceof Circle)) {
      console.log("Não é um círculo.");
      return false;
    }

    let closestX = this.clamp(circle.center.x, this.min.x, this.max.x);
    let closestY = this.clamp(circle.center.y, this.min.y, this.max.y);

    let distanceX = circle.center.x - closestX;
    let distanceY = circle.center.y - closestY;

    let distanceSquared = distanceX * distanceX + distanceY * distanceY;

    return distanceSquared < circle.r * circle.r;
  }


// Função de utilidade para restringir um valor a um intervalo
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  collidesAABBOBB(obb) {
    if (!(obb instanceof OBB)) {
      console.log("Não é uma OBB.");
      return false;
    }

    // Verificar colisão em cada direção dos eixos principais da OBB
    for (let i = 0; i < obb.vertex.length; i++) {
      if (this.isInside(obb.vertex[i])) {
        return true;
      }
    }

    // Verificar se algum vértice da AABB está dentro da OBB
    const aabbVertices = [
      createVector(this.min.x, this.min.y),
      createVector(this.min.x, this.max.y),
      createVector(this.max.x, this.min.y),
      createVector(this.max.x, this.max.y),
    ];

    for (let i = 0; i < aabbVertices.length; i++) {
      if (obb.isInside(aabbVertices[i])) {
        return true;
      }
    }

    return false;
  }

}
  
  
  
  
  
//Função para gerar pontos aleatórios. Os pontos gerados obedecem os limites do canvas.
function generateRandomPoint(n){

  let p =[]

  for (i=0;i<n;i++){
    p.push(createVector(random(0,width)-(width/2),random(0,height)-(height/2)))
  }
  return p
}
  

  
function add(v1,v2) {return p5.Vector.add(v1,v2)}
function sub(v1,v2) {return p5.Vector.sub(v1,v2)}
function mult(v1,scalar) {return p5.Vector.mult(v1,scalar)}
function dot(v1,v2) {return p5.Vector.dot(v1,v2)}
function div(v1,scalar) {return p5.Vector.div(v1,scalar)}
function cross(v1,v2) {return p5.Vector.cross(v1,v2).z}

  
  
function goCartesian()
{
  background(255)

  mouseXC = mouseX - width/2
  mouseYC = height/2 - mouseY

  translate(width/2,height/2)
  scale(1,-1,1)  
}

function grabMouse()
{
  mouseXC = mouseX - width/2
  mouseYC = height/2 - mouseY
}

function texto(str,x,y)
{
push()
  translate( x, y)
  scale(1,-1)
  translate(-x,-y)

  // desenha o texto normalmente
  text(str,x,y)
pop()
}

function colore(c1,c2,c3,c4)
{
if(c4 != null)
{
  fill(c1,c2,c3,c4)
  stroke(c1,c2,c3,c4)
  return
}
if(c3 != null)
{
  fill(c1,c2,c3)
  stroke(c1,c2,c3)
  return
}

if(c2 == null )
{
  fill(c1)
  stroke(c1)
}
else
{
  fill(c1,c1,c1,c2)
  stroke(c1,c1,c1,c2)
}    
}