const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');


modal.addEventListener('click', () => {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
})

selectPlanButtons.forEach((element) => {
    element.addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open')
    });
});


toggleButton.addEventListener('click', () => {
   mobileNav.classList.add('open');
   backdrop.classList.add('open');

});

backdrop.addEventListener("click", function() {
        mobileNav.classList.remove('open');
        backdrop.classList.remove('open');
});