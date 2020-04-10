$(document).ready(function() {
  $('img.animated').hover(
   function() {
    $(this).addClass('pulse'); // Добавляем класс bounce
   },
   function() {
    $(this).removeClass('pulse'); // Убираем класс
   }
  )})