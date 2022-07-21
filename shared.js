const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');

modal.addEventListener('click', () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
})

selectPlanButtons.forEach((element) => {
    element.addEventListener('click', function () {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
});