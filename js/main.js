document.addEventListener("DOMContentLoaded", function() {
	sideMenu();
	toggleMenu();
	bannerCarousel();
	// stickyNav();
});

function sideMenu() {
	// console.log(window.innerWidth);
	if (window.innerWidth < 768) {
		let sideNav = document.createElement('div');
		let menuMobile = document.querySelector('.header--mobile');
		let logo = document.querySelector('.header--logo');
		let social = document.querySelector('.header--list__social');
		let search = document.querySelector('.header--search');
		let searchButton = document.querySelector('.header--search>.btn-blue');
		let nav = document.querySelector('.header--nav');
		let searchIcon = document.createElement('span');
		sideNav.className = 'sidenav';
		searchButton.textContent='';
		searchIcon.classList.add('fa', 'fa-search');
		searchButton.appendChild(searchIcon);
		sideNav.appendChild(social);
		sideNav.appendChild(search);
		sideNav.appendChild(nav);
		menuMobile.prepend(logo);
		menuMobile.appendChild(sideNav);

	}
}
function toggleMenu() {
	$('.header--hamburger').on('click', function() {
		$('.sidenav').toggleClass('open');
		$(this).toggleClass('open');
		$('body,html').toggleClass('open');
	});
}
function bannerCarousel() {
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 4000
	});
}
function stickyNav() {
	let header = document.querySelector('.header');
	let sticky = header.offsetHeight;
	let prevScrollpos = window.pageYOffset;
	window.onscroll = function() {
		let currentScrollPos = window.pageYOffset;
		if (window.pageYOffset >= sticky) {
			header.classList.add('fixed');
			// if (prevScrollpos > currentScrollPos) {
   //  		header.style.top = "0";
   //  		header.classList.add('fadeInDown');
   //  		header.classList.remove('fadeOutUp');
  	// 	} else {
   //  		header.style.top = sticky;
   //  		header.classList.remove('fadeInDown');
   //  		header.classList.add('fadeOutUp');
			// }
  	// 	prevScrollpos = currentScrollPos;
		}else {
			header.classList.remove('fixed');
			// header.classList.add('slideUp');
		}p
	}
}