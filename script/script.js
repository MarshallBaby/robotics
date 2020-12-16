$(function() {
		$(".header__menu__dropdown").click(function() {
  		event.target.querySelector("section").classList.toggle("display-none");
  		event.target.querySelector("i").classList.toggle("fa-caret-down");
  		event.target.querySelector("i").classList.toggle("fa-caret-up");
  		event.target.classList.toggle("header__menu__item--active");
		});  
});