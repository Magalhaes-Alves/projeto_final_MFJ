var mouseXC
var mouseYC



//Teste Pertinencia Ponto 

  /* function setup() {
    createCanvas(400, 400);
    p= [createVector(random(0,width)-(width/2),random(0,height)-(height/2)),
        createVector(random(0,width)-(width/2),random(0,height)-(height/2)),
        createVector(random(0,width)-(width/2),random(0,height)-(height/2)),
        createVector(random(0,width)-(width/2),random(0,height)-(height/2)),
    ]

    b = new AABB(p)

  }

function draw() {
  goCartesian()
  background(220);

  
  b.draw()
  strokeWeight(10)
  p.forEach(pt =>{

    point(pt.x,pt.y)
  })


  let pontoDentro = createVector(mouseXC, mouseYC);

  // Verificar se o ponto está dentro da AABB
  if (b.isInside(pontoDentro)) {
    fill(0, 255, 0); // Preencher de verde se o ponto estiver dentro
  } else {
    fill(255, 0, 0); // Preencher de vermelho se o ponto estiver fora
  }

  // Desenhar o ponto
  ellipse(pontoDentro.x, pontoDentro.y, 10, 10);
} */


// Teste Colisão de AABB
/* let aabb1, aabb2;

function setup() {
  createCanvas(400, 400);

  // Criar duas AABBs com base em nuvens de pontos
  let nuvem_pontos1 = [
    createVector(100, 100),
    createVector(120, 120)
  ];
  aabb1 = new AABB(nuvem_pontos1);

  let nuvem_pontos2 = [
    createVector(150, 150),
    createVector(250, 250)
  ];
  aabb2 = new AABB(nuvem_pontos2);
}

function draw() {
  background(220);

  // Desenhar as AABBs
  aabb1.draw();
  aabb2.draw();

  // Verificar colisão
  if (aabb1.collidesAABB(aabb2)) {
    fill(255, 0, 0); // Preencher de vermelho se houver colisão
  } else {
    fill(0, 255, 0); // Preencher de verde se não houver colisão
  }

  // Desenhar um ponto entre as AABBs
  ellipse(mouseX, mouseY, 10, 10);
}
 */

/* let conjuntoPontos = [];
let cir

function setup() {
  createCanvas(400, 400);
  // Gere aleatoriamente uma nuvem de pontos
  conjuntoPontos = generateRandomPoint(10)
  cir = new Circle(conjuntoPontos);

  
  // Crie uma instância da classe Circle com a nuvem de pontos
  
}

function draw() {
    background(220);
    goCartesian()
    cir.draw()
  
  // Exiba o raio e o centro do círculo na console
  console.log("Centro:", cir.center); 
  // Desenhe os pontos
    conjuntoPontos.forEach(ponto => {
    fill(0,0,255)
    ellipse(ponto.x, ponto.y, 8, 8);
  })



  if (cir) {

    // Teste se alguns pontos estão dentro da esfera
    let testPoint1 = createVector(mouseXC, mouseYC);
    let testPoint2 = createVector(0, 0);

    if (cir.isInside(testPoint1)) {
      fill(255, 255, 0); // Cor vermelha
    } else {
      fill(0, 255, 0); // Cor verde
    }
    ellipse(testPoint1.x, testPoint1.y, 12, 12);

    if (cir.isInside(testPoint2)) {
      fill(255, 255, 0); // Cor vermelha
    } else {
      fill(0, 255, 255); // Cor verde
    }
    ellipse(testPoint2.x, testPoint2.y, 12, 12);
  }
} */

/* let conjuntoPontos1 = [];
let boundingSphere1

let conjuntoPontos2 = [];
let boundingSphere2;

function setup() {
  createCanvas(400, 400);

  // Gere aleatoriamente duas nuvens de pontos
  
  conjuntoPontos1 = generateRandomPoint(2)
  conjuntoPontos2 =generateRandomPoint(2)
  

  // Crie duas instâncias da classe BoundingSphere com as nuvens de pontos
  boundingSphere1 = new Circle(conjuntoPontos1);
  boundingSphere2 = new Circle(conjuntoPontos2);
}

function draw() {
  background(220);
  goCartesian()

  // Desenhe os pontos e as esferas envolventes
  boundingSphere1.draw(color(255,120,80))
  boundingSphere2.draw(color(50,200,130))  


  // Verifique a colisão entre as duas esferas
  if (boundingSphere1.collidesSphere(boundingSphere2)) {
    fill(255, 0, 0); // Cor vermelha se houver colisão
  } else {
    noFill();
  }

  // Desenhe as esferas
  ellipse(boundingSphere1.center.x, boundingSphere1.center.y, boundingSphere1.r * 2, boundingSphere1.r * 2);
  ellipse(boundingSphere2.center.x, boundingSphere2.center.y, boundingSphere2.r * 2, boundingSphere2.r * 2);
} */

/* let conjuntoPontos = [];
let obb;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  goCartesian()
  background(220);

  // Desenhe os pontos
  for (let ponto of conjuntoPontos) {
    ellipse(ponto.x, ponto.y, 8, 8);
  }

  // Desenhe a OBB se existir
  if (obb) {
    obb.draw();
  }
}

function mousePressed() {
  // Adicione um ponto à nuvem de pontos quando o mouse for pressionado
  conjuntoPontos.push(createVector(mouseXC, mouseYC));
}

function keyPressed() {
  // Se a tecla 'A' for pressionada, crie uma instância da classe OBB
  if (key === 'A' || key === 'a') {
    obb = new OBB(conjuntoPontos);
  }
} */


