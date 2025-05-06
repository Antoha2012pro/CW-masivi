// 1 Урок

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// console.log(friends[0]); // Масив викликається по індексу
// console.log(friends[friends.length-1]); // Значення індекса з кінцьа, від 1 до початку
// friends[0] = "timur" // Так можна замінити значення любого індекса
// console.log(friends);
// console.log(friends.length); // Узнати довжину значення всіх індексів
// console.log(friends[10]); // Якщо значення більше або менше чим всі індекса то буде undefined

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// friends[friends.length-1] = "timur"; // Замінити останнє значення
// friends[friends.length] = "Timur"; // Додає у кінець
// console.log(friends);

// for (let i = 0; i <= friends.length; i += 1) {
//     // console.log(friends[1]);
//     // console.log(i);
//     console.log(`Порядковий номер ${i + 1} = ${friends[i]}`);
// }

// for (const elem of friends) {
//     console.log(elem); // Вивести всі значення порядково
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (const i of num) {
//     if (i === 7) {
//         continue
//     }
//     console.log(i);
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let max = num[0]
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     // console.log(element);
//     if (max < element) {
//         max = element
//     }
// }
// console.log(max);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     if (element % 2 === 0) {
//         sum += element;
//     }
// }
// console.log(sum);



// 2 Урок

// const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Вкладені масиви
// console.log(a[0][2]); // Отримати масив у масиві індекс
// console.log(a[2][0]);
// console.log(a[1][1]);
// console.log(a[0][1]);

// for (let i = 0; i < a.length; i += 1) {
//     console.log(`Ваш масив під індексом ${i} - ${a[i]}`);
// }

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// const findName = "Oleksandr";
// for (let i = 0; i < friends.length; i += 1) {
//     // console.log(`Ваш масив під індексом ${i} - ${a[i]}`);
//     // if (friends[i] === findName) {
//     //     console.log(friends[i]);
//     // }
//     if (friends[i] === findName) {
//         console.log(`Вашого друга ${friends[i]} знайдено за індексом ${i}`);
//     }
//     // console.log(friends[0]);
// }
// for (const i of friends) {
//     if (i === findName) {
//         console.log(i);
//     }
// }

// const number = ["0951234567", "0991236548", "0971327548", "0502395855"];
// for (let i = 0; i < number.length; i += 1) {
//     console.log(number[i].length);
//     if (number[i].length < 10) {
//         console.log(`Номер телефону ${number[i]} не дійсний!`);
//     }
// }

// const number = ["0951234567", "0991236548", "0971327548", "0502395855"];
// for (let i = 0; i < number.length; i += 1) {
//     console.log(`+38${number[1]}`);
// }

// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let sum = 0
// for (let i = 0; i < array1.length; i += 1) {
//     // console.log(array[i]); 
//     sum += array1[i]; 
// } 
// for (let i = 0; i < array2.length; i += 1) { 
//     // console.log(array1[i]); 
//     sum += array2[i]; 
// } 
// console.log(sum);

// Напиши скрипт пошуку самого маленького числа в масиві,  при умові, що числа унікальні (не повторюються).
// const numbers = [51, 18, 13, 24, 7, 85, 19];
// const result = Math.max(...numbers);
// console.log(result);
// let smallestNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallestNumber) {
//         smallestNumber = numbers[i];
//     }
// }
// console.log(smallestNumber);



// 3 Урок

// const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint rem dolores numquam eaque consectetur explicabo optio itaque maiores ab. Delectus sapiente voluptates nihil quos, illo recusandae ad earum minus iure!";
// const result = message.split(","); // Перетворює рядок у масив по роздільнику (деліметер)
// console.log(result);
// for (const elem of result) { // Перербирає кожний індекс самостійно
//     console.log(elem);
// }

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// const string = friends.join(", ") // Перетворює масив у рядочок роздільником (деліметер)
// console.log(string);


//Задача

//Робимо slug з назви статті з URL адреси,
// Заголовок статті складається тільки з букв та пропусків,
// Нормалізуємо рядок,
// Розбиваємо по словах,
// Записуємо в рядок з роздільником,
// Чейнінг
// повинно получитися top-10-benefits-of-react-fremework

// const title = "Top 10 Benefits Of React Fremework";
// 1 Варіант
// const result = title.split(" ");
// console.log(result);
// const result2 = result.join("-");
// console.log(result2);
// const result3 = result2.toLowerCase();
// console.log(3);
// 2 Варіант
// const result = title.split(" ").join("-").toLowerCase(); // Чейнінг
// console.log(result);


// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// console.log(friends.indexOf("Anton")); // Повертає індекс знайденого елемента 
// console.log(friends.indexOf("qweqwe")); // Повертає -1 якщо не знайдено входження
// console.log(friends.includes("qwe")); // Повертає true або false якщо рядка не знайдено
// console.log(friends.indexOf("alias") === -1); // Якщо alias нема, то буде true

// for (let i = 0; i < friends.length; i += 1) {
//     const element = friends[i];
//     if (element === "Oleksandr") {
//         console.log("Я знайшовся");
//     }
// }


//Задача 3
// створити масив гравців, додати до кожного гравця N, де n це порядковий номер.
// Наприклад "Polly" => "Polly-1"

// const userGames = ["Mango", "Polly", "Ajaks"];
// let number = 0;
// for(let i=0; i<userGames.length; i+=1){
//     number+=1
//     const res = (`${userGames[i]} -${+number}`);

//     console.log(res);
// }


// Умова: Виведи повідомлення, якщо слово є у списку заборонених.

// const forbiddenWords = ["спам", "реклама", "шахрайство"];
// const word = "реклама";
// if (forbiddenWords.includes(word)) {
//     alert("Слово заборонено");
// }


// // Видаляє      shift                                 pop
// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// // Додає       unshift                                push  

// friends.unshift("Katya", "Timur"); // Додає початок
// friends.push("Yura", "Nazar"); // Додає кінець
// // Видаляти можна тільки по одному!
// friends.shift("Katya"); // Видаляє початок
// friends.pop("Yura"); // Видаляє кінець

// console.log(friends);

// Напиши скрипт який рахує суму елементів двух масивів. Без методу concat()









// Урок 4

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// const copFriend = friends.slice(0,2); // Якщо нічого не буде то буде копія. 0,2 Це від 1 до 2. Елементи не включно останнього
// console.log(friends);
// console.log(copFriend);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const copyArr = arr.slice() // Копія масиву
// Видалення елементів
// const delArray = arr.splice(); // Видалити всі елементи не включно останнього. Якщо нічого не буде то буде вирізаний цей масив
// console.log(delArray);
// console.log(arr);

// copyArr.splice(2,0, 100, 200, [123, 456]) // На третій індекс поставити значення 100 та більше. Додавання елементів без видалення
// console.log(copyArr);

// copyArr.splice(4, 1, "new 5"); // (4 - Індекс на який замінювати, 1 - Скільки елементів замінити, Далі вже що потрібно додати). Додавання елементів з заміною.
// console.log(copyArr);

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let sum = 0

// Без concat()
// for (let i = 0; i < array1.length; i += 1) {
//     // console.log(array[i]); 
//     sum += array1[i]; 
// } 
// for (let i = 0; i < array2.length; i += 1) { 
//     // console.log(array1[i]); 
//     sum += array2[i]; 
// } 
// console.log(sum);

// З сoncat()
// const array3 = [2, 4, 6, 8]
// const array4 = array1.concat(array2, array3); // До array1 зшити array2, array3 та більше
// console.log(array4);

// З rest
// const array5 = [...array1, ...array2, ... array3]
// console.log(array5);


//Задача 1 Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву. Замініть значення в середині масиву на 'Класика'. Видаліть перший елемент масиву і покажіть його. Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.

const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(1, 1, 'Класика')
const delStyles = styles.shift();
console.log(delStyles);
styles.unshift('Реп', 'Реггі')
console.log(styles);

// Створіть масив фруктів, для якого:
// 1) За допомогою методів масиву видаліть спочатку та скінця по фрукту,
// на їхнє місце додати нові фрукти.
//  2) Видалити 3 елемент, та на його місце вставити декілька інших фруктів використовуючи метод splice;

const fruits = ["apple", "banana", "orange", "watermelon"];
fruits.shift();
fruits.unshift("mango");
fruits.pop()
fruits.push("pineapple")
fruits.splice(2, 1, 'kiwi', 'strawbarry');
console.log(fruits);
