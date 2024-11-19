// Получаем ссылку на модальное окно и кнопки для открытия
var modal = document.getElementById("myModal");
var openButtons = document.querySelectorAll(".openModal");
var span = document.getElementsByClassName("close")[0];

// Добавляем обработчик события для каждой кнопки открытия модального окна
openButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

// При нажатии на крестик закрываем модальное окно
span.onclick = function () {
  modal.style.display = "none";
};

// Закрываем модальное окно при клике вне его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
