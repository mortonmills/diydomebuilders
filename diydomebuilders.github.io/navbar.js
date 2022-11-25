
  let navbar = document.getElementById("navbar")

  function arrCleaner(arr){
    //this cleans up the front and back of string with blank data
    if(arr[0] == "") arr.shift()
    if(arr[arr.length - 1] == "") arr.pop()
    return arr
  }
  /*
navbar.innerHTML = `

<hr>
<div class="navbar">

<div class="dropdown">
<button class="dropbtn">Library</button>
<div class="dropdown-content">
<a href="../html/aboutcontact.html">About/Contact</a>
<a href="../html/diydomebuilders.html">diydomebuilders+</a>
<a href="../html/furtherreading.html">Further Reading</a>
  </div>
  </div>

<div class="dropdown">
<button class="dropbtn">Design</button>
<div class="dropdown-content">
<a href="../html/whatsthebestshape.html">Why Domes</a>
<a href="../html/introtogeodesics.html">Why Geodesic</a>
<a href="../html/frame.html">Choosing A Design</a>
<a href="../html/covering.html">Covering/Add-Ons</a>
  </div>
  </div>

<div class="dropdown">
<button class="dropbtn">Build</button>
<div class="dropdown-content">
<a href="../html/buyingconduit.html">Buying Materials</a>
<a href="../html/makingstruts.html">Making Struts</a>
<a href="../html/covering2.html">Covering/Add-On's2</a>
<a href="../html/anchoring.html">Assembly</a>
  </div>
  </div>

<div class="dropdown">
<button class="dropbtn">Offgrid</button>
<div class="dropdown-content">
<a href="../html/goingoffgrid.html">Going Offgrid</a>
  </div>
  </div>

<div class="dropdown">
<button class="dropbtn">Calculators</button>
<div class="dropdown-content">
<a href="../html/1v.html">1V</a>
<a href="../html/2v.html">2V</a>
<a href="../html/3v.html">3V</a>
<a href="../html/4v.html">4V</a>
  </div>
  </div>


  </div>
<hr>

`
*/

  let navCategories = `
Library
Design
Build
Offgrid
Calculators
`

  let navPages = `
Library	About/Contact	aboutcontact
Library	diydomebuilders+	diydomebuilders
Library	Further Reading	furtherreading
Library	Dirty Guide	dirtyguide
Design	What's the Best Shape?	whatsthebestshape
Design	Intro to Geodesics	introtogeodesics
Design	Choosing A Design	frame
Design	Covering/Add-Ons	covering
Build	Buying Conduit	buyingconduit
Build	Making Struts	makingstruts
Build	Covering2	covering2
Build	Assembly	anchoring
Offgrid	Going Offgrid	goingoffgrid
Calculators	1V	1v
Calculators	2V	2v
Calculators	3V	3v
Calculators	4V	4v
`

  function navbarMaker(categories, pages){
    let nav = []

    categories = arrCleaner(categories.split("\n"))
    pages = arrCleaner(pages.split("\n"))




    nav.push(`
<hr>
<div class="navbar">
`)


    categories.forEach(function (el) {

      if (el) nav.push(`<div class="dropdown">
<button class="dropbtn">${el}</button>
<div class="dropdown-content">`)

      pages.forEach(function (el2, i) {

        let pear = el2.split("\t")

        if (el == pear[0]) {


          if (el2)  nav.push(`<a href="../html/${pear[0].toLowerCase()}-${pear[2]}.html">${pear[1]}</a>`)

        }
      })

      nav.push(`
  </div>
  </div>
`)


    })

    nav.push(`
  </div>
<hr>
`)



    return nav.join("\n")

  }

  navbar.innerHTML = navbarMaker(navCategories, navPages)
  /* */



  /*
*/



