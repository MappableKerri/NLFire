function include(scriptUrl){document.write('<script src="'+ scriptUrl+'"></script>');}
function isIE(){var myNav=navigator.userAgent.toLowerCase();return(myNav.indexOf('msie')!=-1)?parseInt(myNav.split('msie')[1]):false;};include('js/jquery.cookie.js');include('js/jquery.easing.1.3.js');;(function($){var o=$('html');if(o.hasClass('desktop')){include('js/tmstickup.js');$(document).ready(function(){$('#stuck_container').TMStickUp({})});}})(jQuery);;(function($){var o=$('html');if(o.hasClass('desktop')){include('js/jquery.ui.totop.js');$(document).ready(function(){$().UItoTop({easingType:'easeOutQuart'});});}})(jQuery);;(function($){var o=$('[data-equal-group]');if(o.length>0){include('js/jquery.equalheights.js');}})(jQuery);;(function($){var o=$('html');if(o.hasClass('desktop')){include('js/jquery.mousewheel.min.js');include('js/jquery.simplr.smoothscroll.min.js');$(document).ready(function(){$.srSmoothscroll({step:150,speed:800});});}})(jQuery);var currentYear=(new Date).getFullYear();$(document).ready(function(){$("#copyright-year").text((new Date).getFullYear());});;(function($){include('js/superfish.js');include('js/jquery.mobilemenu.js');})(jQuery);;(function($){var o=document.getElementById("google-map");if(o){include('//maps.google.com/maps/api/js?sensor=false');include('js/jquery.rd-google-map.js');$(document).ready(function(){var o=$('#google-map');if(o.length>0){o.googleMap();}});}})
(jQuery);;(function($){var o=$('#contact-form');if(o.length>0){include('js/modal.js');include('js/TMForm.js');}})(jQuery);$(function(){var viewportmeta=document.querySelector&&document.querySelector('meta[name="viewport"]'),ua=navigator.userAgent,gestureStart=function(){viewportmeta.content="width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},scaleFix=function(){if(viewportmeta&&/iPhone|iPad/.test(ua)&&!/Opera Mini/.test(ua)){viewportmeta.content="width=device-width, minimum-scale=1.0, maximum-scale=1.0";document.addEventListener("gesturestart",gestureStart,false);}};scaleFix();if(window.orientation!=undefined){var regM=/ipod|ipad|iphone/gi,result=ua.match(regM);if(!result){$('.sf-menus li').each(function(){if($(">ul",this)[0]){$(">a",this).toggle(function(){return false;},function(){window.location.href=$(this).attr("href");});}})}}});var ua=navigator.userAgent.toLocaleLowerCase(),regV=/ipod|ipad|iphone/gi,result=ua.match(regV),userScale="";if(!result){userScale=",user-scalable=0"}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+ userScale+'">');;(function($){include('js/TMSearch.js');})(jQuery);;(function($){var o=$('#camera');if(o.length>0){if(!(isIE()&&(isIE()>9))){include('js/jquery.mobile.customized.min.js');}
include('js/camera.js');$(document).ready(function(){o.camera({autoAdvance:true,height:'30.9375%',minHeight:'500px',pagination:true,thumbnails:false,playPause:false,hover:false,loader:'none',navigation:false,navigationHover:false,mobileNavHover:false,fx:'simpleFade'})});}})(jQuery);;(function($){var o=$('.owl-carousel-1');var z=$('.owl-carousel-2');if((o.length>0)||(z.length>0)){include('js/owl.carousel.min.js');}
$(document).ready(function(){if(o.length>0){o.owlCarousel({margin:30,smartSpeed:450,loop:true,dots:false,dotsEach:1,nav:true,navClass:['owl-prev fa fa-angle-left','owl-next fa fa-angle-right'],responsive:{0:{items:1},768:{items:2},980:{items:3}}});}
if(z.length>0){z.owlCarousel({margin:30,smartSpeed:450,loop:true,dots:true,dotsEach:1,items:1});}});})(jQuery);;(function($){var o=$('.thumb');if(o.length>0){include('js/jquery.fancybox.js');include('js/jquery.fancybox-media.js');include('js/jquery.fancybox-buttons.js');$(document).ready(function(){o.fancybox();});}})(jQuery);;(function($){var o=$('.parallax');if(o.length>0&&$('html').hasClass('desktop')){include('js/jquery.rd-parallax.js');}})(jQuery);