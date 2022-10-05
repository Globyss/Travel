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

