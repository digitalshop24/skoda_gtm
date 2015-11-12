<script type="text/javascript">
$(function() {
            $("#callToActionDiv").on("click", "a", function(event){ 
url = event.currentTarget.href;
var action = window.location.href;
console.log("logging click on CTA link " + url);
console.log("gaq object " + _gaq);                             
var result = _gaq.push(['ru._trackEvent', 'RUS_CTA', action, url.replace(/^.*url=/,""), 0, true]);
setTimeout('_gaq.push([\'_trackEvent\', \'NoBounce\', \'Over 15 seconds\'])',15000);
console.log("result: " + result);



            });
});
</script>

<script>
$(function(){
$('.bmsMenu a').click(function(){
  var href = $(this).attr('href');
  if(href.indexOf('.pdf') > 0) {
    ga('send', 'event', 'RUS_ru-ru_PDF', 'Action', href);
    console.log('Tracking event', 'PDF download', href);
  }
})
});
$(function(){
  $('.callToActionLink, .importersCallToActionLink').click(function(){
    var href = $(this).attr('href');
    ga('send', 'event', 'CTA', 'Click', href);
    console.log('Tracking event', 'CTA Click', href);
  })
});
 $(function(){
$('div.pricelistBlock span a').click(function(){
  var href = $(this).attr('href');
  if(href.indexOf('.pdf') > 0) {
    ga('send', 'event', 'PDF_DL', 'Action', href);
    console.log('Tracking event', 'PDF_DL', href);
  }
})
})
</script>

<script>
$(function(){
$('.bmsMenu a').click(function(){
  var href = $(this).attr('href');
  if(href.indexOf('.pdf') > 0) {
    yaCounter26885850.reachGoal('MenuPDF');
    
  }
})
});
$(function(){
  $('.callToActionLink, .importersCallToActionLink').click(function(){
    var href = $(this).attr('href');
    yaCounter26885850.reachGoal('CTA');
   
  })
});
 $(function(){
$('div.pricelistBlock span a').click(function(){
  var href = $(this).attr('href');
  if(href.indexOf('.pdf') > 0) {
    yaCounter26885850.reachGoal('PDF_DL');
    
  }
})
})
</script>

<script type="text/javascript">
    $(document).ready(function(){
      $('#ctl00_ctl00_PlaceHolderTopImage_PlaceHolderTopImage_TopImageUnifiedFieldControl_ctl00_ctl03_TopVisualDisplay .caroufredsel_wrapper .topVisualItems .topVisualItem').on("click", function() { 
        
        var url = $(this).attr("data-url") || "not identified";
        ga('send', 'event', 'MainBanners', 'click', url);

      });
    });
</script>
