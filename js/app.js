$(document).foundation()

// jQuery scroll to ------------------------------------------------------------
$(document).ready(function() {
   // scroll to intro
    $('#intro').click(function(){
      $('html, body').animate({scrollTop: $('#co-skiing').offset().top
      }, 'slow', 'swing');
    });
    //scroll to photo gallery
    $('#photos-nav').click(function(){
      $('html, body').animate({scrollTop: $('#photo-gallery').offset().top
      }, 'slow', 'swing');
    });
    //scroll to photo contact form
    $('#contact').click(function(){
      $('html, body').animate({scrollTop: $('#contact-form').offset().top
      }, 'slow', 'swing');
    });
    // scroll to photo gallery
    $('.down-arrow').click(function(){
        $('html, body').animate({scrollTop: $('#photo-gallery').offset().top
      }, 'slow', 'swing');
    });
    // scroll to the intro
    $('#intro-bottom').click(function(){
        $('html, body').animate({scrollTop: $('#co-skiing').offset().top
      }, 'fast', 'swing');
    });
    // scroll to photo gallery
    $('#photos-bottom').click(function(){
        $('html, body').animate({scrollTop: $('#photo-gallery').offset().top
      }, 'fast', 'swing');
    });
    // scroll to the intro
    $('#contact-bottom').click(function(){
        $('html, body').animate({scrollTop: $('#contact-form').offset().top
      }, 'fast', 'swing');
    });
    //scroll to the top
    // $('#top').click(function(){
    //     $('html, body').animate({scrollTop: $('#top-nav').offset().top
    //   }, 'fast', 'swing');
    // });
});

// JS Modal images -------------------------------------------------------------
var modal = document.getElementById('modal-image');
var img = document.getElementById('thumb1');
// var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    // modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
// modal 2
var modal2 = document.getElementById('modal-image2');
var img2 = document.getElementById('thumb2');
// var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function(){
    modal2.style.display = "block";
    // modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

var span2 = document.getElementsByClassName("close")[1];
span2.onclick = function() {
    modal2.style.display = "none";
}
// modal 3
var modal3 = document.getElementById('modal-image3');
var img3 = document.getElementById('thumb3');
// var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function(){
    modal3.style.display = "block";
    // modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

var span3 = document.getElementsByClassName("close")[2];
span3.onclick = function() {
    modal3.style.display = "none";
}
// modal 4
var modal4 = document.getElementById('modal-image4');
var img4 = document.getElementById('thumb4');
// var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function(){
    modal4.style.display = "block";
    // modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
}

var span4 = document.getElementsByClassName("close")[3];
span4.onclick = function() {
    modal4.style.display = "none";
}
// modal 65
var modal5 = document.getElementById('modal-image5');
var img5 = document.getElementById('thumb5');
// var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
    modal5.style.display = "block";
    // modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
}

var span5 = document.getElementsByClassName("close")[4];
span5.onclick = function() {
    modal5.style.display = "none";
}
// modal 6
var modal6 = document.getElementById('modal-image6');
var img6 = document.getElementById('thumb6');
// var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
    modal6.style.display = "block";
    // modalImg6.src = this.src;
    captionText6.innerHTML = this.alt;
}

var span6 = document.getElementsByClassName("close")[5];
span6.onclick = function() {
    modal6.style.display = "none";
}
