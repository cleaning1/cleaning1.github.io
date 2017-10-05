
// return to top when the goTop class is clicked
$(".goTop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// select and deselect #brand depending on the position of the about section
var navBrand = document.querySelector("#homeHeading");

$(window).scroll(function() {
    if ($(this).scrollTop() > 703 && navBrand) {
        navBrand.classList.remove("selected");
    } else if (navBrand) {
        navBrand.classList.add("selected");
    }
});

// for making mobile scroll class work
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('nav-contact-li').addClass('active');
       $('nav-about-li').removeClass('active');
   }
});

//smooth scrolling for learn more:

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



