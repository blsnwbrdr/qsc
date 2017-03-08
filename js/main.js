$('.navbar-collapse ul li a').click(function() {
  "use strict";
  $(this).closest('.collapse').collapse('toggle');
});