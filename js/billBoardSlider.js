// function BBSlider() {
//     const btnNext = document.getElementById("js-btnNext");
//     const btnBack = document.getElementById("js-btnBack");
//     const numSlide = document.getElementById("js-bbnumSlide");
//     const headLine = document.getElementById("js-bb_SliderHead");
//     const bbImg = document.getElementById("js-bb_SliderImg");
//     const autoPlay = true;
//     let currentSlide = 0;
//     let arrayData = 
//     [
//         {
//             index:1,
//             headLine:"Blogger"
//         },
//         {
//             index:2,
//             headLine:"Gamer"
//         },
//         {
//             index:3,
//             headLine:"Teacher"
//         }
//     ]
//     this.init = function() {
//         this.addEventsListeners();
//         if(autoPlay == true){
//             setInterval(function() {
//                 nextSlide()
//             },3000)
//         }
//     }
//     this.addEventsListeners = function() {
//         btnNext.addEventListener("click",nextSlide,false);
//         btnBack.addEventListener("click",backSlide,false);
//     }
//     nextSlide = function () {
//         currentSlide += 1;
//         if(currentSlide >= arrayData.length) {
//             currentSlide = 0;
//         }
//         checkPosition(currentSlide);   
//     }
//     backSlide = function () {
//         currentSlide -= 1;
//         if(currentSlide < 0) {
//             currentSlide = arrayData.length - 1 ;
//         }
//         checkPosition(currentSlide);
//     }
//     const checkPosition = (currentSlide) => {
//         bbImg.style.opacity = 0;
//         headLine.style.color = "#088eb8";
//         setTimeout(function() {
//             numSlide.innerHTML = arrayData[currentSlide].index;
//             headLine.innerHTML = arrayData[currentSlide].headLine;
//             bbImg.src = "./images/bb-slider" + arrayData[currentSlide].index+ ".jpg";
//             bbImg.style.opacity = 1
//             headLine.style.color = "#ffffff";
//         },500)
//     }
// }
// const slider = new BBSlider();
// slider.init();