$(window).load(function(){"use strict";$(".signal").fadeOut("fast"),$(".preloader").fadeOut("fast")}),$(window).scroll(function(){"use strict";var t=$(window).scrollTop();t>60?$(".navbar").addClass("is-scrolling"):$(".navbar").removeClass("is-scrolling")}),function(t){"use strict";t("[data-typer-targets]").typer(),t.typer.options.clearOnHighlight=!1}(jQuery),function(t){"use strict";t("body").attr("data-spy","scroll").attr("data-target",".navbar-fixed-top").attr("data-offset","11")}(jQuery),function(t){"use strict";t(".nav.navbar-nav li a").click(function(){var e=t(".navbar-toggle");!e.hasClass("collapsed")&&e.is(":visible")&&t(".navbar-toggle").trigger("click")})}(jQuery),$(document).ready(function(){"use strict";function t(t){var e=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return e.test(t)}Modernizr.touch&&void 0!==$(".header").attr("data-stellar-background-ratio")?($(".header").css("background-attachment","scroll"),$(".header").removeAttr("data-stellar-background-ratio")):$(window).stellar({horizontalScrolling:!1}),(new WOW).init(),$(".tabs.testimonials").easytabs({animationSpeed:300,updateHash:!1,cycle:1e4}),$(".tabs.features").easytabs({animationSpeed:300,updateHash:!1}),$("#owl-carousel-shots-phone").owlCarousel({singleItem:!0,navigation:!0,navigationText:["<i class='icon arrow_carrot-left'></i>","<i class='icon arrow_carrot-right'></i>"],addClassActive:!0,itemsDesktop:[1200,1],itemsDesktopSmall:[960,1],itemsTablet:[769,1],itemsMobile:[700,1],responsiveBaseWidth:".shot-container",items:1,slideSpeed:1e3,mouseDrag:!0,responsiveRefreshRate:200,autoPlay:5e3}),$(".venobox").venobox(),$(".tweet").twittie({apiPath:"assets/js/plugins/twitter/api/tweet.php",count:2,template:'{{tweet}} - <span class="date">{{date}}</span>'});var e;if(e=!1,/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)&&(e=!0),e===!0?jQuery("a.scrollto").click(function(t){jQuery("html, body").scrollTo(this.hash,this.hash,{gap:{y:-10},animation:{easing:"easeInOutCubic",duration:0}}),t.preventDefault()}):jQuery("a.scrollto").click(function(t){jQuery("html, body").scrollTo(this.hash,this.hash,{gap:{y:-10},animation:{easing:"easeInOutCubic",duration:1500}}),t.preventDefault()}),$("#subscribe").submit(function(e){e.preventDefault();var a={email:$("#s-email").val()};return t(a.email)?$.ajax({type:"POST",url:"assets/php/subscribe.php",data:a,success:function(){$(".subscription-success").fadeIn(1e3),$(".subscription-failed").fadeOut(500)}}):($(".subscription-failed").fadeIn(1e3),$(".subscription-success").fadeOut(500)),!1}),navigator.userAgent.match(/IEMobile\/10\.0/)){var a=document.createElement("style");a.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(a)}});