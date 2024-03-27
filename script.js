var cursor = document.querySelector("#cursor")
var blurCursor = document.querySelector("#cursor-blur") 
document.addEventListener("mousemove" , function(dets) {
     cursor.style.left = dets.x + "px",
     cursor.style.top = dets.y + "px",
     blurCursor.style.left = dets.x -200 + "px",
     blurCursor.style.top = dets.y -200 + "px"
})

gsap.to("#nav",{
   backgroundColor: "#000",
   height:"110px",
   duration: 1,
   delay: 0.5,
   scrollTrigger:{
      scroll:"#nav",
      trigger:"body",
      // markers:true,
      start: "top -5%" ,
      end: "top -3%",
      scrub:1
   }
})

gsap.to(".page2",{
   backgroundColor:"#000",
   scrollTrigger:{
      scroll: ".page2",
      trigger: "body",
      // markers:true,
      start:"top -25%",
      end: "top -80%",
      scrub:2
   }
})