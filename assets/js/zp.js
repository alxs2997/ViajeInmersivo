/*==================== SWIPER DISCOVER ====================*/
const swiper = new Swiper('.swiper-pack', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });