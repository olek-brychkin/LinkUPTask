$(document).ready(function(){


	// function filePreview(input) {

	//   if (input.files && input.files[0]) {
	//     var reader = new FileReader();

	//     reader.onload = function(e) {
	//       $('.feedback-img-place').attr('src', e.target.result);
	//     }

	//     reader.readAsDataURL(input.files[0]);
	//   }
	// }

	// $("#feedback-img-btn").change(function() {
	//   filePreview(this);
	// });

	$( ".feedback-form" ).validate({
	  rules: {
	    field: {
	      required: true,
	      extension: "xls|csv"
	    }
	  }
	});


	function fileValidation(){
	    var fileInput = document.getElementById('feedback-img-btn');
	    var filePath = fileInput.value;
	    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
	    if(!allowedExtensions.exec(filePath)){
	        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
	        fileInput.value = '';
	        return false;
	    }else{
	        //Image preview
	        if (fileInput.files && fileInput.files[0]) {
	            var reader = new FileReader();
	            reader.onload = function(e) {
	                document.getElementById('feedback-img-place').innerHTML = '<img src="'+e.target.result+'"/>';
	            };
	            reader.readAsDataURL(fileInput.files[0]);
	        }
	    }
	}

	$('.feedback-slider').slick({
	  centerMode: true,
	  // variableWidth: true,
	  // variableHeight: true,
	  useTransform: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});