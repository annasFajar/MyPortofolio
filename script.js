const navbar = document.querySelector("#navbar");
const textList = ["Front End Dev.", "Back End Dev."];
const textElement = document.getElementById("typewriter-text");
// const links = document.getElementById("a");

document.addEventListener("scroll", function () {
    if (window.scrollY > 40) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let teks = 0; 
let index = 0;
let hapus = false; 

function typeWriter() {
    const teksloop = textList[teks];
    const teksHapus = () =>{
        if (hapus) {
            return teksloop.slice(0, index--);
        } else {
            return teksloop.slice(0, index++);
        }
    }


    textElement.textContent = teksHapus();

    // const kecepatanKetik = hapus ? 50 : 100;
    const kecepatanKetik = ()=>{
        if (hapus) {
            return 50;
        } else {
            return 100;
        }

    }


    if (!hapus && index === teksloop.length) {
    hapus = true;
    setTimeout(typeWriter, 1000);
    } else if (hapus && index === 0) {
    hapus = false;
    teks = (teks + 1) % textList.length;
    setTimeout(typeWriter, 500); 
    } else {
setTimeout(typeWriter, kecepatanKetik());
    }
}

typeWriter();
