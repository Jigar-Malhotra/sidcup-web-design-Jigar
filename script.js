
const cursor = document.querySelector("#cursor");
const cursorblur = document.querySelector("#cursor-blur");

alert("NOTE: This design is for LAPTOPS AND DESKTOPS ONLY. It is NOT OPTIMISED FOR MOBILES.")

gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    padding: "20px 140px",
    scrollTrigger:{
        trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

window.addEventListener("mousemove", (dets) => {
    cursor.style.top = dets.y + "px";
    cursor.style.left = dets.x + "px";
    cursorblur.style.top = dets.y - 200 + "px";
    cursorblur.style.left = dets.x - 200 + "px";
})

document.querySelectorAll("nav h4").forEach(e => {
    e.addEventListener("mouseenter", () => {
        cursor.style.scale = 4.7;
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid white"
    })
    e.addEventListener("mouseleave", () => {
        cursor.style.scale = 1;
        cursor.style.backgroundColor = "#95c11e";
        cursor.style.border = "none"
    })
});

gsap.from("#about", {
    y:90,
    opacity: 0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 65%",
        end:"top 60%",
        scrub:3
    }
});

gsap.from("#cards", {
    scale:0.7,
    y:90,
    opacity: 0,
    duration:1.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 20%",
        end:"top 15%",
        scrub:2
    }
})