"use strict";

function homeLink(){
    var elmnt = document.getElementById("home");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    document.getElementById("top_button").classList.remove('to_home_hide');
    document.getElementById("top_button").classList.add('to_home_see');
  
  
  }
  
  function aboutLink(){
    var elmnt = document.getElementById("about");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    document.getElementById("top_button").classList.remove('to_home_hide');
    document.getElementById("top_button").classList.add('to_home_see');
  }
  
  function featuresLink(){
    var elmnt = document.getElementById("features");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    document.getElementById("top_button").classList.remove('to_home_hide');
    document.getElementById("top_button").classList.add('to_home_see');
  }
  
  function go_home(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("top_button").classList.remove('to_home_see');
    document.getElementById("top_button").classList.add('to_home_hide');
  }
  
  window.onscroll = function () {
    if(window.pageYOffset>=10){
      document.getElementById("top_button").classList.remove('to_home_hide');
      document.getElementById("top_button").classList.add('to_home_see');
    }else{
      document.getElementById("top_button").classList.remove('to_home_see');
      document.getElementById("top_button").classList.add('to_home_hide');
    }
  };
  
  
  /*
  document.getElementById("top_button").classList.remove('to_home_see');
  document.getElementById("top_button").classList.add('to_home_hide');
  alert('Current scroll from the top: ' + window.pageYOffset);
  alert('Current scroll from the left: ' + window.pageXOffset);
  WHERE ARE WE
  var sec = document.querySelector('section');
  var bounding = sec.getBoundingClientRect();
  console.log("first");
  console.log(bounding);
  WHEN TO DISPLAY BUTTON
  After any use of above button
  After any scroll event
  WHEN TO HIDE BUTTON
  After go use of go_home
  After use of scroll event that takes us back up to top
  */