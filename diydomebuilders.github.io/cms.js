
function arrCleaner(arr){
//this cleans up the front and back of string with blank data
if(arr[0] == "") arr.shift()
if(arr[arr.length - 1] == "") arr.pop()
return arr
}

//CMS STUFF

function headlineMaker(headlineName, dateCreated, dateUpdated, headlineImage){

let pageContent = []

pageContent.push(`
<div class="headline" style="background-image: ${headlineImage}"> 
      <h1>${headlineName}</h1>
      <div class="datemade">created ${dateCreated} 
        <b>(updated ${dateUpdated})</b>
      </div>   
</div>
<br>
<br>
<br>
<br>
`)

return pageContent.join("\n")

}



function tableOfContentsMaker(tableOfContents){

let pageContent = []

tableOfContents = tableOfContents.split("\n")

pageContent.push(`
<div class=" textContent tableOfContents">
  TABLE OF CONTENTS
  <ol>`)

        tableOfContents.forEach(function(el){
	if (el) pageContent.push(`<li><a href="#${el.toLowerCase()}">${el}</a></li>`)
        })

  pageContent.push(`</ol>
</div>
        <br>
        <br>
        <br>
`)

return pageContent.join("\n")

}


function introMaker(initialContent, introContent){

let pageContent = []


pageContent.push(`
<div class="textContent">
<p>${initialContent}</p>
</div>
`)

pageContent.push(`
<div class="textContent">
${introContent}
</div>
`)

return pageContent.join("\n")

}



function sectionMaker(content){

let pageContent = []

for (let i = 0; i < content.length; i++){


 if((i+2) % 2 == 0){

         pageContent.push(`
<div class="sectioning">
<h2 id="${content[i].toLowerCase()}">${content[i]}</h2>
<h3></h3>
</div>
`)

}

          
else{
          pageContent.push(`
<div class="textContent">
${content[i]}
</div>
`)

}

}


return pageContent.join("\n")

}





//MAKERS

function figureMaker(figureContent){

let figures = []
let arr = figureContent.split("\n")

        arr.forEach(function(el){

let pear = el.split("\t")

if (el) figures.push(`
<figure>
  <a href="${pear[4]}">
  <img src="../images/${pear[0]}" 
       alt="${pear[1]}" 
       title="${pear[1]}">
  </a>
  <figcaption>
    <i>${pear[1]}</i>
    <br>
    <b>${pear[2]}</b>
    <br>
    ${pear[3]}
  </figcaption>
</figure>
`)
        })

return figures.join("\n")
}



    function tableArrayMaker(headers, names){
      let arr = []
      let arr2 = []

      arr.push(headers)

      for (let i = 0; i < names.length; i++){
        let arr2 = []

        arr2.push(i + 1)
        arr2.push(`<img src="../images/${names[i]}.png" alt="${names[i]}" title="${names[i]}">`)
        arr2.push(names[i])
        arr2.push(`<input id="${names[i]}" type="text" readonly size="2">`)

        arr.push(arr2)
      }

      return arr
    }



    function tableMaker(tableArray){
      let arr = []
      arr.push(`<table style=" display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;">`)

      for (let i = 0; i < tableArray.length; i++){

        arr.push(`<tr>`)

        tableArray[i].forEach(function(el){
          i == 0
          ? arr.push(`<th>${el}</th>`)
          : arr.push(`<td>${el}</td>`)
        })

        arr.push(`</tr>`)

      }
      
      arr.push(`</table>`)

      return arr.join("\n")
    }



function diyTableMaker(tableContent){

      let arr = []
      let tableArray = tableContent.split("\n")

//this cleans up the front and back of string with blank data
if(tableArray[0] == "") tableArray.shift()
if(tableArray[tableArray.length - 1] == "") tableArray.pop()


        arr.push(`<table style="width:100%" id="grouped-headers">`)

  arr.push(`<thead>`)
  arr.push(`<tr>`)

 let tableHeaders = tableArray[0].split("\t")

        tableHeaders.forEach(function(el){
        arr.push(`<th nowrap="">${el}<img src="../tablefilter/style/themes/updown.png"></th>`)
        })

  arr.push(`</tr>`)
  arr.push(`</thead>`)


arr.push(`<tbody style="text-align:left">`)
        
      for (let i = 1; i < tableArray.length; i++){ //starts at 1, dont need headers

let tableArray2 = tableArray[i].split("\t")

        arr.push(`<tr>`)

        tableArray2.forEach(function(el, num){

if(num == 9){
arr.push(`<td><img src="../16/${el}.png" alt="${el}" title="${el}"> ${el}</td>`)
}

else if(num == 12){
arr.push(`<td><a href="${el}">Go To</a></td>`)
}

else{
arr.push(`<td>${el}</td>`)
}

	 
        })

        arr.push(`</tr>`)

      }

      arr.push(`</tbody>`)
      arr.push(`</table>`)

      return arr.join("\n")

}

/*
let arr = []
  arr.push(`<table style="width:100%"id="grouped-headers">`)

  arr.push(`<thead>`)
  arr.push(`<tr>`)

  
  for (let [tabs, module] of Object.entries(data[0])) {
    arr.push(`<th nowrap="">${tabs}<img src="../tablefilter/style/themes/updown.png"></th>`)
  }

  
  arr.push(`</tr>`)
  arr.push(`</thead>`)

  arr.push(`<tbody style="text-align:left">`)

  
  data.forEach(function(el){

    arr.push(`<tr>`)

    for (let [tabs, module] of Object.entries(el)) {
      arr.push(`<td>${module}</td>`)

    }

    arr.push(`</tr>`)
  })
  
  arr.push(`</tbody>`)
  arr.push(`</table>`)


  document.getElementById("food").innerHTML = arr.join("\n");

*/
  
//EQUATIONS

let fixedPoint = 2

function circleArea(perimeter){
side = perimeter/(Math.PI*2)
area = Math.PI * (side**2)
return area.toFixed(fixedPoint)
}

function hexagonArea(perimeter){
side = perimeter/6
area = 3/2 * Math.sqrt(3) * side**2
return area.toFixed(fixedPoint)
}

function pentagonArea(perimeter){
side = perimeter/5
area = side**2 / 4 * Math.sqrt(25 + 10 * Math.sqrt(5))
return area.toFixed(fixedPoint)
}

function squareArea(perimeter){
side = perimeter/4
area = side**2
return area.toFixed(fixedPoint)
}

function triangleArea(perimeter){
side = perimeter/3
area = side**2 * Math.sqrt(3) / 4
return area.toFixed(fixedPoint)
}

