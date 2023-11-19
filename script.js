//your JS code here. If required.
let p=document.getElementById("counter");
let button= document.getElementById("incrementBtn");

button.addEventListener("click", onclicking);

function onclicking() {
	alert(p.innerText);
	
	p.innerText++;
	
	
}
