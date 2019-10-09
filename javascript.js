"use strict";

let articles = [
  {
    location : 'Paris',
    date : '2/4/2017',
    author : 'Nick',
    review : 'We absolutely loved this place'
  },
  {
    location : 'London',
    date : '1/3/2016',
    author : 'Ben',
    review : 'Lovely location'
  }
]

//document.getElementById("div1").addEventListener("load", displayArticle);

function displayArticle(){
  let elOne = document.getElementById("div1");
  let elTwo = document.createElement('div');
  
  elTwo.setAttribute("id", "article-box");  
  elOne.appendChild(elTwo);
}

window.onload = displayArticle;