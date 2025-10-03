// Пример: перенаправление всего сайта на другой домен
const newDomain = "https://example.com";

// Собираем новый URL, сохраняя путь и параметры
const newUrl = newDomain + window.location.pathname + window.location.search + window.location.hash;

// Если текущий домен не совпадает — перенаправляем
if (window.location.origin !== newDomain) {
  window.location.replace(newUrl);
}
