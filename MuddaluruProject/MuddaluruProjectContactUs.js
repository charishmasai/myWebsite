//Created by Muddaluru SaiCharishma
//700700910
$(document).ready (function() {
	//Handler for .ready() called.
	$(window).on("load", function(){
			$.get("MuddaluruProjectContactDetails.html",function(data){
				$("#contactInfo").html(data);
            })

    });//end load event
});//end ready	