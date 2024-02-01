'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//=================Bài 2===================================================//
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // const scrollCoordinate = section1.getBoundingClientRect();
  // console.log(scrollCoordinate);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Vị trí cuộn (X/Y) hiện tại', window.scrollX, scrollY);
  // console.log(
  //   'Chiều cao/rộng của viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // // window.scrollTo(scrollCoordinate.left,scrollCoordinate.top);

  // // window.scrollTo(
  // //   scrollCoordinate.left + window.scrollX,
  // //   scrollCoordinate.top + window.scrollY
  // // )

  // // window.scrollTo({
  // //   left:scrollCoordinate.left + window.scrollX,
  // //   top:scrollCoordinate.top + window.scrollY,
  // //   behavior:'smooth'
  // // })

  section1.scrollIntoView({ behavior: 'smooth' });
});

//=================Bài 3===================================================//
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log('LINK', e.target, e.currentTarget);
  // console.log(e.currentTarget === this);
  //Dừng truyền
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document
  .querySelector('.nav')
  .addEventListener
  // 'click',
  // function (e) {
  //   this.style.backgroundColor = randomColor();
  //   console.log('NAV', e.target);
  // },
  // false
  ();

//=================Bài 4===================================================//
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     console.log('LINK');
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   });
// });

//1.Thêm trình xử lý sự kiện vào một phần tử mẹ chung của tất cả các phần tử mà chưng tôi quan tâm
//2.Trong sự kiện đó,hãy xác địn yếu tố nào đã tạo ra sự kiện

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();


  if (e.target.classList.contains('nav__links')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
