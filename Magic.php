<html>
<link rel="stylesheet" type="text/css" href="include/styles.css">
<script src="./include/magic.js"></script>
<style>
#magicButton{
	background-color: white;
	color: blue;
}
</style>
<body>
	<!-- The Modal -->
	<div id="magicModal" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
		  <div class="modal-header">
			<h2>Magic Setup</h2>
		  </div>
		  <div class="modal-body">
		  Number of Players: <input id="numberOfPlayers" min="1" max="6" value="1" type="number"><br>
		  Starting Life Total: <input id="startingLife" min="5" step="5" value="20" type="number"><br>
		  Are you playing commander/edh?<br>
		  <table class="cmdrTable" align="center">
			<tr>
				<th>Yes</th>
				<th>No</th>
			</tr>
			<tr>
				<th><input type="radio" name="commander" value="true"></th>
				<th><input type="radio" name="commander" value="fale"></th>
			</tr>
		  </table>
		  </div>
		  <div class="modal-footer">
			<button class="buttons" type="button" onClick="setupNext()">NEXT</button>
		  </div>
		</div>
	</div>
	<!-- The Name Modal -->
	<div id="magicNameModal" class="modal">
		<!-- Modal content -->
		<div class="modal-content">
		  <div class="modal-header">
			<h2>Magic Setup</h2>
		  </div>
		  <div class="modal-body">
		  <div id="nameInputs">
		  </div>
		  </div>
		  <div class="modal-footer">
			<button type="button" class="buttons" onClick="finalSetup()">Finalize</button>
		  </div>
		</div>
	</div>
	<?php include 'include/nav.php'; ?></th>
	<div id="pageContent"></div>
</body>
</html>