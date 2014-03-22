var setup = function(e) {
	var container = document.getElementById("buttons");
	
	var dex = JSON.parse(localStorage['pokedex']);
	if ((Object.keys(dex).length) > 75) { // Add Chrome City as a button :)
		var chromeCity = document.createElement('div');
		chromeCity.className = "button city";
		chromeCity.id = "city";
		chromeCity.innerHTML = "<span>Chrome City</span>";
		container.appendChild(chromeCity);
	}
	
	var buttons = document.getElementsByClassName("button");
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].onclick = click(buttons[i]);
		console.log(buttons[i].onclick);
	};
};

var click = function(e) {
	return function() {
		if(e.classList.contains("region")){
			// We should check if the user has an S. S. Ticket, of course
			document.getElementById("title").innerHTML = "Change the zone";
			document.getElementById("regions").classList.add("hidden");
			
			document.getElementById(e.id + "zones").classList.remove("hidden");
			return;	
		}
		
		// If the user somehow (inspect element) chooses a Johto zone without an S. S. Ticket:
		// we should check if the user has one here too.
		localStorage['location'] = e.id;
		chrome.browserAction.setIcon({"path":localStorage['location'] + ".png"});
	};
}

document.addEventListener('DOMContentLoaded', function () {
	setup();
});
