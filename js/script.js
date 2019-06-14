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

   showPage (listOfStudents,1);                                                         // Calls first page of students when first loaded

  // Listens for page links to be clicked and takes you to each page with new list of 10 students
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
      showPage (listOfStudents,pageNumber);                       // Calling showPage function
   });
}

appendPageLinks (listOfStudents);                              // Calling appedPageLinks function





/***  Still working on exceeds
// Adding a search bar

let result;
const searchStudents = document.createElement ('div');                      
searchStudents.className = "student-search";
const pageHeader = document.querySelector ('.page-header');
pageHeader.appendChild(searchStudents);

const searchButton = document.createElement ('button');
searchStudents.appendChild (searchButton);
searchButton.textContent = `Search`;
const inputText = document.createElement ('input');
searchStudents.appendChild (inputText);
inputText.setAttribute ('placeholder', "Search for students");

const textInput = document.querySelector ('input');
const button = document.querySelector ('button');



// Search Function

const searchInput = (input, list) => {
   let result = [];

   for (let x =0 ; x < list.length; x++) {
      list[x].style.display = 'none';


      result.push(list[x]);


      showPage (result, 1);
      appendPageLinks (result);
   }
}



button.addEventListener ('click', (e) => {
   e.preventDefault();
   searchInput (inputText, listOfStudents);
} ) ;

button.addEventListener ('keyup', () => {
   searchInput (inputText, listOfStudents);
} ) ;

***/