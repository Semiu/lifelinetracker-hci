<html>

<header>
<link rel="stylesheet" type="text/css" href="styles.css">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="game.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="gameScript.js"></script>

</header>

<body>
	
<div class="title">
<h1>Life Tracker</h1>
</div>

<?php
 
echo '<label id="defaultPlayers" hidden>'.$_POST['players'].'</label>';
		
echo '<label id="defaultLife" hidden>'.$_POST['life'].'</label>';
	
?>
	
<ul id="list"> </ul>
	
<div class="menu">
  	
<button type="button" onclick="window.location.href='setup.html'">Home</button><br/>

<button type="button" onclick="resetLife()">Reset</button><br/>
 
<button type="button">Customize</button>

</div>


</body>


</html>