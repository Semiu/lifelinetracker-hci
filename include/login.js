/**
This code accepts the pre-programmed usernames and passwords as validation for login into the system

*/


var count= 3;
function validate(){
	var un = document.login.username.value;
	var pw = document.login.password.value;
	var valid = false;
	var usernameArray = ["Semiu", "Quinn", "Nick"];
	var passwordArray = ["12345", "12345", "12345"];
	for (var i = 0; i < usernameArray.length; i++){
        if ((un == usernameArray[i]) && (pw == passwordArray[i])){
		valid = true;
		break;
	}
}
	if (valid)
	{
		alert("Login was successful");
		window.location = "Main.php";
		return false;
	}
	var again = " tries";
	if (count ==1)
	{
		again = " try"
	}
	if (count >= 1)
	{
		alert("Wrong password or username")
		count--;
	}
	else
	{
		alert("Incorrect password or username you are now blocked");
		document.login.username.value = "You are now Blocked";
		document.login.username.disabled = true;
		document.login.password.disabled = true;
		return false;
	}
}