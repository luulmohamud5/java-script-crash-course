let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Choose the operator \n1. (+) isku dar \n2. (-) kala jar \n3. (x) isku dhufo \n4. (/) isku qeybiyo");
switch (operator) {
    case "1":
        console.log("Result:", num1 + num2);
        break;

    case "2":
        console.log("Result:", num1 - num2);
        break;

    case "3":
        console.log("Result:", num1 * num2);
        break;

    case "4":
        console.log("Result:", num1 / num2);
        break;

    default:
        console.log("Invalid operator.");
}



let choice = Number(prompt("Enter your choice:"));

switch (choice) {
    case 1:
        console.log("View Student Profile");
        break;

    case 2:
        console.log("View Courses");
        break;

    case 3:
        console.log("View Results");
        break;

    case 4:
        console.log("View Attendance");
        break;

    case 5:
        console.log("Logout");
        break;

    default:
        console.log("Invalid option.");
}


let color = prompt("Enter traffic light color:");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color.");
}


let month = Number(prompt("Enter month number from 1 to 12:"));

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid month.");
}