const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if(window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

const text = "ยินดีต้อนรับสู่ T3XTURE";
const h1 = document.querySelector("#home h1");

let index = 0;
let isDeleting = false;
let speed = 100; // ความเร็วพิมพ์

function type() {
  if (!isDeleting) {
    h1.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true;
      speed = 1500; // หยุดก่อนลบ
    } else {
      speed = 100;
    }
  } else {
    h1.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
      speed = 500; // หยุดก่อนพิมพ์ใหม่
    } else {
      speed = 50;
    }
  }
  setTimeout(type, speed);
}

type();
