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
   const div = document.createElement('div');                                // Creating div
   div.className = 'pagination';                                            // Giving class of pagination
   document.querySelector('.page').appendChild(div);                       // Appending to .page div
   const ul = document.createElement ('ul');                              // Creating ul
   div.appendChild (ul);                                                 // Appending to pagination div
   
   // Looping through to add <li> and <a> tags with page number text
   for (let x = 0; x < totalPages; x++) {
      let li = document.createElement("li");                        // Creating <li> tag       
      let a = document.createElement("a");                         // Creating <a> tag
      a.textContent = `${x + 1}`;                                 // Creating page numbers
      a.href = `#`;                                              // Creating link

      if ( x === 0) {
         a.className = 'active';                              // Makes current link class active                               
      }
      ul.appendChild (li);                                  
      li.appendChild (a);                                  // Adding link 
   }
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

showPage (listOfStudents,1);                                   // Calls first page of students when first loaded
appendPageLinks (listOfStudents);                             // Calling appendPageLinks function

/***  Code below still not totally working for exceeds

// Adding a search bar
let searchResults;
const searchStudents = document.createElement ('div');                                               // Creating div for search            
searchStudents.className = "student-search";                                                        // Giving Class Name
const pageHeader = document.querySelector ('.page-header');
pageHeader.appendChild(searchStudents);                                                           // Appending div to page header

const searchButton = document.createElement ('button');                                         // Creating button element
searchStudents.appendChild (searchButton);                                                     // Appending button to search 
searchButton.textContent = `Search`;                                                          // Labeling button as 'Search'
const inputText = document.createElement ('input');                                          // Creating input element for text box
searchStudents.appendChild (inputText);                                                     // Appending text box to search
inputText.setAttribute ('placeholder', "Search for students");                             // Puttinng "Search for students" as placeholder

const studentDetails = document.getElementsByClassName ('student-details');

const noResults = document.createElement ('p');
searchStudents.appendChild(noResults);

const textInput = document.querySelector ('input');
const button = document.querySelector ('button');

// Search Function
const searchInput = () => {
  /// let result = document.querySelectorAll('h3');
   if (inputText.value.length === 0) {
      for (let x = 0; x < listOfStudents.length; x++) {
         searchResults.push(listOfStudents[x]);
      }
   } else {
      for (let x = 0; x < listOfStudents; x++) {
         if (studentDetails[x].textContent.toLowerCase().includes(inputText.value.toLowerCase())) {
            searchResults.push(listOfStudents[x]);
         }
      }
   }
}
// Adding click eventListener for search button
searchButton.addEventListener ('click', (e) => {
  noResults.textContent = '';
  searchResults = [];
  searchInput();
  const page = document.querySelector('.page');
  const pagination = document.querySelector('.pagination');
  page.removeChild(pagination);

  for (let x = 0; x < listOfStudents; x++) {
     listOfStudents[x].style.display = 'none';
  }
  showPage (searchResults, 1);
  appendPageLinks (searchResults);

  if (searchResults.length === undefined) {
     noResults.textContent = `No results have been found.`
  }

} ) ;
// Adding keyup eventListener
searchButton.addEventListener ('keyup', (e) => {
   noResults.textContent = '';
   searchResults = [];
   searchInput();
   const page = document.querySelector('.page');
   const pagination = document.querySelector('.pagination');
   page.removeChild(pagination);
 
   for (let x = 0; x < listOfStudents; x++) {
      listOfStudents[x].style.display = 'none';
   }
   showPage (searchResults, 1);
   appendPageLinks (searchResults);
 
   if (searchResults.length === undefined) {
     noResults.textContent = `No results have been found.`
   }
 } ) ;
 ***/