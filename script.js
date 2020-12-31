const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 1);
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

// let answer = [];
// for (let i = 0; i < 2; i++) {
//     answer.push(prompt('Один из последних просмотренных фильмов?', ''));
//     answer.push(prompt('На сколько вы оцените его?', ''));
// }
// console.log(answer);

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько вы оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько вы оцените его?', '');
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);