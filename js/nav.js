'use strict';

document.querySelector('#close').addEventListener('click', function () {
  document.querySelector('.primary-nav').classList.remove('open');
});

document.querySelector('#open-menu').addEventListener('click', function () {
  document.querySelector('.primary-nav').classList.add('open');
});

document.querySelector('.nav-list').addEventListener('mouseover', function () {
  document.querySelector('.sub-nav').classList.add('open');
});
document.querySelector('.nav-list').addEventListener('mouseout', function () {
  document.querySelector('.sub-nav').classList.remove('open');
});
