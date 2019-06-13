/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//Adding global variables for the student list and the number of students per page to show

let listOfStudents = document.querySelectorAll('.student-item');
//console.log(listOfStudents);
const itemsPerPage = 10;


// Function to only show 10 students at a time, hiding the rest of the student list

const showPage = (list, page) => {
   let indexStart = (page * itemsPerPage) - itemsPerPage;          // Points to the first student based on their index number
   let indexEnd = page * itemsPerPage;                            // Points to the last student based on their index number

   for (let x = 0; x < list.length; x++) {                        // Looping through student list
      if (x >= indexStart && x <indexEnd) {
         list[x].style.display = " ";                            // Displays student list between indexStart and indexEnd
      } else {
         list[x].style.display = "none";                         // Hides all other students
      }
   }
}
//showPage(listOfStudents, 5);


// Function to create, append, and show pagination links

const 




// Remember to delete the comments that came with this file, and replace them with your own code comments.