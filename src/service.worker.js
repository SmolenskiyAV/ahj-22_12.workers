/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import { precacheAndRoute } from 'workbox-precaching'; // npm i -S workbox-precaching

precacheAndRoute(self.__WB_MANIFEST);

workbox.core.skipWaiting();
workbox.core.clientsClaim();

const { strategies } = workbox;

self.addEventListener('fetch', (evt) => {
  const url = new URL(evt.request.url);
  if (url.pathname.startsWith('/api')) {
    const cacheFirst = new strategies.NetworkFirst();
    evt.respondWith(cacheFirst.makeRequest({ request: evt.request }));
  }
});
workbox.precaching.precacheAndRoute(self.__precacheManifest);
