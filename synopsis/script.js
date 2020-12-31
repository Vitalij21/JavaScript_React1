// *** GIT *** //
// git init - инициализация папки с нужными файлами (для отслеживания изменений в папке)
// git config --local user.name "Vitali"
// git config --local user.email 1281978@gmail.com (внесенные локальные данные перезаписываю ранее внесенные глобальные данные)
// в git есть три состояния файлов: создан, добавлен в индекс (стал отслеживаться), закоммичен (создана контрольная точка)
// git status - посмотреть состояние файлов
// git add -A - добавить отслеживание за всеми (A - All) файлами или вместо А указываем конкретный файл
// git status
// git commit -a -m"project start" - создаем контрольную точку (first commit) - коммит для все файлов (-а) с сообщением (-m"текст сообщения"), буква M (modif)- напротив файла в консоли пропадает
// git log - посмотреть предыдущие коммиты
// создаем на https://github.com/Vitalij21/  новый репозиторий - JavaScript_React
// добавляем папку с проектом в созданный репозиторий командой с github.com
// git remote add origin https://github.com/Vitalij21/JavaScript_React.git ,где remote add -добавить удаленный репозиторий, origin - название уделенного репозитория, https://github.com/Vitalij21/JavaScript_React.git - адрес удаленного репозитория
// теперь локальный репозиторий соединен с удаленным
// пушим командой с github.com 
// git push -u origin main  ,где origin - название уделенного репозитория, main или master- главная ветка репозитория
// или ***правильнее*** будет:
// git branch -M main
// git push -u origin main
// далее коммитим измененные файлы - git commit -a -m"текст коммита" 
// далее пушим командой - git push
// *****
// cd.. - выйти из текущей папки
// cd work - зайти в папку work
// git clone https://github.com/Vitalij21/JavaScript_React.git js_react- склонировать папку с git к себе на комп по адр: work/js_react
// cd \ в корень текущего диска
// e: перейти на диск E
// E:\it> cd e:/it/"2. И. Петриченко" - перейти в папку Е/it/2. И. Петриченко
// git pull - склонировать изменения с удаленного репозитория в текущую папку
// cd ../../dir3/X11 - на два уровня ниже, потом в dir3/X11

// ****папка work
// git status
// git add -A
// git commit -a -m"текст коммита"
// git push (если после этой команды появляются ошибки, то сначала - git pull, после - git push)
// ****папка home
// git pull



//*** поверхностные копии (копируют элементы первого уровня) ***/
const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice(); // метод создает поверхностную копию массива
newArray[1] = "bbbbbbbbbbb";
console.log(oldArray);
console.log(newArray);

// оператор разворота или spread operator (...имя массива), объединяет массивы в один
const video = ["youtube", "vimeo", "rutube"],
      blogs = ["wordpress", "ivejornal", "blogger"],
      internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);