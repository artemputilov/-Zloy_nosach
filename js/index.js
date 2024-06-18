document.querySelector(".insult_btn").addEventListener("click", function() {

//Задаём массив cо словами
let randomCallings = ["супер", "ужасно", "мега", "ультра",]
let randomAdjetives = ["мохнатый","вредный","ленивый","волосатый","огромный",];
let randomAnimals = ["скотина","кабан","коняга","капибара","крюкохват", "жмыр", "макак", "псина"];

//Придаём рандом массиву через переменную
let randomCalling = randomCallings [Math.floor(Math.random()*4)];
let randomAdjetive = randomAdjetives [Math.floor(Math.random()*4)];
let randomAnimal = randomAnimals [Math.floor(Math.random()*8)];

//Выводим данные
let randomInsult = ["Ты", randomCalling, randomAdjetive, randomAnimal].join (" ");
document.querySelector(".randomInsult").innerHTML = randomInsult;

});
