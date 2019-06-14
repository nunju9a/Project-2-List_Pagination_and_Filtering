/******************************************
Treehouse Techdegree:
FSJS Project 2 - List Filter and Pagination
******************************************/


//Adding global variables for the student list and number of items per page to show

let listOfStudents = document.querySelectorAll('.student-item');
const itemsPerPage = 10;


// Function to only show 10 students at a time, hiding the rest of the student list

const showPage = (list, page) => {
   let indexStart = (page * itemsPerPage) - itemsPerPage;                 // Points to the first student based on their index number
   let indexEnd = page * itemsPerPage;                                   // Points to the last student based on their index number

   for (let x = 0; x < list.length; x++) {                             // Looping through student list
      if (x >= indexStart && x <indexEnd) {
         list[x].style.display = "block";                            // Displays student list between indexStart and indexEnd
      } else {
         list[x].style.display = "none";                            // Hides all other students
      }
   }
}


// Function to create, append, and show pagination links

const appendPageLinks = (list) => {
   let totalPages = Math.ceil(list.length/itemsPerPage);                         // Calculates total number of pages needed 
   
   // Creating div and ul for links
   const div = document.createElement('div');                                 // Creating div
   div.className = 'pagination';                                            // Giving class of pagination
   document.querySelector('.page').appendChild(div);                       // Appending to .page div
   const ul = document.createElement ('ul');                              // Creating ul
   div.appendChild (ul);                                                 // Appending to pagination div
   
   // Looping through to add <li> and <a> tags with page number text
   for (let x = 0; x < totalPages; x++) {
      let li = document.createElement("li");                        // Creating <li> tag       
      let a = document.createElement("a");                         // Creating <a> tag
      a.textContent = `${x + 1}`;                                 // Adding page numbers
      a.href = `#`;

      if ( x === 0) {
         a.className = 'active';                               
      }
      ul.appendChild (li);
      li.appendChild (a);
   }
 
  // Listens for page links to be clicked 
   ul.addEventListener ('click', (e) => {
      const link = e.target;
      let pageNumber;
      if (link.tagName === 'A') {
         pageNumber = e.target.textContent;                             // Get page number from pressed link    
         const links = document.querySelectorAll ('.pagination a');

         for (let x = 0; x < links.length; x++) {
            links [x].classList.remove ('active');                   // Removes active class from all other links
         }
         link.className = "active";                                 // Makes current link active
         
      } 
      showPage (list,pageNumber);                                // Calling showPage function
   });
}


appendPageLinks (listOfStudents);


