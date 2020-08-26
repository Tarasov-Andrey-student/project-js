const modal = document.querySelector('.show');
const seeWindow = document.querySelector('.open_window');
const noneWindow = document.querySelector('.close_window');

seeWindow.addEventListener('click', function () {
    modal.classList.remove('animate__backOutDown', 'hide');
    modal.classList.add('animate__animated', 'animate__backInDown');
});

noneWindow.addEventListener('click', function () {
    modal.classList.remove('animate__backInDown');
    modal.classList.add('animate__backOutDown');
    setTimeout(function() {
        modal.classList.add('hide');
    }, 500);
}); 