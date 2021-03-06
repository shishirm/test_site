/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// Version 0.6.2
let version = '0.6.2';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('airhorner').then(cache => {
      return cache.addAll([
        `https://storage.googleapis.com/mshishir_test8/index.html`
  //      `/index.html?timestamp=${timeStamp}`,
  //      `/styles/main.css?timestamp=${timeStamp}`,
  //      `/scripts/main.min.js?timestamp=${timeStamp}`,
  //      `/scripts/comlink.global.js?timestamp=${timeStamp}`,
  //      `/scripts/messagechanneladapter.global.js?timestamp=${timeStamp}`,
  //      `/sounds/airhorn.mp3?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

