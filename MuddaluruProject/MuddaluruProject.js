//created by Muddaluru SaiCharishma
//id: 700700910

//variable:
var xhr;
var messageText = "";
window.addEventListener("load", function(){
	//creating event listeners for menu buttons
	document.getElementById("allBtn").addEventListener("click", function(){raiseXHR("all")}, false);
	document.getElementById("aptbtn").addEventListener("click", function(){raiseXHR("apetizer")}, false);
	document.getElementById("soupBtn").addEventListener("click", function(){raiseXHR("soup")}, false);
	document.getElementById("curryBtn").addEventListener("click", function(){raiseXHR("curry")}, false);
	document.getElementById("biryaniBtn").addEventListener("click", function(){raiseXHR("biryani")}, false);
	document.getElementById("kidsBtn").addEventListener("click", function(){raiseXHR("kids")}, false);
	document.getElementById("dessertsBtn").addEventListener("click", function(){raiseXHR("dessert")}, false);
	document.getElementById("drinksBtn").addEventListener("click", function(){raiseXHR("drink")}, false);
}, false);//end load Event listener.

function raiseXHR(name){
	try{
		//instantiating xhr object.
		xhr = new XMLHttpRequest();
		xhr.addEventListener("readystatechange", function(){
			if(xhr.readyState == 4 && xhr.status == 200 && xhr.responseXML){
				switch(name){
					case "all":
						displayAllMenu();
						break;
					case "apetizer":
						messageText = "";
						displayApetizerMenu();
						break;
					case "soup":
						messageText = "";
						displaySoupMenu();
						break;
					case "curry":
						messageText = "";
						displayCurryMenu();
						break;
					case "kids":
						messageText = "";
						displayKidsMenu();
						break;
					case "biryani":
						messageText = "";
						displayBiryaniMenu();
						break;
					case "dessert":
						messageText = "";
						displayDessertMenu();
						break;
					case "drink":
						messageText = "";
						displayDrinksMenu();
						break;
				}
			}//end if
		}, false);
		xhr.open("get", "MuddaluruProjectMenu.xml", true);
		xhr.send(null);
	}catch(exception){
		alert("XHR failed" + exception.messageText);
	}//end try catch
}//end function raiseXHR

function displayAllMenu(){
	//displaying apetizers list
	displayApetizerMenu();
	
	//displaying Soups List
	displaySoupMenu();
	
	//displaying curry entrees
	displayCurryMenu();
	
	//displaying kids menu
	displayKidsMenu();
	
	//Displaying Biryani list
	displayBiryaniMenu();
	
	//Displaying desserts menu
	displayDessertMenu();
	
	//Displaying drinks menu
	displayDrinksMenu();
	
}

