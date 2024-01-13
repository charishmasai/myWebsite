//created by Muddaluru SaiCharishma
//id: 700700910

//variable:
var xhr;

window.addEventListener("load", function(){
	document.getElementById("submitBtn").addEventListener("click", function(){xhrFunction()}, false);
	
}, false);//end load Event listener.

function xhrFunction(){
	try{
		//instantiating xhr object.
		xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange", function(){
			if(xhr.readyState == 4 && xhr.status == 200 && xhr.responseXML){
				submitFunction();
			}//end if
		}, false);
		xhr.open("get", "MuddaluruMenu.xml", true);
		xhr.send(null);
	}catch(exception){
		alert("XHR failed" + exception.messageText);
	}//end try catch
}
//for submit functionality
function submitFunction(){
	var menu = xhr.responseXML.getElementsByTagName("curry");
	var order = document.getElementById("orderDetails").value;
	var totalPrice = 0;
	var tax = 0.1;
	for (var i = 0; i<menu.length; i++){
		var name = menu.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = menu.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		price = parseFloat(price.substring(1, price.length));
		if(name.toLowerCase() == order.toLowerCase()){
			totalPrice += price + tax * price ;
			document.getElementById("orderMessage").innerHTML = "Order Placed Successfully and the total price is $" + totalPrice;
			return;
		}
		else{
			totalPrice += 0 ;
			document.getElementById("orderMessage").innerHTML = "Please check the order and try again.";
		}
	}
}