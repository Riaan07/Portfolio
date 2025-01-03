
document.querySelector('.btn').addEventListener('click', function () {
    console.log('Resume download initiated!')
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
});
