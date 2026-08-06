import { comments } from "./comments.js";

console.log(comments, "массив из 10 комментариев из файла comments.js");

/* 1. Создать файл "homework-9.js", подключить его в HTML. 
Добавляем новый атрибут - type = module, что бы была возможность импорта (далее увидим зачем)*/

console.log("Файл homework-9.js успешно подключен как модуль!");

/* 2. Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers, "массив от 1 до 10");

const newNumbers = numbers.filter((number) => number > 4);

console.log(newNumbers, "массив от 5 до 10");

/* 3. Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), 
проверить, есть ли в массиве какая-то определенная сущность.*/

const furnitureList = ["стол", "стул", "тумба", "кровать", "кресло"];

console.log(furnitureList, "массив строк список предметов мебели");

console.log(furnitureList.includes("кресло"), "массив содержит кресло");
console.log(furnitureList.includes("табурет"), "массив не содержит табурет");

/* 4. Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать"). 
Два вышеуказанных массива с помощью этой функции перевернуть.*/

const reverseArray = (array) => {
  return array.reverse();
};

console.log(reverseArray(numbers), "перевернутый массив чисел от 10 до 1");
console.log(reverseArray(furnitureList), "перевернутый массив мебели");

/* 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"*/

const dotComComments = comments.filter((comment) =>
  comment.email.includes(".com"),
);

console.log(dotComComments, "массив комментариев, почта которых содержит .com");

/* 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, 
а те, у кого id больше 5, имели postId: 1*/

const updatedComments = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

console.log(updatedComments, "измененный массив комментариев");

/* 9. Перебрать массив, что бы объекты состояли только из айди и имени*/

const idNameComments = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(idNameComments, "массив из айди и имени");

/* 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.*/

const commentsWithIsInvalid = comments.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(
  commentsWithIsInvalid,
  "массив комментариев с добавленным свойством isInvalid",
);

/* Уровень 3:
11. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map*/

const emailComments = comments.reduce(
  (acc, comment) => [...acc, comment.email],
  [],
);

console.log(emailComments, "массив почт с помощью reduce");

const emailCommentsMap = comments.map((comment) => comment.email);

console.log(emailCommentsMap, "массив почт с помощью map");

/* 12.Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.*/

console.log(emailComments.toString(), "массив почт приведен к строке с помощью toString");
console.log(emailCommentsMap.join('/*/'), "массив почт приведен к строке с помощью join и разделителя '/*/'");