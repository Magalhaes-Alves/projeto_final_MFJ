
export let mouseXC=0,mouseY=0

export function goCartesian()
{
  background(255)

  mouseXC = mouseX - width/2
  mouseYC = height/2 - mouseY
    
  translate(width/2,height/2)
  scale(1,-1,1)  
}

export function grabMouse()
{
  mouseXC = mouseX - width/2
  mouseYC = height/2 - mouseY
}

export function texto(str,x,y)
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

function grabMouse()
{
  mouseXC = mouseX - width/2
  mouseYC = height/2 - mouseY
}