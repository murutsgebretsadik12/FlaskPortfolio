
// header toggle
const menuBtn = document.getElementById('MenuBtn')

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile_nav_active');
    this.classList.toggle('fa-xmark')
} )

//typejs initailize

let typed = new Typed('.auto_input', {
	strings: ['Muruts Gebretsadik.', 'Web Developer.','Freelancer.', 'UI Designer.'],
	typeSpeed: 60,
	backSpeed:60,
	loop: true,
	loopCount: Infinity,
	startDelay:500,
	
});

// active link state on scroll
let navlinks = document.querySelectorAll("nav ul li a")
console.log(navlinks)

// Get All Section
let sections =document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function(){
	const scrollpos = window.scrollY + 20
	sections.forEach(section =>{
		if(scrollpos > section.offsetTop && scrollpos < (section.offsetTop + section.offsetHeight)){
			navlinks.forEach(link =>{
				link.classList.remove('active')
				if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
					link.classList.add('active')
				}
				
			});
		}
	});
});