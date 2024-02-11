console.log('hello world')
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