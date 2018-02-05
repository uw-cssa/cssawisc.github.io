(function($){$(window).load(function(){$(window).trigger("resize");$(window).trigger("scroll");})
$(document).ready(function(){$(window).trigger("resize");initParallax();initPlugins($('html'));new WOW().init();});$(window).resize(function(){initHeight();});$("[data-background-image]").each(function(){var imgSrc=$(this).data("background-image");$(this).css("background-image","url("+imgSrc+")");});function initParallax(){if($(window).width()<1024)
return;$(".parallax-1").parallax("50%",0.1);$(".parallax-2").parallax("50%",0.2);$(".parallax-3").parallax("50%",0.3);$(".parallax-4").parallax("50%",0.4);$(".parallax-5").parallax("50%",0.5);$(".parallax-6").parallax("50%",0.6);$(".parallax-7").parallax("50%",0.7);$(".parallax-8").parallax("50%",0.8);$(".parallax-9").parallax("50%",0.9);}
function initHeight(){$(".js-height-full").height($(window).height());$(".js-height-parent").each(function(){$(this).height($(this).parent().first().height());})}
function initPlugins(target){if($.isFunction($.fn.themePageLoader)){target.find(".page-loader, [data-plugin-page-loader]").themePageLoader();}
if($.isFunction($.fn.themeMainNav)){target.find("[data-plugin-main-nav], .header .nav-wrapper").themeMainNav();}
if($.isFunction($.fn.tooltip)){target.find("[data-toggle='tooltip']").tooltip({container:'body'});}
if($.isFunction($.fn.popover)){target.find("[data-toggle='popover']").popover({container:'body'});}
if($.isFunction($.fn.themePieChart)){target.find(".pie-chart, [data-plugin-pie-chart]").themePieChart();}
if($.isFunction($.fn.themeCounter)){target.find(".counter, [data-plugin-counter]").themeCounter();}
if($.isFunction($.fn.themeCountdown)){target.find(".countdown, [data-plugin-countdown]").themeCountdown();}
if($.isFunction($.fn.themeLightbox)){target.find('.lightbox').themeLightbox();target.find('.lightbox-image, [data-lightbox-type="image"]').themeLightbox({type:"image"});target.find('.lightbox-gallery, [data-lightbox-type="gallery"]').themeLightbox({type:"image",gallery:{enabled:true}});}
if($.isFunction($.fn.themeStickyHeader)){target.find(".header.sticky, .main-header.sticky, [data-plugin-sticky-header]").themeStickyHeader();}
if($.isFunction($.fn.themeProgressBar)){target.find(".progress .pr-bar, [data-plugin-progress]").themeProgressBar();}
if($.isFunction($.fn.themeAccordion)){target.find(".accordion, [data-plugin-accordion]").themeAccordion();target.find("[data-plugin-accordion-single]").themeAccordion({singleActive:true});}
if($.isFunction($.fn.fitVids)){target.find(".fluid-video-wrapper").fitVids();}
if($.isFunction($.fn.themeSlider)){target.find('.slider-item-large, [data-plugin-slider="itemLarge"]').themeSlider({items:3,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],itemsTablet:[768,1],itemsMobile:[479,1],slideSpeed:550,autoPlay:5000});target.find('.slider-item, [data-plugin-slider="item"]').themeSlider({items:4,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTable:[768,1],itemsMobile:[479,1],slideSpeed:550,autoPlay:5000});target.find('.slider-item-small, [data-plugin-slider="itemSmall"]').themeSlider({items:6,itemsDesktop:[1199,6],itemsDesktopSmall:[979,4],itemsTablet:[768,3],itemsMobile:[479,1],slideSpeed:550,autoPlay:5000});target.find('.slider-item-single, [data-plugin-slider="itemSingle"]').themeSlider({singleItem:true,slideSpeed:450,autoPlay:5000});target.find('.slider-gallery, [data-plugin-slider="gallery"]').themeSlider({singleItem:true,slideSpeed:450,navigation:true,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']});target.find('.slider-fullwidth, [data-plugin-slider="fullwidth"]').themeSlider({singleItem:true,slideSpeed:500,navigation:true,navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']});}
if($.isFunction($.fn.YTPlayer)){target.find(".player, [data-plugin-player]").YTPlayer();}
if(($.isFunction($.fn.themeFlickr))){target.find(".flickr-feed, [data-plugin-flickr]").themeFlickr();}
if(($.isFunction($.fn.themeTwitter))){target.find(".twitter-feed, [data-plugin-twitter]").themeTwitter();}
if(($.isFunction($.fn.themeInstagram))){target.find(".instagram-feed, [data-plugin-instagram]").themeInstagram({accessToken:'2858314155.467ede5.a1ecc28d1c4f4a2c99e5f5e85c41922d'});}
if(($.isFunction($.fn.themeNewsletter))){target.find(".newsletter-form, [data-plugin-newsletter]").themeNewsletter();}
if(($.isFunction($.fn.themePortfolio))){target.find(".portfolio, [data-plugin-portfolio]").themePortfolio();target.find('[data-plugin-portfolio-masonry]').themePortfolio({masonry:{enabled:true}});target.find('[data-plugin-portfolio-popup]').themePortfolio({popup:{enabled:true,onSuccess:function(target){initPlugins(target);}}});}
if($.isFunction($.fn.themeBgSlideshow)){target.find('.bg-slideshow[data-slides], [data-plugin-bg-slideshow]').themeBgSlideshow();}
if($.isFunction($.fn.themeGoogleMap)){target.find("[data-plugin-google-map]").themeGoogleMap();}
if($.isFunction($.fn.themeSidePanel)){target.find('.side-panel, [data-plugin-side-panel]').themeSidePanel();}
if($.isFunction($.fn.masonry)){var $masonry=target.find('.masonry');$masonry.masonry({itemSelector:'.masonry-item',percentPosition:true,columnWidth:'.masonry-item'});$masonry.imagesLoaded().progress(function(){$masonry.masonry('layout');});}
if($.isFunction($.fn.themeParticles)){target.find("[data-plugin-particles]").themeParticles();}}})(jQuery);