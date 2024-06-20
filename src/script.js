window.addEventListener("scroll", function(){
    let header = document.querySelector('#navbar')
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


let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    for (let slide of slides) {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

setInterval(() => {
    changeSlide(1);
}, 3000);

showSlide(currentIndex);


// Radio Button


const customRadios = document.querySelectorAll('.custom-radio input[type="radio"]');
customRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        // Resetar todos os checkmarks
        document.querySelectorAll('.custom-radio .checkmark').forEach(checkmark => {
            checkmark.style.backgroundColor = '#eee';
        });
        // Aplicar cor ao checkmark selecionado
        if (this.checked) {
            this.nextElementSibling.style.backgroundColor = '#2196F3';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const selectTrigger = document.getElementById('carne_preferida');
    const customSelect = document.getElementById('carnePreferidaSelect');
    const optionsList = document.querySelector('.custom-options');
    const arrow = document.querySelector('.arrow');

    selectTrigger.addEventListener('click', function() {
        customSelect.classList.toggle('open');
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
        arrow.style.transform = customSelect.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
    });

    optionsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('custom-option')) {
            const selectedValue = event.target.getAttribute('data-value');
            const selectedText = event.target.textContent;
            selectTrigger.textContent = selectedText;
            document.getElementById('carne_preferida_value').value = selectedValue;
            customSelect.classList.remove('open');
            optionsList.style.display = 'none';
        }
    });

    selectTrigger.addEventListener('click', function() {
        arrow.style.transform = 'rotate(180deg)';
    });
});