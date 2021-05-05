document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#E91E63',
    lineColor: '#fff'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) { return; }
  var anchors = document.getElementsByTagName('a');
  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname) {
      continue;
      }
      anchors[idx].addEventListener('click', function(event) {
        var fader = document.getElementById('fader'),
            anchor = event.currentTarget;
        
        var listener = function() {
            window.location = anchor.href;
            fader.removeEventListener('animationend', listener);
        };
        fader.addEventListener('animationend', listener);
        
        event.preventDefault();
        fader.classList.add('fade-in');
        });
    }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});

$(document).ready(function () {
  'use strict';

//********* arrow js

  $(".1").addClass('show');
  setTimeout(function() {
    $(".2").addClass('show');
  }, 1000);
  setTimeout(function() {
    $(".3").addClass('show');
  }, 2000);
  setTimeout(function() {
    $(".4").addClass('show');
  }, 3000);
  setTimeout(function() {
    $(".5").addClass('show');
  }, 4000);
  setTimeout(function() {
    $(".6").addClass('show');
  }, 5000);

//********* page loader js

setTimeout(function () {
  $('.loader_bg').fadeToggle();
}, 2000);


//********** menu background color change while scroll

$(window).on('scroll', function () {
  var menu_area = $('.nav-area');
  if ($(window).scrollTop() > 200) {
    menu_area.addClass('sticky_navigation');
  } else {
    menu_area.removeClass('sticky_navigation');
  }
});


//********** menu hides after click (mobile menu)

$(document).on('click', '.navbar-collapse.in', function (e) {
  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
    $(this).collapse('hide');
  }
});


//*********** scrollspy js

$('body').scrollspy({
  target: '.navbar-collapse',
  offset: 195
});


//************ smooth scroll js

$('a.smooth-menu,a.custom-btn,a.banner-btn').on("click", function (e) {
  e.preventDefault();
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top - 50
  }, 1000);
});

//*********** Animated headline js

$('.animate-scale').animatedHeadline({
  animationType: 'clip'
});

//***** Skill bar js

var skillbar = $(".skillbar");

skillbar.waypoint(function () {
  skillbar.each(function () {
    $(this).find(".skillbar-child").animate({
      width: $(this).data("percent")
    }, 1000);
  });
}, {
  offset: "80%"
});

//*** wow js

new WOW().init();

//*** Services carousel

$("#services-carousel").owlCarousel({
  navigation: false,
  pagination: true,
  slideSpeed: 800,
  paginationSpeed: 800,
  smartSpeed: 500,
  autoplay: true,
  singleItem: true,
  loop: true,
  responsive:{
    0:{
      items:1
    },
    680:{
      items:2
    },
    1000:{
      items:3
    }
  }
});

//*****Counter up js


$('.counter').counterUp({
  delay: 50,
  time: 2000
});

//*****Magnific Pop up js

$('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6').magnificPopup({
  delegate: 'a',
  removalDelay: 400, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
      this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true
});

//**** testimonial carousel

$("#testimonial-carousel").owlCarousel({
  navigation: false,
  pagination: true,
  slideSpeed: 800,
  paginationSpeed: 800,
  smartSpeed: 500,
  autoplay: true,
  singleItem: true,
  loop: true,
  responsive:{
    0:{
      items:1
    },
    680:{
      items:1
    },
    1000:{
      items:1
    }
  }
});

//ugly implementation of hashing here
//scheduled to automate this via js
var md5hash = 'DFA11833F98BB13DCC97B7B5F33529E6';
var sha1hash = '50B19E2B92BBCB3A8276B16F2430A0703EC262E0';
var sha3512hash = 'AF4DF8665F4D437080E89417BB958CCAD77F0D2D258F122519F25A6412CE6B6BB8A0B9B20B94B1C86C67F5694AD42F426F2638A99EB3D5B34E6D2E38C0C77394';
var hasharray = [{hashname: 'MD5', hashvalue: md5hash}, {hashname: 'SHA-1', hashvalue: sha1hash}, {hashname: 'SHA3-512', hashvalue: sha3512hash}];
var hashes = hasharray.reduce((acc, {hashname, ...x}) => { acc[hashname] = x; return acc}, {});

var logstyle = 'padding: 5px; background-color: white; color: red; font-style: bold; border: 5px red; font-size: 2em;';
console.clear();
console.log("%cI %calso %cknow there are errors here.", "color: red", "color: yellow", "color: red");
console.log("%cSTILL, WHY ARE YOU HERE?", logstyle);
console.log("%cMaybe you'd like to download my resume here instead?", "color: green");
console.groupCollapsed("Click here then.");
console.log("https://github.com/reikolydia/reikolydia/raw/master/images/about/JazereelGoh_2021.pdf\n");
console.group("Just make sure the file has the following hashes:");
console.table(hashes);
console.groupEnd;
console.groupEnd;

});