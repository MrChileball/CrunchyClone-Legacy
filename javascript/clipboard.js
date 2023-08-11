
// Función para detectar si el dispositivo es Android
const isAndroid = () => /Android/i.test(navigator.userAgent);
// Función para detectar si el dispositivo es iOS
const isIOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);

// Evento click para el botón de compartir
const shareLinkButton = document.getElementById('share-link-button');
shareLinkButton.addEventListener('click', (event) => {
  if (isAndroid() || isIOS()) {
    ShareMenuMobile();
  } else {
    ShareNotificationDesktop();
  }
});

// Función para compartir el enlace
const ShareMenuMobile = async () => {
    try {
      await navigator.share({
        title: document.title,
        url: link
      });
      console.log('Enlace compartido exitosamente');
    } catch (error) {
      console.error('Error al compartir el enlace:', error);
    }
  };
// Función para mostrar u ocultar el menú de compartir
const ShareNotificationDesktop = () => {
    copyURL();
    showNotification('URL copiada al portapapeles');
};

const showNotification = (message) => {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;
  // Establecer estilos CSS para la notificación
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.padding = '10px';
  notification.style.backgroundColor = '#333';
  notification.style.color = '#fff';
  notification.style.borderRadius = '8px';
  notification.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
  notification.style.zIndex = '9999';
  notification.style.opacity = '0';
  notification.style.transform = 'translateY(-100%)';
  notification.style.transition = 'opacity 0.3s, transform 0.3s';

  document.body.appendChild(notification);

  // Forzar el cálculo de las propiedades de estilo antes de aplicar la animación
  notification.getBoundingClientRect();

  notification.style.opacity = '1';
  notification.style.transform = 'translateY(0)';

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
};
const link = window.location.href;
// Función para copiar la URL actual al portapapeles
const copyURL = async () => {
  try {
    await navigator.clipboard.writeText(link);
  } catch (error) {
    console.error('Error al copiar el enlace: ', error);
  }
};



