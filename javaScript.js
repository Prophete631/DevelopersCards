//where all the variables declaring variables

let students = {};  // variables that hold the students data


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

// where all functions or methods calling start

// calling the get student data methods to assign the data to student when window load
window.onload = ()=>{
  getStudentsData(students, "./people/students/students.json")
  console.log(students);
}
