"use strict";

let articles = [
    {
      location : 'Paris',
      date : '2016-02-06',
      author : 'Nick',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      img : 'images/paris.jpg'
    },
    {
      location : 'London',
      date : '2017-12-01',
      author : 'Ben',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/london.jpg'
    },
    {
      location : 'New York',
      date : '2019-3-020',
      author : 'Paul',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/new_york.jpg'
    },
    {
      location : 'Edinburgh',
      date : '2011-03-07',
      author : 'Matthew',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/edinburgh.jpg'
    },
    {
      location : 'Mexico',
      date : '2012-10-01',
      author : 'Mark',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/mexico.jpg'
    },
    {
      location : 'Berlin',
      date : '2018-10-05',
      author : 'Luke',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/berlin.jpg'
    },
    {
      location : 'Rome',
      date : '2012-05-05',
      author : 'John',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/rome.jpg'
    },
    {
      location : 'Barcelona',
      date : '2014-01-10',
      author : 'Peter',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/barcelona.jpg'
    },
    {
      location : 'Moscow',
      date : '2017-08-08',
      author : 'Peter',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/moscow.jpg'
    },
    {
      location : 'Tokyo',
      date : '2016-02-04',
      author : 'Peter',
      review : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img : 'images/tokyo.jpg'
    }
  ]


function displayArticle(artNum){
    let elHook = document.getElementById("search-result");

  //Create article-box div
  let elAdd = document.createElement('article');
  elAdd.setAttribute("class", "article-box");

  //Create img-box div  
  let elImg = document.createElement('figure');
  elImg.setAttribute("class", "img-box");
  elAdd.appendChild(elImg);  

  //Create img element in img-box div
  let imgTag  = document.createElement('img');
  imgTag.src=articles[artNum].img;
  imgTag.setAttribute("class", "pic-of-location");
  elImg.appendChild(imgTag);  

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

  let stringDate = makeStringDate(articles[artNum].date);

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


    elHook.appendChild(elAdd);
  }

  function makeStringDate(hypDate){

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    let parts = hypDate.split('-');
    let mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
  
    let dateString=days[mydate.getDay()];
    dateString+=" the ";
    dateString+=mydate.getDate();
  
    if(mydate.getDate()==1||mydate.getDate()==21||mydate.getDate()==31){
      dateString+="st of ";
    }else if(mydate.getDate()==2||mydate.getDate()==22){
      dateString+="nd of ";
    }else if(mydate.getDate()==3||mydate.getDate()==23){
      dateString+="rd of ";
    }else{
      dateString+="th of ";
    }
    dateString+=months[mydate.getMonth()];
    dateString+=" ";
    dateString+=mydate.getFullYear();
  
    return dateString;
  }


function selectArticles(){
  for(let i=0;i<articles.length;i++){
    displayArticle(i);
  }
}

function imageClear(){
    let list = document.getElementById("search-result");
    if(list!==null){
        while (list.hasChildNodes()) {
          list.removeChild(list.firstChild);
        }
    }
  }

  function chronArticles(){
    imageClear();
   articles.sort((a,b)=>{
      let x = a.date.replace(/-/g,"");
      let y = b.date.replace(/-/g,"");
      return x - y
    });
    selectArticles();
  }

  function alphaArticles(){
    imageClear();
    articles.sort((a,b)=>{
      let x = a.location.charAt(0).toUpperCase().charCodeAt();
      let y = b.location.charAt(0).toUpperCase().charCodeAt();
      return x - y;
    });
    selectArticles();
  }

  window.onload = selectArticles;
