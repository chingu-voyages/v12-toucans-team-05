"use strict";

let articles = [
  {
    location : 'Paris',
    date : '2nd of June 2016',
    author : 'Nick',
    review : 'We absolutely loved this place',
    img : 'Paris-Pic.jpg'
  },
  {
    location : 'London',
    date : '1/3/2016',
    author : 'Ben',
    review : 'Lovely location',
    img : 'London-Pic.jpg'
  }
]

function selectArticles(){
  for(let i=0;i<articles.length;i++){
    displayArticle(i);
  }
}

function displayArticle(artNum){
  let elHook = document.getElementById("search-result");
  
  //Create article-box div
  let elAdd = document.createElement('article');
  elAdd.setAttribute("class", "article-box");

  //Create text-box div
  let elText = document.createElement('section');
  elText.setAttribute("class", "text-box");
  elAdd.appendChild(elText);

  //Create location-box div within text-box div
  let elLocation = document.createElement('div');
  elLocation.setAttribute("class", "location-box");
  elText.appendChild(elLocation);

  let textLocation  = document.createElement('p');
  let stringLocation = articles[artNum].location;
  textLocation.append(document.createTextNode(stringLocation));
  textLocation.setAttribute("class", "location-text");
  elLocation.appendChild(textLocation);

  //Create date-box div within text-box div
  let elDate = document.createElement('time');
  elDate.setAttribute("class", "date-box");
  elText.appendChild(elDate);

  let textDate  = document.createElement('p');
  let stringDate = articles[artNum].date;
  textDate.append(document.createTextNode(stringDate));
  textDate.setAttribute("class", "date-text");
  elDate.appendChild(textDate);
  
  //Create review-box div within text-box div
  let elReview = document.createElement('div');
  elReview.setAttribute("class", "review-box");
  elText.appendChild(elReview);    

  let textReview  = document.createElement('p');
  let stringReview = articles[artNum].review;
  textReview.append(document.createTextNode(stringReview));
  textReview.setAttribute("class", "review-text");
  elReview.appendChild(textReview);

  //Create author-box div within text-box div
  let elAurthor = document.createElement('div');
  elAurthor.setAttribute("class", "author-box");  
  elText.appendChild(elAurthor);

  let textAurthor  = document.createElement('p');
  let stringAurthor = articles[artNum].author;
  textAurthor.append(document.createTextNode(stringAurthor));
  textAurthor.setAttribute("class", "author-text");
  elAurthor.appendChild(textAurthor);

  //Create img-box div  
  let elImg = document.createElement('figure');
  elImg.setAttribute("class", "img-box");
  elAdd.appendChild(elImg);  

  //Create img element in img-box div
  let imgTag  = document.createElement('img');
  imgTag.src=articles[artNum].img;
  imgTag.setAttribute("class", "pic-of-location");
  elImg.appendChild(imgTag);  

  elHook.appendChild(elAdd);
}

window.onload = selectArticles;