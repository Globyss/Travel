function changeStoriesImages() {
    if (document.body.clientWidth <= 420) {
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
    let elem = document.querySelectorAll('.scroll-block__item')
    let destinationsRow = document.querySelector('.destinations__row');
    elem[0].onclick = () => {
        destinationsRow.style.transform = "translateX(830px)"
        elem[0].classList.add('scroll-block__item_colored') 
        elem[1].classList.remove('scroll-block__item_colored') 
        elem[2].classList.remove('scroll-block__item_colored')    
    } 
    elem[1].onclick = () => {
        destinationsRow.style.transform = 'none'
        elem[0].classList.remove('scroll-block__item_colored') 
        elem[1].classList.add('scroll-block__item_colored') 
        elem[2].classList.remove('scroll-block__item_colored') 
    }
    elem[2].onclick = () => {
        destinationsRow.style.transform = "translateX(-830px)"
        elem[0].classList.remove('scroll-block__item_colored') 
        elem[1].classList.remove('scroll-block__item_colored') 
        elem[2].classList.add('scroll-block__item_colored') 
    }
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

closeBtn.onclick = (event) =>{
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
