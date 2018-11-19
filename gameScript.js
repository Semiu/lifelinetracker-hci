function resetLife(){
	for(var i = 0; i<document.getElementById('defaultPlayers').innerHTML;i++){
		var string = "player"+i;
		document.getElementById(string).value = document.getElementById('defaultLife').innerHTML;
	}
}

$(document).ready(function(){
	var list = $("#list");

	var updateLayout = function(listItems){
		for(var i = 0; i < listItems.length; i ++){
			var offsetAngle = 360 / listItems.length;
			var rotateAngle = offsetAngle * i;
			$(listItems[i]).css("transform", "rotate(" + rotateAngle + "deg) translate(0, -200px) rotate(-" + rotateAngle + "deg)")
		}
	};

	$(document).ready(function() {
		for(var i = 0; i<document.getElementById('defaultPlayers').innerHTML;i++){
			var counter = "#counter" + i;
			var listItem = $("<li class='list-item'>"
									+"<button type=\"button\" class= \"stepButton\" onclick=\"getElementById('player" + i + "').stepDown()\">-</button>"
									+"<input class=\"lifeCounter\" max=\"999\" min=\"0\" type=\"number\" id=\"player" + i + "\" value=\"" + document.getElementById('defaultLife').innerHTML + "\" readonly>"
									+"<button type=\"button\" class= \"stepButton\"  onclick=\"getElementById('player" + i + "').stepUp()\">+</button>"
									+"</li>");
			list.append(listItem);
			var listItems = $(".list-item");
			updateLayout(listItems);
		}
	});
});

function startGame() {
    myGameArea.start();
}
