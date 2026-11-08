// let i = 1;

// while (i <= 20) {
//     console.log(i);
//     i++;
// }


// let i = 10;

// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// let i = 1;

// do {
//     console.log("Welcome to JavaScript");
//     i++;
// } while (i <= 5);

// let number;

// do {
//     number = Number(prompt("Enter a number between 1 and 10:"));
// } while (number < 1 || number > 10 || isNaN(number));

// console.log("Valid number:", number);

// let i = 1;
// let total = 0;

// do {
//     total = total + i;
//     i++;
// } while (i <= 50);

// console.log("Total =", total);


// let numbers = [10, 20, 30, 40, 50];
// let i = 0;

// do {
//     console.log(numbers[i]);
//     i++;
// } while (i < numbers.length);


let choice;

do {
    choice = prompt("1. Check Balance\n2. Deposit Money\n3. Exit");

    switch (choice) {
        case "1":
            console.log("Check Balance");
            break;

        case "2":
            console.log("Deposit Money");
            break;

        case "3":
            console.log("Goodbye!");
            break;

        default:
            console.log("Invalid choice");
    }

} while (choice !== "3");