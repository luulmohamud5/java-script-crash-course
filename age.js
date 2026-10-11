let age = Number(prompt("Enter age:"));

if (age <= 12) {
    console.log("Category: Child");
}
else if (age <= 19) {
    console.log("Category: Teenager");
}
else if (age <= 59) {
    console.log("Category: Adult");
}
else {
    console.log("Category: Senior");
}