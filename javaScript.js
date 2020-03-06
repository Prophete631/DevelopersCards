//where all the variables declaring variables
//@import {cd} from "./people/students/students.json";
let students = [
  {
    "email": "myemail@gmail.com",
    "firstName":"John",
    "lastName":"Doe",
    "github": "https://github.com/doe",
    "myStyles": "cssCardStyle",
    "personalWebsite": "www.doe.com",
    "personalPhoto": "./assests/personalPhoto",
    "title": "Web Developer",
    "yearStartToEnd": "['2020', '2021']",
    "skills": ["html", "css", "javascript", "phtotoshop"]
  },

  {
    "email": "myemail@gmail.com",
    "firstName":"Anna",
    "lastName":"Smith",
    "github": "https://github.com/AnSmith",
    "myStyles": "cssCardStyle",
    "personalWebsite": "www.myWebSmite.com",
    "personalPhoto": "./assests/personalPhoto",
    "title": "Web Developer",
    "yearStartToEnd": "['2020', '2021']",
    "skills": ["html", "css", "javascript", "phtotoshop"]
  },

  {
    "email": "myemail@gmail.com",
    "firstName":"Peter",
    "lastName":"Jones",
    "github": "https://github.com/pjones",
    "myStyles": "cssCardStyle",
    "personalWebsite": "www.myjones.com",
    "personalPhoto": "./assests/personalPhoto",
    "title": "Web Developer",
    "yearStartToEnd": "['2020', '2021']",
    "skills": ["html", "css", "javascript", "phtotoshop"]
  }
]// variables that hold the students data
let section = document.getElementById("cardSec");

// where all functions or methods declarations start

// methods that get the data and assign it to a variable
// let getStudentsData = (valueTo, vallueFrom)=>{
//   console.log("fetch");
//   fetch(vallueFrom)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return students = Object.assign(valueTo, data);
//     });
// }
// create photo sectiion
let the_photo = ()=> {
  let student_photo = document.createElement("IMG");
  student_photo.setAttribute("src", "./assets/photoOfStudents/k.jpg");

  return student_photo;
}
// create tiltle section
let create_title = (result)=> {
  let  h1_title = document.createElement("H1");
  let  title = document.createTextNode(result);
  h1_title.classList.add("title");
  h1_title.appendChild(title);
  return h1_title;
}
// create full name section
let full_name= (firstName_v, lastName_v)=> {
  let name = document.createElement("DIV");
  let p_firstName = document.createElement("P");
  let p_lastName = document.createElement("P");
  let firstName = document.createTextNode(firstName_v);
  let lastName = document.createTextNode(lastName_v);

  p_firstName.appendChild(firstName);
  p_lastName.appendChild(lastName);
  name.appendChild(p_firstName);
  name.appendChild(p_lastName);
  name.classList.add("name");

  return name;
}
// create years section
let both_years = (theYears)=> {
  let years = document.createElement("DIV");
  let p_startYear = document.createElement("P");
  let p_endYear = document.createElement("P");
  let sart_year = document.createTextNode(`${ theYears[0] }`);
  let end_year = document.createTextNode(`${ theYears[1] }`);
  p_startYear.appendChild(sart_year);
  p_endYear.appendChild(end_year);

  years.classList.add("years")
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

  website.classList.add("website");
  website.appendChild(p_gitHub);
  website.appendChild(p_myWebsite)

  return website;
}
let create_img_element = (el)=>{
  let img = document.createElement("img");
  img.setAttribute("src", `./assets/logos/${el}`);
  return img;
}
let create_skills = (ele)=> {
  let skills = document.createElement("DIV");
  skills.classList.add("skills");
  skills.appendChild(create_img_element(`html5.png`));
  return skills;
}


let create_cards =(title_v, firstName_v, astName_v, theYears)=> {
  //declaring and creating all the element to create a card
  let articles = document.createElement("ARTICLE");
  let cards_container = document.createElement("DIV");
  let card_frame = document.createElement("DIV");

  // adding the elements to the card
  card_frame.appendChild(the_photo());
  card_frame.appendChild(create_title(title_v));
  card_frame.appendChild(full_name(firstName_v, astName_v));
  card_frame.appendChild(both_years(theYears));
  card_frame.appendChild(the_website());
  card_frame.appendChild(create_skills());

  cards_container.appendChild(card_frame);
  articles.appendChild(cards_container);

  //classes to DI
  card_frame.classList.add("card_frame");
  cards_container.classList.add("cards_container");
  //section.appendChild(articles);

  return articles;
}

// cresting the the function to distrubute the card on the app
let addAllcard = (title_v, firstName_v,lastName_v, theYears)=> {
  console.log("allcard");
  return section
  .appendChild(create_cards(title_v,
    firstName_v,
    lastName_v,
    theYears
  ));
}
// where all functions or methods calling start

// calling the get student data methods to assign the data to student when window load
window.onload = ()=>{
  //   while(sutdents.length == 0){
  //   getStudentsData(students, "./people/students/students.json");
  // }
  addAllcard(
    students[0].title,
    students[0].firstName,
    students[0].lastName,
    students[0].yearStartToEnd);
    console.log(students);
  }
