//HEADER_NAV-TOGGLE
function initHeaderNavToggle() {
    const headerNavToggle = document.querySelector(".header_nav-toggle");
    headerNavToggle.addEventListener("click", (e)=>{
        const target = document.querySelector(e.target.dataset.target);
        target.classList.toggle("is-active");
    })
}

initHeaderNavToggle();

// MENU-LINKS
function initMenuLinks() {
    const menuLinks = document.querySelectorAll(".menu_link");
    const effectClass = "is-selected";

    function changeSelectedMenuLink(e) {
        menuLinks.forEach(menuLink => {
            menuLink.classList.remove(effectClass);
        })
        e.target.classList.add(effectClass);
    }

    // Adiciona o evento de click a todos os links
    if (Array.forEach !== undefined) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", changeSelectedMenuLink);
        })
    } else {
        console.log("O seu computador não tem suporte ao forEach e por isso alguns efeitos não poderam ser aplicados.");
    }
}

initMenuLinks();

// CARROUSEL
function initCarrousel() {
    const carrousel = document.querySelector(".carrousel");
    const carrouselImages = Array.from(document.querySelectorAll(".carrousel_image"));
    const effectClass = "is-selected";

    const getSelectedItem = () => document.querySelector(".carrousel_image.is-selected");
    const adjustCarrouselToImage = () => carrousel.style.height = getSelectedItem().getBoundingClientRect().height+"px";
    const carrouselSlide = (n) => {
        let atualIndex = carrouselImages.findIndex(ci => ci === getSelectedItem());
        let nextIndex = atualIndex + n;
        
        if (atualIndex === carrouselImages.length-1) {
            nextIndex = 0;
        }

        carrouselImages[atualIndex].classList.remove(effectClass);
        carrouselImages[nextIndex].classList.add(effectClass);
        adjustCarrouselToImage();
    }

    window.addEventListener("resize", adjustCarrouselToImage);

    setInterval(() => {
        carrouselSlide(1);
    }, 3000);

    carrouselSlide(1);
}

initCarrousel();