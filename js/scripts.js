$(document).ready(function() {
    var over21 = confirm("Are you 21 or older? Click OK for yes or Cancel for no.");
  
    if (over21) {
      $('#drinks').show();
    } else {
      $('#under-21').show();
    }
  });