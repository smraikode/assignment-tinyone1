var interval = 2000;
var switching = setInterval("toggleSlide(true)", interval);
window.paused = false;
function toggleSlide(direction) {
  var elements = document.getElementsByClassName("hideable");
  var visibleID = getVisible(elements);
  elements[visibleID].style.display = "none";
  if(!direction) {
    var makeVisible = prev(visibleID, elements.length);
  }
  else{
    var makeVisible = next(visibleID, elements.length);
  }
  elements[makeVisible].style.display = "block";
}
function getVisible(elements) {
var visibleID = -1;
  for(var i = 0; i < elements.length; i++) {
    if(elements[i].style.display == "block") {
      visibleID = i;
    }
  }
  return visibleID;
}
function prev(num, arrayLength) {
  if(num == 0) return arrayLength-1;
  else return num-1;
}

function next(num, arrayLength) {
  if(num == arrayLength-1) return 0;
  else return num+1;
}


window.onload = function(){
var targetOffset, currentPosition,
    body = document.body,
    animateTime = 900;

  var button = document.getElementById("downward-arrow");

function getPageScroll() {
  var yScroll;

  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}

button.addEventListener('click', function (event) {

  targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
  currentPosition = getPageScroll();

  body.classList.add('in-transition');
  body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

  window.setTimeout(function () {
    body.classList.remove('in-transition');
    body.style.cssText = "";
    window.scrollTo(0, targetOffset);
  }, animateTime);

  event.preventDefault();

}, false);
};


var t1=0;
 function smoothUp()
{
    var y1 = window.scrollY;
    y1 = y1-35;
    window.scrollTo(0,y1);
    if(y1>0)
    {
        t1 = setTimeout("smoothUp()",5);
    }
    else
    {
        clearTimeout(t1);
    }
}

window.onscroll = function (oEvent) {
  var mydivpos = document.getElementById("inner-container").offsetTop;
  var scrollPos = document.getElementsByTagName("body")[0].scrollTop;

  if(scrollPos >= mydivpos)
    document.getElementById("totop").style.display = "inherit";
  else
    document.getElementById("totop").style.display = "none";
  if (window.innerWidth<767) {
    document.getElementById("totop").innerHTML = "&#x21C8";
  } else {
    document.getElementById("totop").innerHTML = "&#x21C8 To Top";
  }
};
// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) <= (document.body.offsetHeight/4)) {
//       getElementById("totop").style.display="none;"
//     }
// };
