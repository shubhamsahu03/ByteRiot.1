const nav_menu = document.getElementById('nav-menu')
const nav_open = document.getElementById('nav-toggle')
const nav_close = document.getElementById('nav-close')

if(nav_open){
    nav_open.addEventListener('click', function(){
        nav_menu.classList.add('show-menu')
    })
}

if(nav_close){
    nav_close.addEventListener('click', function(){
        nav_menu.classList.remove('show-menu')
    })
}

const nav_Link = document.querySelectorAll('.nav__link')

const linkAction = function(){
    const nav_menu = document.getElementById('nav-menu')
    
    nav_menu.classList.remove('show-menu')
}
nav_link.forEach(n => n.addEventListener('click', linkAction))

const scrollHeader = function(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) 
    {
         header.classList.add('scroll-header') 
    }
    else
    {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)


let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});
const sec=document.querySelectorAll(section[id])

const scroll_fn = function(){
    const scrollY = window.pageYOffset

  sections.forEach(sec=>{

        const s_Height = sec.offsetHeight
        const s_Top = sec.offsetTop - 58
        const s_Id = sec.getAttribute('id')
        const s_Class = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollY > s_Top && scrollY <= s_Top + s_Height){
          s_Class.classList.add('active-link')
      }else{
          s_Class.classList.remove('active-link')
      }                                                    
  })
}

window.addEventListener('scroll',scroll_fn)

const scrollup = function(){
    
    const scroll_up=document.getElementById('scroll-up')
    if (this.scrollY>=350)
    {
        scroll_up.classList.add('show-scroll')
    }
    else
    {
        scroll_up.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll',scrollup)

const cart=document.getElementById('cart')
const cart_show=document.getElementById('cart-shop')
const cart_close=document.getElementById('cart-close')

if(cart_show)
{
    cart_show.addEventListener('click', function() {
        cart.classList.add('show-cart');
    })
}

if(cart_close)
{
    cart_show.addEventListener('click', function() {
        cart.classList.remove('show-cart');
    })
}
