/* Бургер */

//  $('.icon-menu').on('click', function(event){
//    event.preventDefault();
// 	$('.menu').slideToggle(300)
// 	});

	// $('.icon-menu').on('click', function(event){
	// 	event.preventDefault();
	// 	$('.menu').slideToggle(300)
	//  })


	$('.mobile div').on('click', () => {
		$('.mobile div').toggleClass('active');
		$('.mobile nav').toggleClass('open');
		$('.mobile nav ul').toggleClass('show');
  });
  

 /* Бургер */
/* Slider1 */
	
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:2,
    	slidesToScroll:1,
		speed:00,
		easing:'linear',
    	variableWidth:true,
		infinite:false,
		touchMove:false,
	 	centerMode:true,
		 autoplay:true,
		 centerMode:false,
		 autoplaySpeed:1000,
		});

/* Slider1 */

/* Slider2 */

		$('.slider2').slick({
			arrows:false,
			dots:false,
			slidesToShow:1,
			 slidesToScroll:1,
			speed:200,
			easing:'linear',
			 variableWidth:true,
			infinite:true,
			touchMove:false,
			 centerMode:true,
			 autoplay:true,
			 centerMode:false,
			 autoplaySpeed:1000,
			});
	

/* Slider2 */


	  /* Анимация */

	  function onEntry(entry) {
		entry.forEach(change => {
		  if (change.isIntersecting) {
			change.target.classList.add('element-show');} else {
				change.target.classList.remove('element-show')
			}
		});
	 }
	 
	 let options = {
		threshold: [0.5] };
	 let observer = new IntersectionObserver(onEntry, options);
	 let elements = document.querySelectorAll('.element_animation');
	 
	 for (let elm of elements) {
		observer.observe(elm);
	 };
	
		/* Анимация */