# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [HTML file editing](#HTML)
* [CSS file editing](#CSS)
* [javascript file editing](#javascript)


## Instructions

  The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

  To get started, open `js/app.js` and start building out the app's functionality

  For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## HTML

  At first, i have to add some section tags by copy the last two sections with some update in its information as h1 tag text content and id, data-nav attributes.
  this is avery small step and didn't take a lot of time, but i want to mention it in this section.

## CSS

    in css file there is a lot of classes, so it takes some time for me to understand every class and where to work by compare it with html tags and class attributes to be aware of it.
    my small addition in this file is a new class called "active__link" that will be work in some specifications that i will mention in detail in javascript section.

## javascript

  woo this portion from the project was a bit large.
  it takes approximate 8 hour from hard work, let's talk about it briefly.
  it consist from two main parts:

  1. build the navigation bar in ul tag element by dynamic way.

      - const lst = document.querySelectorAll('section');.
      - all section elements are here in lst variable.
      - const ulst = document.querySelector('#navbar__list');.
      - the ul list to be appended by navigation list.
      - creating list item and text content and link for each section
      - assigning text to anchor (link) and append the anchor as a last child of list item.
      - by usig createDocumentFragment() function to create virtual DOM to avoid many reflows and repaint.
      - then append list to this document fragment and by finishing it, it will de appended to ul list once so there is only one reflow and one repaint.
      - adding event listener to the 'click' event on the anchor ; scroll until reach wanted section and change class attribute of the selected section to "your-active-class" {addEventListener()}.

  2. Set active section & active link.

      - Add event listener to a scroll event 'window.addEventListener('scroll',funstion)'.
      - Add class 'your-active-class' to section when near top of viewport.
      - Add class 'active__link' to link whose text Content is the same value of "data-nav" attribute of section that is in near top of viewport.
      - getting some information of sections layout by using 'getBoundingClientRect()' function and putting our condition according to it.
      - remove active class from all section except the active one by using 'classList.remove()','classList.add()'.
      - comparing text of each link from link list with the attribute value of active section to determine active link then make this link class attribute value 'active__link'.
