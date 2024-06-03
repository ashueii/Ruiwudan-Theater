

/*------------ google 翻譯 ------------ */


function googleTranslateElementInit() {
  // 檢查是否已經存在 google_translate_element 元素
  var googleTranslateElement = document.getElementById('google_translate_element');
  if (!googleTranslateElement) {
    // 創建 google_translate_element 元素
    googleTranslateElement = document.createElement('div');
    googleTranslateElement.id = 'google_translate_element';
    document.body.appendChild(googleTranslateElement);
  }
  
  // 初始化 Google 翻譯元素
  new google.translate.TranslateElement({
    pageLanguage: 'zh-TW',
    includedLanguages: 'zh-TW,zh-CN,en,ja,th,vi,ko,id',
    gaTrack: true
  }, 'google_translate_element');
  
  $('select.goog-te-combo').attr('title', 'translate');
}


/*------------ google 翻譯的蓋屏 ------------ */

function language_btn(){
  coverScreen.style.visibility = 'visible';      
}
function OK_btn(){
google_translate_element.style.display = 'block'; 
coverScreen.style.visibility = 'hidden'; 

}
function CANCEL_btn(){
coverScreen.style.visibility = 'hidden';
}

function closeLanguage(){
  google_translate_element.style.display = 'none'; 
}


// 使用 window.onload 確保頁面完全載入後再初始化
window.onload = function() {
  googleTranslateElementInit();
};

document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".slide1");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollImages.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollImages.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".slide2");
  const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
  const leftButton = document.querySelector(".left1");
  const rightButton = document.querySelector(".right1");

  function checkScroll() {
    const currentScroll = scrollImages.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollImages.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollImages.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollImages.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});


/*------------ Carousel 輪播圖 ------------ */

$(document).ready(function () {
  // 初始化 Owl Carousel
  var owl = $(".custom-carousel").owlCarousel({
      autoWidth: true,
      loop: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navigation: false,
      pagination: false
  });

  // 自定義左右按鈕
  $(".next-btn").click(function () {
      owl.trigger('next.owl.carousel');
  });

  $(".prev-btn").click(function () {
      owl.trigger('prev.owl.carousel');
  });

  // 點擊事件切換活動
  $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").removeClass("active");
      $(this).addClass("active");
  });
});

/*------------ 電影時刻的向下按 ------------ */

document.addEventListener('DOMContentLoaded', () => {
  const scrollButton = document.getElementById('movie_ls_btn');
  const movieList = document.querySelector('.movie_ls');

  scrollButton.addEventListener('click', () => {
      const scrollAmount = 100; // 每次滾動的像素量，可以根據需要調整
      movieList.scrollBy({
          top: scrollAmount,
          behavior: 'smooth' // 使滾動效果平滑
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const scrollButton = document.getElementById('news_btn');
  const movieList = document.querySelector('.news');

  scrollButton.addEventListener('click', () => {
      const scrollAmount = 100; // 每次滾動的像素量，可以根據需要調整
      movieList.scrollBy({
          top: scrollAmount,
          behavior: 'smooth' // 使滾動效果平滑
      });
  });
});




