const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
	hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
		? 'close'
		: 'menu';
	
	mobile_menu.classList.toggle('is-open');
})


/*cards*/


const observer = new IntersectionObserver((entries) =>  {
	entries.forEach ((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
		else {
			entry.target.classList.remove('show');
		}
	})
})

const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe (el));


/* search filter */




