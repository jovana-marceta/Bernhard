function menuToggle(){
	let overlay = document.getElementById('hamburger-overlay');
	overlay.classList.toggle('active');

	let icon = document.getElementById('toggleIcon');
	icon.classList.toggle('active');
}