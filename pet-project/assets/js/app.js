const showSidebar = document.querySelector(".nav");
const showSidebarLink = document.querySelectorAll(".nav__link");
const burgerMenu = document.querySelector(".burger");
const selectTab = document.querySelector(".select-tab");
const showTabWrapper = document.querySelector(".select-tab__wrapper");
const selectSlideTab = document.querySelectorAll(".slider__tab");
const introBgText = document.querySelector(".intro__background-text");
const selectTabText = document.querySelector(".select-tab");
const slideText = document.querySelectorAll(".slider__text");
const blockDeskTab = document.querySelector(".block-desktop");
const sliderImg = document.querySelector(".slider__images");
const sliderBtn = document.querySelector(".slider__btn")





function globalListener(elem) {
   let tagA = elem.target.closest('a'); // (1)
   if (tagA != null){
      
      
      introBgText.textContent = tagA.textContent;
      tagA.firstChild.textContent
      selectTabText.textContent = tagA.textContent;
      switch (tagA.textContent) {
         case "Magnificent":
            showSidebarLink[0].classList.add("active");
            showSidebarLink[1].classList.remove("active");
            showSidebarLink[2].classList.remove("active");
            slideText[0].classList.add("active");
            slideText[1].classList.remove("active");
            slideText[2].classList.remove("active");
            selectSlideTab[0].classList.add("active");
            selectSlideTab[1].classList.remove("active");
            selectSlideTab[2].classList.remove("active");
            selectSlideTab[3].classList.add("active");
            selectSlideTab[4].classList.remove("active");
            selectSlideTab[5].classList.remove("active");
            sliderImg.setAttribute('src' , "/pet-project/assets/images/slider-img/slide-1.jpg");
            break;
         case "Unrivalled":
            showSidebarLink[1].classList.add("active");
            showSidebarLink[0].classList.remove("active");
            showSidebarLink[2].classList.remove("active");
            slideText[1].classList.add("active");
            slideText[0].classList.remove("active");
            slideText[2].classList.remove("active");
            selectSlideTab[1].classList.add("active");
            selectSlideTab[0].classList.remove("active");
            selectSlideTab[2].classList.remove("active");
            selectSlideTab[4].classList.add("active");
            selectSlideTab[3].classList.remove("active");
            selectSlideTab[5].classList.remove("active");
            sliderImg.setAttribute('src' , "/pet-project/assets/images/slider-img/slide-2.jpg");
            break;
         case "Inimitable":
            showSidebarLink[2].classList.add("active");
            showSidebarLink[0].classList.remove("active");
            showSidebarLink[1].classList.remove("active");
            slideText[2].classList.add("active");
            slideText[1].classList.remove("active");
            slideText[0].classList.remove("active");
            selectSlideTab[2].classList.add("active");
            selectSlideTab[1].classList.remove("active");
            selectSlideTab[0].classList.remove("active");
            selectSlideTab[5].classList.add("active");
            selectSlideTab[4].classList.remove("active");
            selectSlideTab[3].classList.remove("active");
            sliderImg.setAttribute('src' , "/pet-project/assets/images/slider-img/slide-3.jpg");
            break;
      
         default:
            break;
      }
   }
   if (!tagA) return; // (2)
   if (!showSidebar.contains(tagA)) return; // (3)
}

burgerMenu.addEventListener("click", ()=> {
   showSidebar.classList.toggle("show-menu");
   burgerMenu.classList.toggle("show-sidebar");
   setTimeout( ()=> {
      showSidebar.style.opacity ="1";
   }, 200)
});

showSidebar.addEventListener("click", function(event) {
   burgerMenu.classList.remove("show-sidebar");
   let frameSize = document.documentElement.clientWidth
   if (frameSize < 565) showSidebar.style.opacity ="0";
   setTimeout( ()=> {
      showSidebar.classList.remove("show-menu");
   }, 500);

   showSidebarLink.forEach((item, index) => {
      showSidebarLink[index].classList.remove("active");
   })
   globalListener(event)

});

selectTab.addEventListener("focus", ()=> {
   showTabWrapper.classList.add("show");
   setTimeout( ()=> {
      showTabWrapper.style.opacity ="1";
   }, 200)
});

showTabWrapper.addEventListener("click", (event)=> {
   showTabWrapper.style.opacity ="0";
   setTimeout( ()=> {
      showTabWrapper.classList.remove("show");
   }, 200)

   selectSlideTab.forEach((item, index) => {
      selectSlideTab[index].classList.remove("active");
   })
      
   globalListener(event)
});

blockDeskTab.addEventListener("click", (event)=> {
   
   selectSlideTab.forEach((item, index) => {
      selectSlideTab[index].classList.remove("active");
   })
      
   globalListener(event)
});

sliderBtn.addEventListener("click", (event)=> {
   let label = event.target.closest('label'); // (1)
   if (label != null){
      
      let labelId = label.getAttribute("for");
      switch (labelId) {
         case "radio_1":
            sliderImg.style.opacity = "0"
            sliderImg.setAttribute('src' , "/pet-project/assets/images/slider-img/slide-3.jpg");
            setTimeout(()=> {
               sliderImg.style.opacity = "1"
            }, 100 )
            break;
         case "radio_2":
            sliderImg.style.opacity = "0"
            sliderImg.setAttribute('src' , "/pet-project/assets/images/slider-img/slide-2.jpg");
            setTimeout(()=> {
               sliderImg.style.opacity = "1"
            }, 100 )
            break;
         case "radio_3":
            sliderImg.style.opacity = "0"
            sliderImg.setAttribute('src' , "/pet-project/assets/images/slider-img/slide-1.jpg");
            setTimeout(()=> {
               sliderImg.style.opacity = "1"
            }, 100 )
            break;
         
         default:
            break;
      }
   }
   if (!label) return; // (2)

   if (!sliderBtn.contains(label)) return; // (3)
   
});
