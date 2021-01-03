$(function() {

	let linksArray = [
		{
			subtitle: "RoboRace",
			description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, autem sapiente libero, quisquam laudantium cupiditate! ",
		},

		{
			subtitle: "TowerLight Urcap",
			description : "Girl quit if case mr sing as no have. Her too add narrow having wished. Polite do object at passed it is. Small for ask shade water manor think men begin. Strictly numerous outlived kindness whatever on we no on addition. Expression alteration entreaties mrs can terminated estimating. As so seeing latter he should th",
		},

		{
			subtitle: "WIKI",
			description : "Up hung mr we give rest half. Words to up style of since world. Celebrated delightful an especially increasing instrument am. Uncommonly no it announcing melancholy an in. Feel and make two real miss use easy. He felicity no an at packages answered opinions juvenile. He felicity no an at packages answered opinions juvenile. Now sum",
		},

		{
			subtitle: "RAIPAP",
			description : "An concluded sportsman offending so provision mr education. Equally he minutes my hastily. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Bed uncommonly his discovered for estimating far. Their saved linen downs tears son add music. Indulgence contrasted sufficient to unpleasant in in insensible",
		}
	]

	$('.links__text__subtitle')[0].innerHTML = linksArray[0].subtitle;
    $('.links__text__description')[0].innerHTML = linksArray[0].description;

    $(".header__menu__dropdown").click(function() {
        event.target.querySelector("section").classList.toggle("display-none");
        event.target.querySelector("i").classList.toggle("fa-caret-down");
        event.target.querySelector("i").classList.toggle("fa-caret-up");
        event.target.classList.toggle("header__menu__item--active");
    });

    $('.header__submenu__menu').click(function() {
        $(".header__mobile__menu")[0].classList.toggle('header__mobile__menu--active');
    });
    $('.header__mobile__menu__exit').click(function() {
        $(".header__mobile__menu")[0].classList.toggle('header__mobile__menu--active');
    });

    for (let i = 0; i < $('.projects__item').length; i++) {
        let projectItemClassName = "projects__item-" + i;
        $('.projects__item')[i].classList.add(projectItemClassName);
    }

    $(".projects")[0].style.width = $(window).width() + "px";

    $(window).resize(function() {
        if ($(window).width() < 2000) { $(".projects")[0].style.width = $(window).width() + "px"; };
    });

    for (let i = 0; i < $('.gallery__grid__thumb').length; i++) {
        let n = "gallery__grid__thumb-ph" + i;
        $('.gallery__grid__thumb')[i].classList.add(n);
    }

    $('.links__main__item')[0].classList.add('links__main__item--active');

    let linksItemLength = $('.links__main__item').length;

    let linksCurrent = 0;

    for (let i = 0; i < linksItemLength; i++) {
                $('.links__main__item')[i].setAttribute('link-id', i);
            }

    $('.links__main__item').hover(
        function() {
            for (let i = 0; i < linksItemLength; i++) {
                $('.links__main__item')[i].classList.remove('links__main__item--active');
                this.classList.add('links__main__item--active');
            }
           	let currentLinkId = this.getAttribute('link-id');
        	$('.links__text__subtitle')[0].innerHTML = linksArray[currentLinkId].subtitle;
        	$('.links__text__description')[0].innerHTML = linksArray[currentLinkId].description;
        },
        function() {

        }
    );
});