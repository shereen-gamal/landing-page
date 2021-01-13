/*
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * Dependencies: None
 * JS Version: ES2015/ES6
 * JS Standard: ESlint
 */
/**
 * Define Global Variables
*/
const lst = document.querySelectorAll('section');// all sections are here.
const ulst = document.querySelector('#navbar__list');
//can also be written as 'const ulst = document.getElementById('navbar__list');'
//creating empty document fragment as a virtral DOM
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Begin Main Functions
*/

// build nav bar.
lst.forEach( function(el) {
// creating list item and text content and link for each section
  const listItem = document.createElement('li');
  const linktext = el.getAttribute('data-nav') ;
  const ancor = document.createElement('a');
// assign text to ancor(link) and append the ancor as a last child of list item then append list to the document fragment
  ancor.textContent= linktext;
  ancor.classList.add('menu__link');
  listItem.appendChild(ancor);
  fragment.appendChild(listItem);
//event listener to the click event on the ancor ; scroll until reach wanted section and change class attribute of the selected section to"your-active-class"
// Scroll to section on link click
// Scroll to anchor ID using scrollTO event
  ancor.addEventListener('click', function(){
    el.scrollIntoView({behavior:'smooth'});
    lst.forEach( function(x){
      x.classList.remove('your-active-class');
    });
    el.classList.add('your-active-class');
  });
});
// append our fragment to ul once.
ulst.appendChild(fragment);
// end of buliding nav bar.

// Add class 'your-active-class' to section when near top of viewport
//Add class 'active__link' to link whose textContent is the same "data-nav" section where near top of viewport
window.addEventListener('scroll',()=>{
  const lsst = document.querySelectorAll('section');
  lsst.forEach( z => {   //looping sections to know where is active one on viewport
    let view = z.getBoundingClientRect();
    if (view.top >= 0 && view.top <= 200 ){
      //getting some information of sections layout and putting our condition.
      //remove active class from all section except the active one.
      lsst.forEach( function(x){
          x.classList.remove('your-active-class');
        });
      z.classList.add('your-active-class');
      const lssst= document.querySelectorAll('a');// all nav links are here in lssst variable.
      let sDataNav = z.getAttribute('data-nav'); // getting attribute value of active section that is we get from the previos function.
      lssst.forEach(function(item){
        item.classList.remove('active__link');
        let atext = item.textContent;
        if (atext === sDataNav){ // comparing text of link with the attribute vale of active section.
          item.classList.add('active__link');// if the condition is true then make this link in class 'active__link'.
        }
      });
    }
  });
})

/**
 * End Main Functions
*/
