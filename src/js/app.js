/* eslint-disable no-loop-func */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-inner-declarations */

// import Worker from './web.worker';

if (navigator.serviceWorker) { // РЕГИСТРАЦИЯ Service Worker`a
  window.addEventListener('load', async () => {
    try {
      if (navigator.serviceWorker) {
        await navigator.serviceWorker.register(
          '/service.worker.js',
        );
        console.log('sw registered');
      }
      // await registration.unregister();
    } catch (e) {
      console.log(e);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => { // помещаем addEventlistener внутрь обратной функции - для успешного прохождения тестов Jest
  let marker = 0;
  const reloadPage = document.getElementById('reload_page');
  const images = document.querySelectorAll('img');

  for (let i = 0; i < images.length - 1; i++) {
    images[i].addEventListener('load', () => {
      console.log(`picture "${images[i].getAttribute('id')}" has loaded!`);
      images[i].classList.remove('placeholder');
      marker++;
    });
  }

  setTimeout(() => {
    console.log(`Pictures has loaded: ${marker}`);
    if (marker !== 4) {
      reloadPage.classList.remove('display_none');
      reloadPage.classList.add('display_flex');
    }
  }, 6000);
});
