
function showSuccessMessage() {
    document.getElementById("result").innerHTML = "Вы успешно забронировали товар";
    document.getElementById("result").style.color = "green";
    document.getElementById("button").style.display = "none";
  }
function showSuccessMessage1() {
    document.getElementById("result1").innerHTML = "Вы успешно забронировали товар";
    document.getElementById("result1").style.color = "green";
    document.getElementById("button1").style.display = "none";
     }
function showSuccessMessage2() {     
    document.getElementById("result2").innerHTML = "Вы успешно забронировали товар";
    document.getElementById("result2").style.color = "green";
    document.getElementById("button2").style.display = "none";
       }
function showSuccessMessage3() {     
    document.getElementById("result3").innerHTML = "Вы успешно забронировали товар";
    document.getElementById("result3").style.color = "green";
    document.getElementById("button3").style.display = "none";
           }

           document.addEventListener("DOMContentLoaded", function() {

            var images = document.querySelectorAll('.moving-image');
            

// Итерируемся по каждому элементу и задаем начальные стили
images.forEach(function(image) {
  image.style.position = 'absolute';
  image.style.left = Math.floor(Math.random() * (window.innerWidth - image.width)) + 'px';
  image.style.top = Math.floor(Math.random() * (window.innerHeight - image.height)) + 'px';
  
});

// Устанавливаем интервал для перемещения элементов
setInterval(function() {
  // Итерируемся по каждому элементу
  images.forEach(function(image) {
    // Генерируем новые координаты для перемещения
    var newLeft = Math.floor(Math.random() * (window.innerWidth - image.width));
    var newTop = Math.floor(Math.random() * (window.innerHeight - image.height));
    
    

    // Плавно перемещаем элемент
    image.style.transition = 'all 5s';
    image.style.transform = 'rotate(' + (Math.floor(Math.random() * 360)) + 'deg)';
    image.style.left = newLeft + 'px';
    image.style.top = newTop + 'px';
  });
}, 4000);
          });