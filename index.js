const clientWidth = document.body.clientWidth
function changeStoriesImages() {
    if (clientWidth <= 420) {
        let imgs = document.body.getElementsByClassName('story-image')
        let i = 1
        for (let img of imgs) {
            img.src=`img/mobile/stories/${i}.jpg`
            i++
        }
    }
}   
changeStoriesImages()   

function destinationSlider() {
    const elem = document.querySelectorAll('.scroll-block__item')
    const destinationsRow = document.querySelector('.destinations__row');
    const arrowScroll = document.querySelector('.scroll-arrows')
    elem[0].onclick = () => {
        elem[0].classList.add('scroll-block__item_colored') 
        elem[1].classList.remove('scroll-block__item_colored') 
        elem[2].classList.remove('scroll-block__item_colored')  
        if (clientWidth <= 420) {
            destinationsRow.style.transform = "translateX(420px)"
        } else {
            destinationsRow.style.transform = "translateX(830px)"
        }
    } 
    elem[1].onclick = () => {
        destinationsRow.style.transform = 'none'
        elem[0].classList.remove('scroll-block__item_colored') 
        elem[1].classList.add('scroll-block__item_colored') 
        elem[2].classList.remove('scroll-block__item_colored') 
    }
    elem[2].onclick = () => {
        elem[0].classList.remove('scroll-block__item_colored') 
        elem[1].classList.remove('scroll-block__item_colored') 
        elem[2].classList.add('scroll-block__item_colored')
        if (clientWidth <= 420) {
            destinationsRow.style.transform = "translateX(-420px)"
        } else {
            destinationsRow.style.transform = "translateX(-830px)" 
        }
    }

    // arrowScroll.onclick = (event) => {
    //     console.log(event.target)
    //     if (event.target != document.querySelector('.scroll-arrows__item')) return;
    //     let imagePosition = window.getComputedStyle(destinationsRow, null);
    //     if (event.target === document.querySelector('.scroll-arrows__item-left')){

    //     }
    // }

   
}
destinationSlider()



const burgerBtn = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeBtn = document.querySelector('.close-icon')
const overlay = document.querySelector('.menu-overlay')

burgerBtn.onclick = (event) =>{
    hamburgerMenu.classList.add('active');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';

}

overlay.onclick = (event) => {
    if (event.target != overlay) return;
    closeMenu()
    closePopupLogin()
}

const closeMenu = closeBtn.onclick = (event) =>{
    hamburgerMenu.classList.remove('active');
    overlay.style.display = 'none';
    document.body.style.overflow = 'visible';

}

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if(menuLinks.length>0){
    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(event){
        const menuLink = event.target;
        closeMenu()
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            event.preventDefault();
        }
    }

}

const loginBtn = document.querySelector('.header__button')
const popupLogin = document.querySelector('.login-pop-up')

loginBtn.onclick = (event) => {
    popupLogin.classList.add('active-login');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    popupLogin.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
}

const closePopupLogin = overlay.onclick = (event) => {
    popupLogin.classList.remove('active-login');
    overlay.style.display = 'none';
    document.body.style.overflow = 'visible';
    popupLogin.style.boxShadow = 'none';

}

