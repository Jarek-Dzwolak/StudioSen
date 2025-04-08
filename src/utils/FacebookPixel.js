// Funkcja inicjująca Facebook Pixel
export const initFacebookPixel = (pixelId) => {
  if (!pixelId) {
    console.warn("Facebook Pixel ID nie został podany!");
    return;
  }

  // Sprawdź, czy skrypt już istnieje
  if (document.getElementById("facebook-pixel")) {
    return;
  }

  // Dodaj kod śledzenia Facebooka
  window.fbq =
    window.fbq ||
    function () {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };

  window._fbq = window._fbq || window.fbq;
  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = "2.0";
  window.fbq.queue = [];
  window.fbq("init", pixelId);
  window.fbq("track", "PageView");

  // Stwórz skrypt
  const script = document.createElement("script");
  script.id = "facebook-pixel";
  script.async = true;
  script.src = `https://connect.facebook.net/en_US/fbevents.js`;

  // Dodaj noScript element dla przeglądarek bez JavaScript
  const noscript = document.createElement("noscript");
  const img = document.createElement("img");
  img.height = "1";
  img.width = "1";
  img.style.display = "none";
  img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
  noscript.appendChild(img);

  // Dodaj elementy do DOM
  if (document.head) {
    document.head.appendChild(script);
  }
  if (document.body) {
    document.body.appendChild(noscript);
  }
};

// Funkcja do śledzenia zdarzeń
export const trackFBEvent = (eventName, params = {}) => {
  if (window.fbq) {
    window.fbq("track", eventName, params);
  }
};

// Funkcja do wyłączania Pixela (gdy użytkownik nie wyraził zgody)
export const disableFacebookPixel = () => {
  // Usuń skrypt Facebook Pixel
  const pixelScript = document.getElementById("facebook-pixel");
  if (pixelScript) {
    pixelScript.parentNode.removeChild(pixelScript);
  }

  // Usuń noScript element
  const noscripts = document.querySelectorAll("noscript");
  noscripts.forEach((noscript) => {
    if (noscript.innerHTML.includes("facebook.com/tr")) {
      noscript.parentNode.removeChild(noscript);
    }
  });

  // Nadpisz funkcje śledzenia, aby nie robiły nic
  window.fbq = function () {
    console.log("Facebook Pixel jest wyłączony ze względu na brak zgody.");
  };
};
