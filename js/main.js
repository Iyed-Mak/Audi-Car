let powerSection = document.querySelector("#power")
let num = document.querySelectorAll("#power h5")
let stop = true;


// window.onscroll = ()=>{
  window.addEventListener("scroll",()=>{
    if((window.scrollY >= powerSection.offsetTop - 700) && (window.scrollY < powerSection.offsetTop - 600) ){
       if(stop){
            startcount(num[0],num[0].dataset.target);
            startcount(num[1],num[1].dataset.target);
            startcount(num[2],num[2].dataset.target);
            stop = false;
       }
     }
    })
    
  // }
function startcount(el,max){
  let max1,max2,plus;
  max < 5 ? plus = .1 : plus = 1;
  if(max<5){
    max1 = (max * 60 / 100).toFixed(1);
    max2 = (max * 80 / 100).toFixed(1);
  }else if(max<10){
    max1 = Math.floor(max * 50 / 100);
    max2 = Math.floor(max * 80 / 100);
  }else{
    max1 = Math.floor(max * 90 / 100);
    max2 = Math.floor(max * 98 / 100);
  }
  let count = setInterval(() => {
    max<5 ? el.innerHTML = (+el.innerHTML + plus).toFixed(1) : el.innerHTML = (+el.innerHTML + plus) ;
    if(el.textContent>=max1){
            clearInterval(count);
            let count1 = setInterval(() => {
              max<5 ? el.innerHTML = (+el.innerHTML + plus).toFixed(1) : el.innerHTML = (+el.innerHTML + plus) ;
              if(el.textContent>= max2){
                clearInterval(count1);
                let count2 = setInterval(() => {
                  max<5 ? el.innerHTML = (+el.innerHTML + plus).toFixed(1) : el.innerHTML = (+el.innerHTML + plus) ;
                        if(el.textContent>=max){
                          clearInterval(count2);
                        }
                      }, 400);
                }
            }, 200);
        }
    }, 10);
}
// Animation
let advantSection = document.querySelector("#advantages");
let info = document.querySelectorAll("#advantages .row>div");
console.log(info);
for (let index = 0; index < info.length; index++) {
  info[index].style.transform = "translateX(200%)";
}
window.onscroll = ()=>{
  if(window.scrollY >= advantSection.offsetTop - 700){
    for (let index = 0; index < info.length; index++) {
       info[index].style.animation = "moveAdv 2s linear .2s  forwards ";
    }
 }
}