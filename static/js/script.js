console.log('hello world')
// header toggle
const menuBtn = document.getElementById('MenuBtn')

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile_nav_active');
    this.classList.toggle('fa-xmark')
} )