function init(){
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll('.page');
    const backgrounds = [
        'radial-gradient(#2B3760, #0B1023)',
        'radial-gradient(#4E3022, #161616)',
        'radial-gradient(#4E4342, #161616)'
        ];
    //Tracker
    let current = 0;

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function (){
            changeDots(this);
            nextSlide(index)
        });
    })
    function changeDots(dot){
        slides.forEach(slide =>{
            slide.classList.remove('active');
        })
        dot.classList.add("active");
    }
    function nextSlide(pageNumber){
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextLeft = nextPage.querySelector(".hero .model-left");
        const nextRight = nextPage.querySelector(".hero .model-right");
        const currentLeft = currentPage.querySelector(".hero .model-left");
        const currentRight = currentPage.querySelector(".hero .model-right");
        const nextText = nextPage.querySelector(".details");
        const portfolio = document.querySelector(".portofolio")

        const t1 = new TimelineMax(); //FIXME get webstorm to identify gsap
        t1.fromTo(currentLeft, 0.3, {y: "-10%"}, {y: "-100%"})
            .fromTo(currentRight, 0.3, {y: "10%"}, {y: "100%"}, "-=0.2");
    }
}

init();