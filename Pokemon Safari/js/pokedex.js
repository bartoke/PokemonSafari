

//

var setup = function(e) {
	var pkdex = JSON.parse(localStorage['pokedex']);
	var hash = window.location.hash.substring(1);
	
	document.getElementById("collected_pokemon").innerHTML = Object.keys(pkdex).length;
	document.getElementById("collected_pokemon").innerHTML = hash;
	
	var table = document.getElementById("pokedex");
	for (var i = 1; i < 152; i++) {
		if(hash == "filter" && !pkdex[i]) continue;
		
		var row = table.insertRow(i - 1);
		var dexnumber = row.insertCell(0);
		var name = row.insertCell(1);
		var picture = row.insertCell(2);
		
		dexnumber.innerHTML = i;
		if (!pkdex[i]){
			name.innerHTML = "???";
			picture.style.backgroundImage = "url(http://images.sodahead.com/slideshows/000017353/2813640578_question_mark-72343836337_large.png)";
		} else {	
			name.innerHTML = pkdex[i].name;
			picture.style.backgroundImage = "url(" + pkdex[i].img + ")";
		}
	};
};

document.addEventListener('DOMContentLoaded', function () {
	setup();
});
