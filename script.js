'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
// }
// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            // personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На сколько вы оцените его?', '');
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько вы оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {

                personalMovieDB.movies[a] = b;
                console.log('Ok');
            } else {
                console.log('error');
                i--; // возращаемся к началу цикла, т.е. на один вопрос назад
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) { // !false - не равно false, т.е. true - выполняем {}
        if (!hidden) {
            console.log(personalMovieDB);
        }

    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`Ваш любимый жанр по номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         // personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На сколько вы оцените его?', '');
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько вы оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {

//             personalMovieDB.movies[a] = b;
//             console.log('Ok');
//         } else {
//             console.log('error');
//             i--; // возращаемся к началу цикла, т.е. на один вопрос назад
//         }
//     }
// }
// rememberMyFilms();

// let answer = [];
// for (let i = 0; i < 2; i++) {
//     answer.push(prompt('Один из последних просмотренных фильмов?', ''));
//     answer.push(prompt('На сколько вы оцените его?', ''));
// }
// console.log(answer);

// first lesson
// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько вы оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько вы оцените его?', '');
//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// detectPersonalLevel();

// function showMyDB(hidden) { // !false - не равно false, т.е. true - выполняем {}
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat); // !false - не равно false, т.е. true - выполняем {}

// 1 var
// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres.push(prompt('Ваш любимый жанр под номером ' + `${i}`, ''));
//     }
//     console.log(personalMovieDB);
// }

// 2 var
// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i-1] = genre;
//     }
//     console.log(personalMovieDB);
// }

// writeYourGenres();

// **** while
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько вы оцените его?', '');

//       if(a != null && b != null && a != '' && b != '' &&  a.length < 50) {

//       personalMovieDB.movies[a] = b;
//       console.log('Ok');
//     } else {
//       console.log('error');
//           i--; // возращаемся к началу цикла, т.е. на один вопрос назад
//     }
//     i++;
// }
// console.log(personalMovieDB);


// **** do... while
// let i = 0;
//  do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько вы оцените его?', '');

//       if(a != null && b != null && a != '' && b != '' &&  a.length < 50) {

//       personalMovieDB.movies[a] = b;
//       console.log('Ok');
//     } else {
//       console.log('error');
//           i--; // возращаемся к началу цикла, т.е. на один вопрос назад
//     }
//     i++;
// } while (i < 2);
// console.log(personalMovieDB);