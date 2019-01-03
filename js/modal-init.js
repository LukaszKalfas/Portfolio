(function () {
  var $content = $('#modal-inner').detach();   // Remove modal from page

  $('#modal-open').on('click', function () {           // Click handler to open modal
    modal.open({ content: $content, width: '100%', height: '100%' });
    $("body").css({
      "overflow": "hidden",
      "::-webkit-scrollbar": "0"
    });
  });
}());