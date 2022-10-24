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
const addShadow = document.querySelector('.background-image')
burgerBtn.onclick = (event) =>{
    hamburgerMenu.classList.add('active')
    document.body.classList.add('shadow-screen')
    document.body.style.transition = '0.5s'
}

const closeMenu = closeBtn.onclick = (event) =>{
    hamburgerMenu.classList.remove('active')
    document.body.classList.remove('shadow-screen')   
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
