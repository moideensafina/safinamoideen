const navbtn=document.getElementById("menu");
const header=document.getElementById("header");
const buttons=document.querySelectorAll(".btnn");
const scrollup=document.querySelector(".scrollup");


buttons[0].classList.add("btn-clicked")
navbtn.addEventListener("click",()=>{
    if (header.classList.contains("activeheader")) {
        header.classList.remove("activeheader");
    }
    else{
        header.classList.add("activeheader");
    }

})

header.addEventListener("click",()=>{
    if (header.classList.contains("activeheader")) {
        header.classList.remove("activeheader");
    }
})

  buttons.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        setactivebtn(event);
    })
  })
  function setactivebtn(event) {
    buttons.forEach((button)=>{
        button.classList.remove("btn-clicked")
    })
    event.target.classList.add("btn-clicked")
  }
  scrollup.addEventListener("click",(event)=>{
    setactivebtn(event);
    buttons[0].classList.add("btn-clicked")
})
let cursor1=document.querySelector(".cursor-1");
let cursor2=document.querySelector(".cursor-2");
let cursor3=document.querySelector(".cursor-3");

window.onmousemove =(e)=>{
    cursor1.style.top=e.pageY+'px';
    cursor1.style.left=e.pageX+'px';
    cursor2.style.top=e.pageY+'px';
    cursor2.style.left=e.pageX+'px';
}
let links=document.querySelectorAll('a').forEach(links =>{
    links.onmouseenter=()=>{
        cursor1.classList.add('curseractive');
        cursor2.classList.add('curseractive');
    }
    links.onmouseleave=()=>{
        cursor1.classList.remove('curseractive');
        cursor2.classList.remove('curseractive');
    }
})

window.addEventListener("scroll",()=>{
    const scrollup=document.querySelector('.scrollup');
    if (this.scrollY>=560) {
        scrollup.classList.add('show-scroll');
    }
    else scrollup.classList.remove('show-scroll')
})