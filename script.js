let header = document.querySelector("header");
window.addEventListener("scroll",() =>{
	header.classList.toggle("sticky",window.scrollY > 0);

})
function toggleMenu(){
	const menuToggle=document.querySelector(".menu-toggle");
	menuToggle.classList.toggle('active');
	const navigation = document.querySelector('.navigation');
	navigation.classList.toggle("active");
}