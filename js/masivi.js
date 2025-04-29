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
