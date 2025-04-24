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

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let index = 0; index < num.length; index++) {
    const element = num[index];
    if (element % 2 === 0) {
        sum += element;
    }
}
console.log(sum);