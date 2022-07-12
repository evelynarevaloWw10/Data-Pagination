/*Treehouse Techdegree:
FSJS Project-2 - Data Pagination and Filtering
*/

// created function: showPage to display page of nine students and passed paramenters list/page
  function showPage(list, page) {
  
   //created variables starIndex/endIndex to represent index for first and last students
  let startIndex = (page * 9) - 9; 
  let endIndex = (page * 9);
  
  //created studentList to assign class element student-list and set it to an empty string
  let studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";
  let html = "";

  /* for loop was made to go over 'list' parameter and conditional statement was made to check that 'i'
   was greater than or equal to startInde and less than endIndex if condition was meet we created the DOM elements 
  */
   for (let i = 0; i <list.length; i++) {
      if (i >= startIndex && i < endIndex){
        html +=`
      
    <li class="student-item cf"> 
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3>"${list[i].name.first} ${list[i].name.last}"</h3>
            <span class="email">"${list[i].email}"</span>
            </div>
            <div class="joined-date">
               <span class="date">Joined ${list[i].registered.date}</span>
         </div>
      </li> `;
      }
    }
      studentList.insertAdjacentHTML("beforeend",html); //inserted template literal into DOM using ADJACENT Method
 };
    showPage(data,1); //called function to check that first nine students displayed 


//Createe the `addPagination` function
//This function will create and insert/append the elements needed for the pagination buttons

function addPagination (list) {
   let numOfPages = Math.ceil(list.length/9);  //created variable to calculate number of pages
   let linkList = document.querySelector(".link-list"); //assigned element of link-list to new var. linkList
   linkList.innerHTML = ""; // set varible to an empty string

//looping over the pages that are needed, created varaible and assingened it the DOM elements we created
   for (i = 1; i <= numOfPages; i++) { 
   let button = ` 
       <li>
          <button type="button">${i}</button>
       </li>
      `;
   linkList.insertAdjacentHTML("beforeend", button); // inserted new template literal to the DOM of linkList by adjacent method

    
      let firstBtn = document.querySelector("button") // assigned first button element of button
      firstBtn.className = ("active"); // added active class to firstBTN with className method 
      linkList.addEventListener("click", (e) => { // event handler created  here
   
         if(e.target.tagName === "BUTTON") { // 
      let activeBtn = document.querySelector(".active"); //if condition is meet, active class id assigned to activeBtn
       activeBtn.className = ""; // set to an empty string 
       e.target.className = 'active'; //adding active class to the button that was clicked 
       showPage(list, e.target.textContent); //call showPage function
         }
         
      })

   }; 
};
// Called functions
showPage(data,1);
addPagination(data);