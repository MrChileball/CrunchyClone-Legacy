// Registrando el Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
        console.error('Error al registrar el Service Worker:', error);
      });
  });
}

// Evento install del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/shingeki-season1.html',
        '/index.html',
        '/css/styles.css',
        '/javascript/module.js',
        '/images/content/favicon.png',
        '/images/',
        '/images/content/shingeki',
      ])
      .catch(error => {
        console.error('Error al agregar recursos a la caché:', error);
      });
    })
  );
});

// Evento fetch del Service Worker
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});