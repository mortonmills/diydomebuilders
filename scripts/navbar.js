
  let navbar = document.getElementById("navbar")

  function arrCleaner(arr){
    //this cleans up the front and back of string with blank data
    if(arr[0] == "") arr.shift()
    if(arr[arr.length - 1] == "") arr.pop()
    return arr
  }


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



