//where all the variables declaring variables

let students = {};  // variables that hold the students data
let section = document.getElementById("cardSec");

// where all functions or methods declarations start

// methods that get the data and assign it to a variable
let getStudentsData = (valueTo, vallueFrom)=>{
  fetch(vallueFrom)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return students = Object.assign(valueTo, data);
    });
}
// create photo sectiion
let the_photo = ()=> {
  let student_photo = document.createElement("img");
  return student_photo;
}
// create tiltle section
let createTitle =()=> {
  let  h1_title = document.createElement("h1");
  let  title = document.createTextNode("Web developer");
    h1_title.classList.add("title");
    h1_title.appendChild(title);
   return title;
}
// create full name section
let full_name= ()=> {
  let name = document.createElement("DIV");
  let p_firstName = document.createElement("P");
  let p_lastName = document.createElement("P");
  let firstName = document.createTextNode("Jenny");
  let lastName = document.createTextNode("Cesar");
  p_firstName.appendChild(firstName);
  p_lastName.appendChild(lastName);
  name.appendChild(p_firstName);
  name.appendChild(p_lastName);

  return name;
}
// create years section
let both_years = ()=> {
  let years = document.createElement("DIV");
  let p_startYear = document.createElement("P");
  let p_endYear = document.createElement("P");
  let sart_year = document.createTextNode("2020");
  let end_year = document.createTextNode("2021");
  p_startYear.appendChild(startYear);
  p_endYear.appendChild(endYear);

  years.appendChild(p_startYear);
  years.appendChild(p_endYear);

  return years;
}

// create the website section
let the_website = ()=> {
  let website = document.createElement("DIV");
  let p_gitHub = document.createElement("P");
  let p_myWebsite = document.createElement("P");
  let a_tag_git = document.createElement("A");
  let a_tag_website = document.createElement("A");
  let git_link = document.createTextNode("github");
  let my_website_link = document.createTextNode("my website");

  a_tag_git.href = "https://github.com/Prophete631/DevelopersCards";
  a_tag_website.href = "https://github.com/Prophete631/DevelopersCards";

  a_tag_git.appendChild(git_link);
  p_gitHub.appendChild(a_tag_git);

  a_tag_website.appendChild(my_website_link);
  p_myWebsite.appendChild(a_tag_website);

  website.appendChild(p_gitHub);
  website.appendChild(p_myWebsite)

  return website;
}


let createCards =()=> {
    //declaring and creating all the element to create a card
  let articles = document.createElement("ARTICLE");
  let cards_container = document.createElement("DIV");
  let card_frame = document.createElement("DIV");


let skills = document.createElement("DIV");


  articles.appendChild(cards_container);
  cards_container.style.backgroundColor ="blue";
  cards_container.style.width ="200px";
  cards_container.style.height ="200px";

  section.appendChild(articles);
}

// where all functions or methods calling start

// calling the get student data methods to assign the data to student when window load
window.onload = ()=>{
  getStudentsData(students, "./people/students/students.json");
  createCards();
  console.log(students);
}
