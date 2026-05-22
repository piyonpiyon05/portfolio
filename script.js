const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

// ボタンクリックでメニューを開閉
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

// リンク（Home, Aboutなど）をクリックしたら自動でメニューを閉じる
const navLinks = document.querySelectorAll('#js-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    nav.classList.remove('is-active');
  });
});