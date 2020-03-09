//where all the variables declaring variables
//@import {cd} from "./people/students/students.json";
('use strict')
let students = [
  {
    "email": "AinsIeyan@gmail.com",
    "firstName":"Ains",
    "lastName":"Ieyan",
    "myStyles": "letterStyle",
    "personalWebsites": ["www.Ains.com","https://github.com/Ains"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript", "photoshop"]
  },
  {
    "email": "AkonDon@gmail.com",
    "firstName":"Akon",
    "lastName":"Don",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.Don.com","https://github.com/Don"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Designer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3","AI", "photoshop"]
  },
  {
    "email": "BillSims@gmail.com",
    "firstName":"Bill",
    "lastName":"Sims",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.Sims.com","https://github.com/Sims"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Designer",
    "yearStartToEnd": ["2011", "2021"],
    "skills": ["AI", "photoshop"]
  },
  {
    "email": "DannyBryan@gmail.com",
    "firstName":"Bryan",
    "lastName":"Danny",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.Bryan.com","https://github.com/Bryan"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript"]
  },
  {
    "email": "ErickDynasty@gmail.com",
    "firstName":"Erick",
    "lastName":"Dynasty",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.Dynasty.com","https://github.com/Dynasty"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript", "photoshop"]
  },
  {
    "email": "JackRyan@gmail.com",
    "firstName":"Jack",
    "lastName":"Ryan",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.Ryan.com","https://github.com/Ryan"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript", "photoshop"]
  },
  {
    "email": "JessicaBella@gmail.com",
    "firstName":"Jessica",
    "lastName":"Bella",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.Jessica.com","https://github.com/Jessica"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Photoshop Master",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["photoshop"]
  },
  {
    "email": "ZackaryKelsy@gmail.com",
    "firstName":"Kelsy",
    "lastName":"Zackary",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.Kelsy.com","https://github.com/Kelsy"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript", "photoshop"]
  },
  {
    "email": "SussieDisney@gmail.com",
    "firstName":"Sussie",
    "lastName":"Disney",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["https://www.disney.com/","https://github.com/Disney"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript", "photoshop"]
  },
  {
    "email": "YohanAmazon@gmail.com",
    "firstName":"Yohan",
    "lastName":"Amazon",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["https://www.Amazon.com","https://github.com/Amazon"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript", "photoshop"]
  },
  {
    "email": "kannyDestroys@gmail.com",
    "firstName":"kanny",
    "lastName":"Destroys",
    "myStyles": "cssCardStyle",
    "personalWebsites": ["www.kanny.com","https://github.com/kanny"],
    //"personalPhoto": "./assets/photoOfStudents/",
    "title": "Web Developer",
    "yearStartToEnd": ["2020", "2021"],
    "skills": ["html5", "css3", "javascript", "photoshop","sass"]
  }
]// variables that hold the students data


let section = document.getElementById("cardSec");
let search = document.getElementById("search_student");
let studentCard = document.getElementsByClassName("article");
let options = document.getElementById("options");
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
let the_photo = (stud_fullName)=> {
  let student_photo = document.createElement("IMG");
  student_photo.setAttribute("src", `./assets/photoOfStudents/${stud_fullName}.jpg`);

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
// adding email functions
let studentEmail = (email)=>{
  let emailLink = document.createElement("A");
  let textLink = document.createTextNode("@");

  emailLink.href= `mailto:${email}`;
  emailLink.appendChild(textLink);
  return emailLink;
}
// create full name section
let full_name= (firstName_v, lastName_v, email)=> {
  let name = document.createElement("DIV");
  let p_firstName = document.createElement("P");
  let p_lastName = document.createElement("P");
  let firstName = document.createTextNode(firstName_v);
  let lastName = document.createTextNode(lastName_v);

  p_firstName.appendChild(firstName);
  p_lastName.appendChild(lastName);
  p_lastName.appendChild(studentEmail(email));
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

// create the website section and pull the web site from the student
let the_website = (links)=> {
  let website = document.createElement("DIV");
  let p_gitHub = document.createElement("P");
  let p_myWebsite = document.createElement("P");
  let a_tag_git = document.createElement("A");
  let a_tag_website = document.createElement("A");
  let git_link = document.createTextNode("github");
  let my_website_link = document.createTextNode("my website");

  //a_tag_git.href = `${links[1]}`;
  //a_tag_website.href = `${links[0]}`;
  a_tag_website.setAttribute("href", `${links[0]}`);
  a_tag_git.setAttribute("href", `${links[1]}`);


  a_tag_git.appendChild(git_link);
  p_gitHub.appendChild(a_tag_git);

  a_tag_website.appendChild(my_website_link);
  p_myWebsite.appendChild(a_tag_website);

  website.classList.add("website");
  website.appendChild(p_gitHub);
  website.appendChild(p_myWebsite)

  return website;
}
// method that pull the logos fot the skills from assest
let create_img_element = (el)=>{
  let img = document.createElement("img");
  img.setAttribute("src", `./assets/logos/${el}`);
  return img;
}
// method that add the skills on the card
let create_skills = (logos)=> {
  let skills = document.createElement("DIV");
  for(let i = 0; i<logos.length; i++){
    skills.appendChild(create_img_element(`${logos[i]}.png`));
  }
  skills.classList.add("skills");
  return skills;
}

// create a card
let create_cards =(title_v, firstName_v, lastName_v, email, theYears, website, skills, studentStyle)=> {
  //declaring and creating all the element to create a card
  let articles = document.createElement("ARTICLE");
  let cards_container = document.createElement("DIV");
  let card_frame = document.createElement("DIV");

  // adding the elements to the card
  card_frame.appendChild(the_photo(`${firstName_v}${lastName_v}`));
  card_frame.appendChild(create_title(title_v));
  card_frame.appendChild(full_name(firstName_v, lastName_v, email));
  card_frame.appendChild(both_years(theYears));
  card_frame.appendChild(the_website(website));
  card_frame.appendChild(create_skills(skills));

  cards_container.appendChild(card_frame);
  articles.appendChild(cards_container);

  //classes to DI
  card_frame.classList.add("card_frame");
  card_frame.classList.add(`${studentStyle}`);
  cards_container.classList.add("cards_container");
  articles.classList.add("article");
  return articles;
}

// cresting the the function to distrubute the card on the app
let addAllcard = (title_v, firstName_v,lastName_v, email, theYears,website, skill, studentStyle)=> {
  return section
  .appendChild(create_cards(title_v,
    firstName_v,
    lastName_v,
    email,
    theYears,
    website,
    skill,
    studentStyle
  ));
}

//creating methods to remove card on document
let removeCard = ()=>{
  studentCard = document.getElementsByClassName("article");

  for(let i = studentCard.length-1; i >= 0; i--){
    console.log(studentCard[i]);
    section.removeChild(studentCard[i])

  }
}
// where all functions or methods calling start

// calling the get student data methods to assign the data to student when window load
window.onload = ()=>{

  search.addEventListener("input", ()=>{
    removeCard();
    let filteredStudent = students.filter(student =>{
      let names = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`

      if(student !== undefined && names.includes(search.value.toLowerCase())){
        addAllcard(student.title,
          student.firstName,
          student.lastName,
          student.email,
          student.yearStartToEnd,
          student.personalWebsites,
          student.skills,
          student.myStyles
        );
      }
    })
  })
students.map(student =>{
  addAllcard(student.title,
    student.firstName,
    student.lastName,
    student.email,
    student.yearStartToEnd,
    student.personalWebsites,
    student.skills,
    student.myStyles
  );
})
}
