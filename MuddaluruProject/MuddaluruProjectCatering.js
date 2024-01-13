
//created by Muddaluru SaiCharishma
//700700910
$(document).ready(function(){
	//HANDLING JSON ARRAYS WITH .EACH LOOPING
		if($("#cateringList").length > 0){
			//start ajax request
			$.ajax({
				url: "MuddaluruProjectCatering.json",
				dataType: "json",
				success: function(data){
					console.log('success');
					$(data.cateringDetails).each(function(){
						//call function and send data
						displayDetails(this.title, this.size1, this.size2, this.size3);
					})//each
				}, //success
				error:function(xhr, textStatus, errorThrown){
					alert("An error occured!" + (errorThrown? errorThrown : xhr.status + " " + textStatus));
				}//error
			});//ajax
		}//end if
	
	
	function displayDetails(name, price1, price2, price3){
		var cateringRow = document.createElement("tr");
		var titleTD = document.createElement("td");
		var price1TD = document.createElement("td");
		var price2TD = document.createElement("td");
		var price3TD = document.createElement("td");
		
		$(titleTD).text(name);
		$(price1TD).text(price1);
		$(price2TD).text(price2);
		$(price3TD).text(price3);
		
		//add cells to row
		$(cateringRow).append(titleTD, price1TD, price2TD, price3TD);
		//add row to table
		$("#cateringList").append(cateringRow);
	}//end function displayDetails
}); //ready