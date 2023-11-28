
export class Ponto{

  
}



export class Line{

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