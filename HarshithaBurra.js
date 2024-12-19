
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Front End Developer", "Web Developer", "React Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

function toggleVisibility(id) {
    var para = document.getElementById(id);
    if (para.classList.contains('hidden')) {
        para.classList.remove('hidden');
    } else {
        para.classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-line span");
  
    const animateProgress = () => {
      progressBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      });
    };
  
    animateProgress();
  });


  // circle skill /////////////////////////////////////////////////////// 

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    document.addEventListener("DOMContentLoaded", () => {
      const circles = document.querySelectorAll('.circle');
      const skillBars = document.querySelectorAll('.skill-bar');
      // Add your JavaScript logic here
  });

  const circles = document.querySelectorAll('.circle');
console.log(circles); // Check if this logs the circles correctly

const skillBars = document.querySelectorAll('.skill-bar');
console.log(skillBars); // Check if skill bars are detected




    for(let i = 0 ; i < dots ; i++){
        points+= `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
 })


 const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      if(entry.isIntersecting){
          entry.target.classList.add("show-items");
      }else{
          entry.target.classList.remove("show-items");
      }
  });
});



 const scrollScale = document.querySelectorAll(".scroll-scale");
 scrollScale.forEach((el)=>observer.observe(el));


 const scrollBottom = document.querySelectorAll(".scroll-bottom");
 scrollBottom.forEach((el)=>observer.observe(el));

 const scrollTop = document.querySelectorAll(".scroll-top");
 scrollTop.forEach((el)=>observer.observe(el));