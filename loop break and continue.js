for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}

let i = 0;

while (i < 20) {
    i++;

    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}


let marks = [30, 60, 45, 80, 90, 40];

for (let mark of marks) {
    if (mark < 50) {
        continue;
    }

    console.log(mark);
}


let numbers = [10, 20, 30, -5, 40, 50];

for (let num of numbers) {
    if (num < 0) {
        break;
    }

    console.log(num);
}



let i = 1;

do {
    console.log(i);

    if (i === 5) {
        break;
    }

    i++;
} while (i <= 10);


for (let i = 1; i <= 15; i++) {
    if (i === 6 || i === 9 || i === 12) {
        continue;
    }

    console.log(i);
}