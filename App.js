window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          hamburgerSpan = document.querySelectorAll('#hamburger-span'),
          hamburgerMenu = document.querySelector('.hamburger-menu '),
          button = document.querySelectorAll('button'),
          container = document.querySelector('.container'),
          nightButton = document.querySelector('.night-button'),
          section1 = document.querySelector('.section1'),
          section2 = document.querySelector('.section2'),
          services = document.querySelector('.services'),
          section3 = document.querySelector('.section3'),
          contact = document.querySelector('.contact'),
          replaceColor = document.querySelector('.replace-color')
          replaceColorIcon = document.querySelector('.replace-color-icon '),
          figure2 = document.querySelector('.figure-2')
          moon = document.querySelector('.fa-moon');
          sun = document.querySelector('.fa-sun');

// ********************************************************HAMBURGER MENU JS**************************
    hamburgerMenu.addEventListener('click', ()  => {
        menu.classList.toggle('active-menu');
        hamburgerSpan.forEach(element => {
            element.classList.toggle('active-span')
        });

        hamburgerMenu.classList.toggle('hamburger-inset')
        container.classList.toggle('.active-container')
    })


// ********************************************************NIGHT AND LIGHT JS**********************************

    nightButton.addEventListener('click', () => {
        button.forEach(item => item.classList.toggle('sun'))
        section1.classList.toggle('sun');
        section2.classList.toggle('sun');
        services.classList.toggle('sun');
        section3.classList.toggle('sun');
        contact.classList.toggle('sun');
        document.body.classList.toggle('sun');
        if(document.body.classList.contains("sun")){
            moon.style.display = 'block';
            sun.style.display = 'none'
        }
        else{
            moon.style.display = 'none';
            sun.style.display = 'block'
        }
    })





// *******************************************************ALL BUTTON JS********************************
    button.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('button-inset')
        })
    })


// ********************************************************REPLACE COLOR JS******************************
    replaceColorIcon.addEventListener('click', () => {
        replaceColor.classList.toggle('active-replace-color')
    })

    setStyleColor = (color) => {
        console.log('salom');
        if(color === 'color1') {
            figure2.style.border = "20px solid #fb839e"
        }else if(color === 'color2') {
            figure2.style.border = "20px solid #ec9412"
        }  else if(color === 'color3') {
            figure2.style.border = "20px solid #1fc586"
        } else if(color === 'color4') {
            figure2.style.border = "20px solid #2eb1ed"
        } else if(color === 'color5') {
            figure2.style.border = "20px solid #cc3a3b"
        }  
    }




// **************************************************************ABOUT ME JS************************************
    let education = document.querySelector('#education'),
    experience = document.querySelector('#Experience'),
    educationCard = document.querySelector('.education-card'),
    experienceCard = document.querySelector('.Experience-card');


education.addEventListener('click', () => {
    educationCard.style.display = 'block';
    education.style.color = 'red';
    experience.style.color = '#fb839e';
    experienceCard.style.display = 'none';

})
experience.addEventListener('click', () => {
    educationCard.style.display = 'none';
    experienceCard.style.display = 'block';
    experience.style.color = 'red';
    education.style.color = '#fb839e';
});





// ***************************************************OPEN AND CLOSE ICON**************************************
let home = document.querySelector('.home');
let icon1 = document.querySelector('.icon1');
let icon2 = document.querySelector('.icon2');
let icon3 = document.querySelector('.icon3');
let icon4 = document.querySelector('.icon4');
let openHome = document.querySelector('.open-home');
let closeHome = document.querySelector('.close-home');

openHome.addEventListener('click', showHome);
closeHome.addEventListener('click', noneHome);

function showHome() {
    icon1.style.transform = `translateX(-145px)`;
    icon2.style.transform = `translateX(-131px) translateY(-57px)`;
    icon3.style.transform = `translateX(-99px) translateY(-110px)`;
    icon4.style.transform = `translateX(-47px) translateY(-142px)`;
    closeHome.style.display = 'block';
    openHome.style.display = 'none';
}

function noneHome() {
    icon1.style.transform = `translateX(0px)`;
    icon2.style.transform = `translateX(0px) translateY(0px)`;
    icon3.style.transform = `translateX(0px) translateY(0px)`;
    icon4.style.transform = `translateX(0px) translateY(0px)`;
    closeHome.style.display = 'none';
    openHome.style.display = 'block';
}


AOS.init({
    offset: 200,
    duration: 1000,
});

// ------------------------------LOADER---------------------------------------

const loader = document.querySelector('#preloader');
const parent = document.querySelector('.parent')
    window.addEventListener('load', () =>{
        setTimeout(() =>{
            loader.remove();
            parent.classList.add('active-parent')
        }, 5000)
    })
})