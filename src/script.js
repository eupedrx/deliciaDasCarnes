window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})



document.addEventListener('DOMContentLoaded', function () {
    const carneItems = document.querySelectorAll('.carne-item');

    carneItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.querySelector('span').style.opacity = '1';
            this.querySelector('button').style.opacity = '1';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.querySelector('span').style.opacity = '1';
            this.querySelector('button').style.opacity = '0';
        });
    });
});