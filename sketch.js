var mouseXC
var mouseYC

var p=[]
var b

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

