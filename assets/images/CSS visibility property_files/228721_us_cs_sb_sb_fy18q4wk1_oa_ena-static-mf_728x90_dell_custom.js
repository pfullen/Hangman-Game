var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');


var tl = new TimelineMax({repeat:0, repeatDelay:2.5});


window.onload = function() {   
  
tl.set(banner, {visibility: "visible"})
   /*frame one*/
   .from(".funding-logo, .first-bg, .dell-logo1,.title1-text-1,.title1-text-2,.cta",.5, {alpha:0})
   .to(".funding-text, .first-bg, .title1-text-1,.dell-logo1,.title1-text-2,.cta",.3, {alpha:0, delay:2.2})
  
  /*frame two*/
  .from(".dell-logo2", .5,{alpha:0, delay:-.25}, "2nd_frame")
  .from(".title2, .funding-text, .cta2", .5,{alpha:0}, "2nd_frame")
  .from(".product1, .product1_name", .5,{alpha:0, ease:Power2.easeInOut}, "2nd_frame")
  .to(".title2, .product1, .funding-text, .product1_name", .2,{alpha:0, delay:2.3})
    
  /*frame three*/
  .from(".product2", .5,{alpha:0, ease:Power2.easeInOut}, "3rd_frame")
  .from(".title3, .product2_name", .5,{alpha:0}, "3rd_frame")
  .to(".title3,.product2, .product2_name", .2,{alpha:0, delay:2.3})
  
  /*frame four*/
  .from(".product3", .5,{alpha:0, ease:Power2.easeInOut}, "4th_frame")
  .from(".title4, .product3_name", .5,{alpha:0, ease:Power4.easeout}, "4th_frame")
  .to(".funding-text-last,.title4,.product3, .product3_name", .2,{alpha:0, ease:Power4.easeout, delay:2.3})

  /*frame five*/
  .from(".funding-text2, .product4", .5,{alpha:0, ease:Power2.easeInOut}, "5th_frame")
  .from(".funding-text-last, .title5-text-1, .title5-text-2, .product4_name",.5, {alpha:0}, "5th_frame")
  .from(".frame-5-text,.vendor-logo",.5, {alpha:0,ease:Power0.easeIn}, "5th_frame")
  .from(".violator", .5,{scale:.01}, "5th_frame")
  

  /*roll over*/
  .from("#roll-cta, .flex_bg", .5, {alpha:0, x:1300, ease:Power4.easeIn}, "5th_frame")
  .from("#rolltext, #legal-text", .5, {alpha:0, ease:Power4.easeOut}, "5th_frame")
  
    legal.addEventListener("mouseover",legalHover);
    function legalHover(){
    tl.pause();
    TweenMax.to("#legal", .5, {top:0, ease:Power1.easeOut})  
  }
  
  legal.addEventListener("mouseout",legalOut);
    function legalOut(){
    tl.play();
    TweenMax.to("#legal", .5, {top:-1000, ease:Power1.easeIn})
  }


 ;
  
    // tl.seek("loop")

    var currentDuration = tl.duration();
    console.log(currentDuration);   
};