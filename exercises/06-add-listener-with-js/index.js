window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	// Some code here
	const greenButton = document.getElementById("theGreen");
	greenButton.addEventListener("click", clickButton);
};

// The listener function here
const clickButton = () => {
	alert("woohoo!");
}