'use strict';

document.querySelector('#close').addEventListener('click', function () {
  document.querySelector('.primary-nav').classList.remove('open');
});

document.querySelector('#open-menu').addEventListener('click', function () {
  document.querySelector('.primary-nav').classList.add('open');
});
