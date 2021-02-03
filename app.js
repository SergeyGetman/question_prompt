let x = document.querySelector("#oops"); // наш div HTML страницы
let s = prompt("сколько фильмов вы уже посмотрели? "); // вопрос
let numberOfFilms = s.valueOf(); // получение значения с prompt 


let whatIszhanre = document.querySelector("#oops2"); // div со страницы HTML второй айди
let question = prompt("ваш любимый жанр фильма ?"); //вопрос 2
let valueWhatIszhanre = question.valueOf(); //получаем значение со страницы 
whatIszhanre.innerHTML = `ваш любимый жанр: ${valueWhatIszhanre}`; // отображение на странице значения вопроса 2

let get3 = document.querySelector("#oops3"); // div со страницы HTML  
let question3 = prompt("сколько вы потратили на билет ? "); // вопрос 3 
let valueQuestion3 = question3.valueOf(); //получения значения с вопроса 3
get3.innerHTML = `вы потратили: ${valueQuestion3} долларов на билет`; // answer


x.innerHTML = `вы посмотрели уже ${numberOfFilms} фильмов и это много`; //вывод на страницу значения prompt
//проверка
if (numberOfFilms > 50) {
    x.innerHTML = `вы посмотрели уже ${numberOfFilms} фильмов и это много`;
} else if (numberOfFilms < 50 && numberOfFilms > 10) {
    x.innerHTML = `вы посмотрели уже ${numberOfFilms} фильмов, и не скажу что это мало`;
} else if (numberOfFilms > 0) {
    x.innerHTML = `да, действительно вам некогда всей этой ерундой страдать`;
} else if (numberOfFilms < 0) {
    x.innerHTML = " минус?";
} else {
    x.innerHTML = `цифры вводить нужно ) `;
}

//object полученых значений со страницы

let personalMovieDB = {
    count: "",
    cassa: [],
    zhanre: ""
};

personalMovieDB.count = numberOfFilms; // добавление в обьект полученных данных с вопроса о количество фильмах;
personalMovieDB.zhanre = valueWhatIszhanre; // добавление в обьект значения о жанре;
personalMovieDB.cassa.push(+valueQuestion3); // добавление в массив денег по кассе;


console.log(personalMovieDB);