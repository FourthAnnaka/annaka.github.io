console.log('hello, books');

// load the airtable library
let Airtable = require("airtable");
console.log(Airtable);

// add your API Key 
let base = new Airtable({apiKey: 'keyxzRGZmL7bzSL5C'}).base('appaAeT1Q4EqQ5SKz');

// get our collection base, select all records
base("2021").select({sort:[{field: "date_complete", direction: "desc"}]
}).eachPage(gotPageOfBooks, gotAllBooks); 

//an empty array for the data 
let bookshelf = [];

// callback function that recieves our data 
function gotPageOfBooks(records, fetchNextPage) {
    console.log("gotPageOfBooks()");
    // add records from this page to bookshelf array
    bookshelf.push(...records);
    // request more pages
    fetchNextPage();
  }

  
// call back function that is called when all pages are loaded
function gotAllBooks(err) {
    console.log("gotAllBooks()");

      // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading books");
    console.error(err);
    return;
  }

  // call function to show the books
  consoleLogBooks();
  showBooks();
}

// just loop through the books and console.log them
function consoleLogBooks() {
    console.log("consoleLogBooks()");
    bookshelf.forEach((book) => {
      console.log("Book: ", book);
    });
  }

// loop through the books, create an h2 for each one, and add it to the page
function showBooks() {
    console.log("showBooks()");
   
    bookshelf.forEach((book) => {
        //creating a new book container where info will go 
        let bookContainer = document.createElement("div");
        bookContainer.classList.add("title-circle");
        document.querySelector(".titles").append(bookContainer)
        
        // add titles
        var bookTitle = document.createElement("h2");
        bookTitle.classList.add("book-title")
        bookTitle.innerText = book.fields.title
      
        bookContainer.append(bookTitle)
        bookContainer.addEventListener("click", () => {
        showBookDetails(book, bookContainer);
        });

    });
  }


// show book data 
function showBookDetails(book, bookContainer) {
  console.log("showBookDetails()", bookContainer);

//find the book detail element 
  const bookData = document.getElementById("book-data");

  // populate the right hand column
  bookData.getElementsByClassName("book-cover")[0].src = book.fields.cover[0].url;
  bookData.getElementsByClassName("mobile-book-cover")[0].src = book.fields.cover[0].url;
  // bookData.getElementsByClassName("data-title")[0].innerText = book.fields.title;
  bookData.getElementsByClassName("data-pubdesc")[0].innerText = book.fields.pub_desc;
  bookData.getElementsByClassName("data-pubdate")[0].innerText = book.fields.pub_date;



  //remove active class from right col title circles
  const titles = document.getElementsByClassName("title-circle"); 
  // const titleCircle = titles.getElementsByClassName("active");
  for (const circle of titles) {
    circle.classList.remove("active");
  }

  //add active class to clicked right col title circle
  bookContainer.classList.add("active");
  bookData.classList.remove("hidden");
}




//Make the DIV element draggagle:
dragElement(document.getElementById("drag-me"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}