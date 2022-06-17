/*=============== SHOW MENU ===============*/

const showMenu = (toggLeId, navId) =>{
    const toggle = document.getElementById(toggLeId),
    nav = document.getElementById(navId)

    // validate that variables exist
    if(toggle && nav){
        // We add the show-menu class to the div tag width the nav__menu class
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*=================== REMOVE MENU MOBILE =============*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*============= SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

window.addEventListener('srcoll', scrollActive)

function scrollActive(){
    const srcollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scroll > sectionTop && scroll <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*======================= CHANGE BACKGROUND HEADER ==================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scroll >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/* ======================= SCROLL TOP ==========================*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scroll >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}

window.addEventListener('scroll', scrollTop)


/*============== DARK LIGHT THEME ===================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const  getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'
const  getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

// We validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Active / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentIcon())
    localStorage.setItem('selected-icon', getCurrentIcon(

        
    ))
})