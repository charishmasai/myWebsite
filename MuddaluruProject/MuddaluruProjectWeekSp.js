
//created by Muddaluru SaiCharishma
//700700910
$(document).ready(function(){
	//HANDLING JSON ARRAYS WITH .EACH LOOPING
	//$('#weekndBtn').click(function(){
		if($("#weekendSpclsList").length > 0){
			//start ajax request
			$.ajax({
				url: "MuddaluruProjectWeekSp.json",
				dataType: "json",
				success: function(data){
					console.log('success');
					$(data.weekendspecials).each(function(){
						//call function and send data
						showDeals(this.name, this.price);
					})//each
				}, //success
				error:function(xhr, textStatus, errorThrown){
					alert("An error occured!" + (errorThrown? errorThrown : xhr.status + " " + textStatus));
				}//error
			});//ajax
		}//end if
	//});//click
	
	
	function showDeals(name, price){
		$("#weekendSpclsList").append("<strong>", name, "</strong>", "&nbsp;&nbsp;&nbsp;&nbsp;", "<strong>" , price , "</strong>", "</br></br>");
	}//end function showTable
}); //ready