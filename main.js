// Получаем ссылки и модальные окна
var openModalLinks = document.querySelectorAll("[id^=openModal]");
var modals = document.querySelectorAll("[id^=myModal]");

// При клике на каждую ссылку открываем соответствующее модальное окно
openModalLinks.forEach(function (link, index) {
  link.addEventListener("click", function () {
    modals[index].style.display = "block";
  });
});

// При клике вне модального окна также закрываем его
window.addEventListener("click", function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});
