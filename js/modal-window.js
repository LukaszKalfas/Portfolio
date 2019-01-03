var modal = (function() {                         // Declare modal object

  // var $window = $(window);                        // Store the window
  var $modal = $('<div class="modal"/>');         // Create markup for modal
  var $content = $('<div class="modal-content"/>');
  var $close = $('<a class="modal-close"><div class="bar"></div><div class="bar"></div></a>');

  $modal.append($content, $close);                // Add close button to modal

  $close.on('click',  function(e){                 // If user clicks on close
    e.preventDefault();                           // Prevent link behavior
    modal.close();                                // Close the modal window
  });
  $(document).keydown(function (event) {   // close use esc key
    if (event.keyCode == 27) {
      modal.close();
    }
  });
  return {                                        // Add code to modal

    open: function(settings) {                     // Define open() method
      $content.empty().append(settings.content);   // Set new content of modal

      $modal.css({                                 // Set modal dimensions
        width: settings.width || 'auto',           // Set width
        height: settings.height || 'auto'          // Set height
      }).appendTo('body');                         // Add it to the page
    },
    close: function() {                            // Define close() method
      $content.empty();                            // Remove content from modal
      $modal.detach();                             // Remove modal from page
      $("body").css( {
        "overflow": "auto",
        "::-webkit-scrollbar": "initial"
      });
    }
  };
}());