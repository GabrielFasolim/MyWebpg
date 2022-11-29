const menuLinks = document.querySelectorAll('.navbar navbar-expand-lg bg-light a[href^="#"]');


function getDistanceFromTheTop(element){
    const id = element.getAtrribute("href");
    return document.querySelector(id).offsetTop;
    
}
function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth"
    })

}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop)
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);

});