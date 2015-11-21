      $( ".off-canvas" ).click(function() {
        $('body').toggleClass("off-canvas-pushed");
        $('.off-canvas-menu').toggleClass("off-canvas-menu-pushed")
        $('.navbar-fixed-top').toggleClass("off-canvas-pushed");
        
      });