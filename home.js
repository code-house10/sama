$(document).ready(function()
{
   $("a[href*='#home']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#home').offset().top }, 600, 'easeOutQuad');
   });
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-100 }, 600, 'easeOutQuad');
   });
   $("a[href*='#service1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_service1').offset().top-100 }, 600, 'easeOutQuad');
   });
   $("a[href*='#service22']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_service22').offset().top-100 }, 600, 'easeOutQuad');
   });
   var Carousel1Opts =
   {
      delay: 3000,
      duration: 500,
      easing: 'linear',
      mode: 'forward',
      direction: '',
      scalemode: 1,
      pagination: true,
      pagination_img_default: 'images/page_default.png',
      pagination_img_active: 'images/page_active.png',
      start: 0
   };
   $("#Carousel1").on('activate', function(event, index)
   {
      switch(index)
      {
      }
   });
   $("#Carousel1").on('beforeActivate', function(event, index)
   {
      switch(index)
      {
         case 0:
            AnimateCss('wb_Title1', 'transform-scale-in', 400, 500);
            AnimateCss('Review1', 'transform-lightspeed-in', 800, 500);
            AnimateCss('wb_User1', 'animate-rotate-in-left', 800, 1000);
            break;
         case 1:
            AnimateCss('wb_Title2', 'transform-scale-in', 500, 500);
            AnimateCss('Review2', 'transform-lightspeed-in', 800, 500);
            AnimateCss('wb_User2', 'animate-rotate-in-left', 800, 1000);
            break;
         case 2:
            AnimateCss('wb_Title3', 'transform-scale-in', 500, 500);
            AnimateCss('Review3', 'transform-lightspeed-in', 800, 500);
            AnimateCss('wb_User3', 'animate-rotate-in-left', 800, 1000);
            break;
      }
   });
   $("#Carousel1").carousel(Carousel1Opts);
   $("#Carousel1_back a").click(function()
   {
      $('#Carousel1').carousel('prev');
   });
   $("#Carousel1_next a").click(function()
   {
      $('#Carousel1').carousel('next');
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-100 }, 600, 'easeOutQuad');
   });
   function Heading10Scroll()
   {
      var $obj = $("#wb_Heading10");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading10', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading10', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading10').inViewPort(true))
   {
      $('#wb_Heading10').addClass("in-viewport");
   }
   Heading10Scroll();
   $(window).scroll(function(event)
   {
      Heading10Scroll();
   });
   skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   $("a[data-rel='PhotoGallery1']").attr('rel', 'PhotoGallery1');
   $("a[rel^='PhotoGallery1']").fancybox({});
   var NewsFeedTicker1_Data = new Array();
   NewsFeedTicker1_Data[0] = ["http://", "&#1601;&#1585;&#1610;&#1602; &#1605;&#1582;&#1589;&#1589; &#1604;&#1604;&#1578;&#1593;&#1575;&#1605;&#1604; &#1605;&#1593; &#1575;&#1604;&#1593;&#1601;&#1588; &#1576;&#1593;&#1606;&#1575;&#1610;&#1577;", "", ""];
   NewsFeedTicker1_Data[1] = ["http://", "&#1587;&#1610;&#1575;&#1585;&#1575;&#1578; &#1605;&#1580;&#1607;&#1586;&#1577; &#1604;&#1606;&#1602;&#1604; &#1575;&#1604;&#1575;&#1579;&#1575;&#1579;", "", ""];
   NewsFeedTicker1_Data[2] = ["http://", "&#1608;&#1606;&#1588; &#1604;&#1585;&#1601;&#1593; &#1608;&#1578;&#1606;&#1586;&#1610;&#1604; &#1575;&#1604;&#1575;&#1579;&#1575;&#1579; &#1605;&#1606; &#1575;&#1604;&#1575;&#1583;&#1608;&#1575;&#1585; &#1575;&#1604;&#1605;&#1585;&#1578;&#1601;&#1593;&#1577;", "", ""];
   $("#NewsFeedTicker1").newsviewer({ mode: 'rotate', pause: 2000, pause: 2000, animation: 4, animationDuration: 500, sortOrder: 0, dataSource: 'local', param: NewsFeedTicker1_Data, target: '_self', includeDate: false, maxItems: 10});
   function service2Scroll()
   {
      var $obj = $("#wb_service2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_service2', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_service2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_service2').inViewPort(true))
   {
      $('#wb_service2').addClass("in-viewport");
   }
   service2Scroll();
   $(window).scroll(function(event)
   {
      service2Scroll();
   });
   function Heading4Scroll()
   {
      var $obj = $("#wb_Heading4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading4', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading4').inViewPort(true))
   {
      $('#wb_Heading4').addClass("in-viewport");
   }
   Heading4Scroll();
   $(window).scroll(function(event)
   {
      Heading4Scroll();
   });
   $("#wb_ResponsiveMenu1 ul li a").click(function(event)
   {
      $("#wb_ResponsiveMenu1 input").prop("checked", false);
   });
   $('img[data-src]').lazyload();
});
$(document).ready(function()
{
   // move arrow outside the layer container
   $('#wb_down-arrow').appendTo('#home');
});
var map;
var marker;
var geocoder;
function GoogleMapInit(id, latitude, longitude, address) 
{    
   var latlng = new google.maps.LatLng(latitude, longitude);
   var latlngMarker = new google.maps.LatLng(latitude, longitude);
   var mapOptions = 
   {        
      center: latlng,        
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,        
      scrollwheel: true,
      streetViewControl: false,        
      zoom: 14,
      zoomControl: true,        
      zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL }
   }
   element = document.getElementById(id);
   map = new google.maps.Map(element, mapOptions);   
   marker = new google.maps.Marker({ draggable:true, map: map, position: latlngMarker});   
   geocoder = new google.maps.Geocoder();
   geocoder.geocode({'address': address}, function(results, status) 
   {
      if (status == google.maps.GeocoderStatus.OK) 
      {
         map.setCenter(results[0].geometry.location);
         var marker = new google.maps.Marker(
         {
            map: map, 
            position: results[0].geometry.location
         });
      } 
      else 
      {
        //    alert("Geocode was not successful: " + status);
      }
   });
}
GoogleMapInit('GoogleMaps', 40.7127837, -74.00594130000002, 'ميدان عبده باشا+القاهرة');
