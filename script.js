
document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    window.addEventListener('scroll', function () {
        // Если прокрутили дальше 800px, показываем кнопку
        if (scrollY > 800) {
            btn.classList.add('show');
            // Иначе прячем
        } else {
            btn.classList.remove('show');
        }
    });

    // При клике прокручиваем на самый верх
	btn.addEventListener('click', function(click) {
		click.preventDefault();
		scrollTo(0, 0);
	});
});

// document.querySelectorAll('a[href^="#"').forEach(link => {

//     link.addEventListener('click', function(e) {
//         e.preventDefault();

//         let href = this.getAttribute('href').substring(1);

//         const scrollTarget = document.getElementById(href);
// 		//const topOffset = 0;
//         const topOffset = document.querySelector('.page-top').offsetHeight;

//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });
//     });
// });