
let radius, area, side, base, semi;
let mouse = document.getElementById("mouse");

//Group 1

function  tri(perimeter){
   side = perimeter/3 
   area = side**2 * Math.sqrt(3) / 4  
  return area
}

function square(perimeter){
  side = perimeter/4
  area = side**2
  return area
}

function penta(perimeter){
  side = perimeter/5 
  area = side**2 / 4 * Math.sqrt(25 + 10 * Math.sqrt(5)) 
  return area
}

function hexa(perimeter){
  side = perimeter/6
  area = 3/2 * Math.sqrt(3) * side**2
  return area
}

function circle(perimeter){
  radius = perimeter/(Math.PI*2)
  area = Math.PI * (radius**2)
  return area
}
  

//Group 2
function tri2(perimeter){
side = perimeter/2
area =side**2 * Math.sqrt(3) / 4
  return area
}


function sq2(perimeter){
side = perimeter/2
area = side**2 / 2
  return area
}

function sq3(perimeter){
side = (perimeter * (4/3))/4 ;
area = side**2
  return area
}


function pent2(perimeter){
 side = perimeter/2;
 base = side / 2 * ( 1 + Math.sqrt(5) );
 semi = (perimeter + base)/2;
 area = Math.sqrt(semi * (semi - side)*(semi - side)*(semi - base));
return area
}

function pent3(perimeter){
b = perimeter/3
a = b / 2 * ( 1 + Math.sqrt(5) )
height = 1/2*Math.sqrt(4*b**2-(a-b)**2);
area = ( a + b ) / 2 * height	
  return area
}

function pent4(perimeter){
side = (perimeter * (5/4))/5 
area = side**2 / 4 * Math.sqrt(25 + 10 * Math.sqrt(5))
  return area
}


function hex2(perimeter){
 side = perimeter/2;
 base = Math.sqrt(3) * side;
 height = Math.sqrt(( 4 * side**2 - base**2 ) / 4)
 area = height * base / 2

return area
}

function hex3(perimeter){
b = perimeter/3
a = b * 2
height = 1/2*Math.sqrt(4*b**2-(a-b)**2)
area = ( a + b ) / 2 * height	
  return area

}

function hex4(perimeter){
  side = perimeter/4
  base = Math.sqrt(3) * side
  area = side*base + (side/2) * side/2
  return area
}

function hex5(perimeter){
side = (perimeter * (6/5))/6
area = 3/2 * Math.sqrt(3) * side**2
  return area
}

//Group 3

function ritri(perimeter){
  side = perimeter * 2 / 3
  height = Math.sqrt(3) / 2 * side
  area = (side**2 * Math.sqrt(3) / 4)/2
  return area
}

function rect(perimeter){
side = perimeter/4
base = side * 2
area = side * base
return area
}

function penthalf(perimeter){
side = perimeter * 2 / 5
height = side / 2 * Math.sqrt(5) + 2 * Math.sqrt(5)
  area = (side**2 / 4 * Math.sqrt(25 + 10 * Math.sqrt(5)))/2
return area
}

function hexhalf(perimeter){
side = perimeter * 2 / 6
base = side * 2
area = (3/2 * Math.sqrt(3) * side**2) / 2
return area
}



function semcirc(perimeter){
radius = perimeter/Math.PI
area = radius*radius*Math.PI/2
  return area
}

  
function truthMe(shape){
  let mist = [];
  for(let i = 1;i <= 10; i++){
    mist.push(i+":"+Math.round(shape(i)*1e4)/1e4)
  }
  mouse.value = mist.join("\n");
  
  }