let obb;
let testPoint;

function setup() {
  createCanvas(400, 400);

  // Crie uma OBB com uma nuvem de pontos aleatórios
  const points = generateRandomPoints();
  obb = new OBB(points);

  // Crie um ponto aleatório para teste
  testPoint = createVector(random(width), random(height));

  noLoop();
}

function draw() {
  background(255);

  // Desenhe a OBB
  obb.draw();

  // Desenhe o ponto de teste
  fill(0);
  ellipse(testPoint.x, testPoint.y, 18, 18);

  // Verifique se o ponto de teste está dentro da OBB
  if (obb.isInside(testPoint)) {
    fill(255, 0, 0); // Ponto dentro da OBB, cor vermelha
  } else {
    fill(0, 255, 0); // Ponto fora da OBB, cor verde
  }

  // Desenhe um retângulo para indicar se o ponto está dentro ou fora
  rect(10, 10, 50, 50);
}

// Função auxiliar para gerar uma nuvem de pontos aleatórios
function generateRandomPoints() {
  const points = [];
  for (let i = 0; i < 4; i++) {
    points.push(createVector(random(width), random(height)));
  }
  return points;
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
    stroke(0, 255, 0); // Cor verde
    noFill();

    // Calcular os vértices da OBB
    let canto1 = add(this.center, mult(this.v, this.extends.y));
    canto1 = add(canto1, mult(this.u, this.extends.x));

    let canto2 = sub(this.center, mult(this.v, this.extends.y));
    canto2 = add(canto2, mult(this.u, this.extends.x));
    
    let canto3 = sub(this.center, mult(this.v, this.extends.y));
    canto3 = sub(canto3, mult(this.u, this.extends.x));

    let canto4 = add(this.center, mult(this.v, this.extends.y));
    canto4 = sub(canto4, mult(this.u, this.extends.x));

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
      console.log(center)
      
      let r_i= -Infinity
      nuvem_pontos.forEach(p =>{
        
        r_i = max(dist(center.x,center.y,p.x,p.y),r_i )
        
      })

      console.log(r_i)

      if (r_i<r){
        best_center = center
        r=r_i
      }

      
    }

    this.center=best_center
    this.r =r

  }
  draw(color = color(0,0,0)) {
    stroke(0, 0, 0); // Cor vermelha
    fill(color)
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
}


function generateRandomPoint(n){

  let p =[]

  for (i=0;i<n;i++){
    p.push(createVector(random(0,width)-(width/2),random(0,height)-(height/2)))
  }
  return p
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
}










class Line{

  //Construtor recebe objectos do tivo vec
  constructor(start_i,end_i,start_f,end_f,sw){

      this.color = color(0)
      this.strokeWeight = 1
      if (arguments.length ==2){
          this.start = start_i
          this.end =end_i
      }else if (arguments.length==3){

          this.start= createVector(start_i,end_i)
          this.end = createVector(start_f,end_f)
          this.n =start_f
      }
      else if (arguments.length==4){

        this.start= createVector(start_i,end_i)
        this.end = createVector(start_f,end_f)
      }else if(arguments.length ==5){
        this.start= createVector(start_i,end_i)
        this.end = createVector(start_f,end_f)
        this.strokeWeight= sw

      }

  }

  drawLine(){
    stroke(this.color)
    strokeWeight(this.strokeWeight)
    line(this.start.x,this.start.y,this.end.x, this.end.y)
  }

  crosses(l){
    let A = this.start
    let B = this.end
    let C = l.start
    let D = l.end
  
    let AB = p5.Vector.sub(B,A);
    let AC = p5.Vector.sub(C,A);
    let AD = p5.Vector.sub(D,A);
  
    let AB_x_AC = AB.cross(AC);
    let AB_x_AD = AB.cross(AD);
  
    let CD = p5.Vector.sub(D,C);
    let CA = p5.Vector.sub(A,C);
    let CB = p5.Vector.sub(B,C);
  
    let CD_x_CA = CD.cross(CA);
    let CD_x_CB = CD.cross(CB);
  
    //Verifica se não houve colisão
    if ((AB_x_AC.z * AB_x_AD.z > 0) || (CD_x_CA.z * CD_x_CB.z > 0)) {
  
      return false;
    //Se houver, verifica se os dois vetores não são colineares
    }else if(AB.cross(CD).mag()==0){
      return false
  
    }

    return true

  }

  intersection(l){
    let q = l.start
    let n = l.normal()
    let p1 = this.start
    let p2 = this.end


    return div(dot(sub(q,p1),n),dot(sub(p1,p2),n))
  }

  dir(){
    return sub(this.end,this.start)
  }

  normal(){
    let n =this.dir()

    let v =createVector(-n.y,n.x)

    return v.div(v.mag())
  }

  setColor(c){
    this.color=c
  }

  setStrokeWeight(s){
    if (s<0){
      return 
    }
    this.strokeWeight =s 
  }
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

