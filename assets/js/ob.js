//=============================
  // Responsive heading texts
  //=============================


$("h1.text-large").fitText(1.19);
$("h1.text-semi-large").fitText(1.9);


//=============================
  // Sticky Navbar
  //=============================

$(".navbar").sticky({topSpacing:0});



//=============================
  // Collapse menu on click (only for mobile)
  //=============================

$(".navbar-collapse a").click(function(){
$(".navbar-collapse").removeClass("in");
$(".navbar-collapse").css({'height': '0px'}); });



//=============================
  // Main Slider
  //=============================


var owl_slider = $('.slider');
      owl_slider.owlCarousel({
        margin: 0,
		items: 1,
		slideBy: 1,
        paginationSpeed:1200,
		nav:false,
		touchDrag:false,
		dots:false,
        loop: false,
		autoplay:true,
		autoplaySpeed:200
      });



//=============================
  // Wow Animation
  //=============================

  
var wow = new WOW(
  {
    mobile:false       // trigger animations on mobile devices (default is true)
  }
);
wow.init();



//=============================
  // Form validation, custom error message, error msg in tooltip
  //=============================

  
$(".form").validate({
			rules: {
				name: {
					required: true
				},
				email: {
				   required:true,
				   email:true
				},
				subject: {
				   required:true
				},
				message: {
				   required:true
				},
			},
			
			messages: {
				name: "Please enter your name",
				email: "Please enter a valid email address",
				subject: "Please enter a subject",
				message: "Please enter your message",
			},
          
      showErrors: function(errorMap, errorList) {

          // Clean up any tooltips for valid elements
          $.each(this.validElements(), function (index, element) {
              var $element = $(element);

              $element.data("title", "") // Clear the title - there is no error associated anymore
                  .removeClass("error")
                  .tooltip("destroy");
          });

          // Create new tooltips for invalid elements
          $.each(errorList, function (index, error) {
              var $element = $(error.element);

              $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                  .data("title", error.message)
                  .addClass("error")
                  .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
          });
      },
	  
		submitHandler: function(form) {
		$('.hide-on-success').hide();
        $('.show-on-success').show("slow");
        $("form").trigger('reset');
		var data= $(form).serialize()
        $.ajax({
        type: "POST",
        url: "./sendemail.php",
        data: data,
        success: function(){
        }
        });
    return false;
},	
			
  }); 
  	


//=============================
  // Dropdowb menu for touch devices, Double tap to go
  //=============================


if (Modernizr.touch){
$('.nav li:has(ul) > a').one('touch', function(e){
    e.preventDefault();
}); 
	
} else {
  
}
