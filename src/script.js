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



document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            // Fecha todos os accordions
            accordions.forEach(acc => {
                if (acc !== accordion) {
                    acc.classList.remove('active');
                    acc.querySelector('.accordion-content').style.display = 'none';
                }
            });

            // Abre ou fecha o accordion clicado
            this.classList.toggle('active');
            const panel = this.querySelector('.accordion-content');
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    });
});