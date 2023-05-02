
// Mavbar  Position fixed

const navbar = document.getElementById("navbarStick");
const offset = navbar.offsetTop;
function stickNavbar() {
  if (window.pageYOffset >= 10) {
    navbar.classList.add("stickynav");
  } else {
    navbar.classList.remove("stickynav");
  }
}
window.addEventListener("scroll", stickNavbar);


// Circular Progress Bar

let circle=document.querySelector('.circle')
    let circlevalue=document.querySelector('.value')
    let circle2=document.querySelector('.circle2')
    let circlevalue2=document.querySelector('.value2')
    let startvalue=0;
    let startvalue2=0;
    let endvalue1=93
    let endvalue2=94
    let speed2=5000/endvalue2
    let speed=5000/endvalue2

    let progress=setInterval(()=>{
        startvalue++;
        circlevalue.textContent=`${startvalue}%`
        circle.style.background=`conic-gradient(#1da7f2 ${startvalue*3.6}deg, #1c0a69 0deg)`
        if(startvalue==endvalue1){
            clearInterval(progress)
        }
    },speed)

    let progress2=setInterval(()=>{
      startvalue2++;
      circlevalue2.textContent=`${startvalue2}%`
      circle2.style.background=`conic-gradient(#1da7f2 ${startvalue2*3.6}deg, #1c0a69 0deg)`
      if(startvalue2==endvalue2){
          clearInterval(progress2)
      }
  },speed2)

  // Form Details in Alert
  let Email=document.getElementById('Email')
  let Mobile=document.getElementById('Phone')
  let Message=document.getElementById('Message')
  function SubmitForm(){
    let email=Email.value
    let mobil=Mobile.value
    let M=Message.value
    alert(`
    Email: ${email}
    Phone Number: ${mobil}
    Message: ${M}`)
  }

  const scrolltop = document.getElementById("pagetop");
function stickBot() {
  if (window.pageYOffset >= 50) {
    scrolltop.classList.add("stickybottom");
  } else {
    scrolltop.classList.remove("stickybottom");
  }
 
}

window.addEventListener("scroll", stickBot);

function scrollDetect(){
  var lastScroll = 0;

  window.onscroll = function() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

      if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        console.log("Scrolling DOWN");
      }else{
        lastScroll = currentScroll;
        scrolltop.classList.remove("stickybottom");
      }
  };
}


scrollDetect();
  