//displaying apetizers list
function displayApetizerMenu(){
	var aptvegetarian = xhr.responseXML.getElementsByTagName("apvegetarian");
	var aptnonvegetarian = xhr.responseXML.getElementsByTagName("apnonvegetarian");
	messageText += "<h2 style='text-decoration: underline;'>Apetizers:</h2><h4 style='color: green;'>Vegetarian</h4>";
	for(var i = 0; i < aptvegetarian.length; i++){
		var name = aptvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = aptvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = aptvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	messageText += "<h4 style='color: red;'>Non Vegetarian</h4>"
	for(var i = 0; i < aptnonvegetarian.length; i++){
		var name = aptnonvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = aptnonvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = aptnonvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	document.getElementById("menuList").innerHTML = messageText;
}

//displaying Soups List
function displaySoupMenu(){
	var soupvegetarian = xhr.responseXML.getElementsByTagName("soupvegetarian");
	var soupnonvegetarian = xhr.responseXML.getElementsByTagName("soupnonvegetarian");
	messageText += "<h2 style='text-decoration: underline;'>Soups:</h2><h4 style='color: green;'>Vegetarian</h4>";
	for(var i = 0; i < soupvegetarian.length; i++){
		var name = soupvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = soupvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = soupvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	messageText += "<h4 style='color: red;'>Non Vegetarian</h4>"
	for(var i = 0; i < soupnonvegetarian.length; i++){
		var name = soupnonvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = soupnonvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = soupnonvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	document.getElementById("menuList").innerHTML = messageText;
}
//displaying curry entrees
function displayCurryMenu(){
	var curryvegetarian = xhr.responseXML.getElementsByTagName("curryvegetarian");
	var currynonvegetarian = xhr.responseXML.getElementsByTagName("currynonvegetarian");
	messageText += "<h2 style='text-decoration: underline;'>Curry Entrees:</h2><h4 style='color: green;'>Vegetarian</h4>";
	for(var i = 0; i < curryvegetarian.length; i++){
		var name = curryvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = curryvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = curryvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	messageText += "<h4 style='color: red;'>Non Vegetarian</h4>"
	for(var i = 0; i < currynonvegetarian.length; i++){
		var name = currynonvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = currynonvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = currynonvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	document.getElementById("menuList").innerHTML = messageText;
}
//displaying kids menu
function displayKidsMenu(){
	var kidsvegetarian = xhr.responseXML.getElementsByTagName("kidsvegetarian");
	var kidsnonvegetarian = xhr.responseXML.getElementsByTagName("kidsnonvegetarian");
	messageText += "<h2 style='text-decoration: underline;'>Kids Specials:</h2><h4 style='color: green;'>Vegetarian</h4>";
	for(var i = 0; i < kidsvegetarian.length; i++){
		var name = kidsvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = kidsvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = kidsvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	messageText += "<h4 style='color: red;'>Non Vegetarian</h4>"
	for(var i = 0; i < kidsnonvegetarian.length; i++){
		var name = kidsnonvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = kidsnonvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = kidsnonvegetarian.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	document.getElementById("menuList").innerHTML = messageText;
}
//Displaying Biryani list
function displayBiryaniMenu(){
	var biryanivegetarian = xhr.responseXML.getElementsByTagName("biryanivegetarian");
	var biryaninonvegetarian = xhr.responseXML.getElementsByTagName("biryaninonvegetarian");
	messageText += "<h2 style='text-decoration: underline;'>Biryani:</h2><h4 style='color: green;'>Vegetarian</h4>";
	for(var i = 0; i < biryanivegetarian.length; i++){
		var name = biryanivegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = biryanivegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br></br>";
	}
	messageText += "<h4 style='color: red;'>Non Vegetarian</h4>"
	for(var i = 0; i < biryaninonvegetarian.length; i++){
		var name = biryaninonvegetarian.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = biryaninonvegetarian.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br></br>";
	}
	document.getElementById("menuList").innerHTML = messageText;
}
//Displaying desserts menu
function displayDessertMenu(){
	var dessertDetails = xhr.responseXML.getElementsByTagName("desserts");
	messageText += "<h2 style='text-decoration: underline;'>Desserts:</h2>";
	for(var i = 0; i < dessertDetails.length; i++){
		var name = dessertDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = dessertDetails.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = dessertDetails.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	document.getElementById("menuList").innerHTML = messageText;
}
//Displaying drinks menu
function displayDrinksMenu(){
	var drinkDetails = xhr.responseXML.getElementsByTagName("drinks");
	messageText += "<h2 style='text-decoration: underline;'>Drinks:</h2>";
	for(var i = 0; i < drinkDetails.length; i++){
		var name = drinkDetails.item(i).getElementsByTagName("name").item(0).firstChild.nodeValue;
		var price = drinkDetails.item(i).getElementsByTagName("price").item(0).firstChild.nodeValue;
		var description = drinkDetails.item(i).getElementsByTagName("description").item(0).firstChild.nodeValue;
		messageText += "<strong>" + name + "</strong>" + "&nbsp;&nbsp;&nbsp;&nbsp;" + "<strong>" + price+ "</strong>" + "</br>" + description + "</br></br>";
	}
	document.getElementById("menuList").innerHTML = messageText;
}
