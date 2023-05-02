//1
class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  circleLength() {
    return 2 * Math.PI * this.radius;
  }
  static length(radius) {
    return 2 * Math.PI * radius;
  }
  circleCopy() {
    return Object.assign(new Circle(), this);
  }
  static create(x, y, radius) {
    return new Circle(x, y, radius);
  }
  isInCircle(x, y) {
    return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= this.radius;
  }
  toString() {
    return JSON.stringify(this);
  }
}

//2
function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}
let mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

console.log(propsCount(mentor));

//3
class Person {
  constructor(firstName, surname) {
    this.firstName = firstName;
    this.surname = surname;
  }
  showFullName() {
    return this.surname + " " + this.firstName;
  }
}
class Student extends Person {
  constructor(firstName, surname, year) {
    super(firstName, surname);
    this.year = year;
  }
  showFullName(middleName) {
    return super.showFullName() + " " + middleName;
  }
  showCourse() {
    return new Date().getFullYear() - this.year;
  }
}
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4

//4
class Marker {
  constructor(color) {
    this.color = color;
    this.ink = 100;
  }
  print(string) {
    let result = "";
    for (let i of string) {
      if (this.ink >= 0.5) {
        if (i != " ") {
          result += i;
          this.ink -= 0.5;
        } else {
          result += i;
        }
      } else {
        break;
      }
    }
    console.log(`%c${result}`, `color:${this.color}`);
  }
}
class refillingMarker extends Marker {
  constructor(color) {
    super(color);
  }
  refill() {
    this.ink = 100;
  }
}

const marker = new Marker("green");
marker.print(
  "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 "
);
marker.print("Ran out of ink");

const refillMarker = new refillingMarker("blue");
refillMarker.print(
  "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 "
);
console.log(refillMarker.ink);
refillMarker.refill();
console.log(refillMarker.ink);
refillMarker.print("Ready to write again");

//5
class Worker {
  #experience;
  constructor(fullName, dayRate, workingDay) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDay = workingDay;
    this.#experience = 1.2;
  }
  showSalary() {
    return this.dayRate * this.workingDay;
  }
  showSalaryWithExperience() {
    return this.#experience * this.showSalary();
  }
  set setExp(value) {
    this.#experience = value;
  }

  get showExp() {
    return this.#experience;
  }
  static sorted(objects, order) {
    let result = [];
    objects.forEach((element) => {
      result.push([element.fullName, element.showSalaryWithExperience()]);
    });
    switch (order) {
      case "asc":
        return result.sort(function (a, b) {
          return a[1] - b[1];
        });
      case "desc":
        return result.sort(function (a, b) {
          return b[1] - a[1];
        });
    }
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + " " + "salary:" + " " + worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(
  worker1.fullName + " " + "salary:" + " " + worker1.showSalaryWithExperience()
);
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(
  worker1.fullName + " " + "salary:" + " " + worker1.showSalaryWithExperience()
);

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + " " + "salary:" + " " + worker2.showSalary());
console.log("New experience: " + worker2.showExp);
console.log(
  worker2.fullName + " " + "salary:" + " " + worker2.showSalaryWithExperience()
);
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(
  worker2.fullName + " " + "salary:" + " " + worker2.showSalaryWithExperience()
);

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + " " + "salary:" + " " + worker3.showSalary());
console.log("New experience: " + worker3.showExp);
console.log(
  worker3.fullName + " " + "salary:" + " " + worker3.showSalaryWithExperience()
);
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(
  worker3.fullName + " " + "salary:" + " " + worker3.showSalaryWithExperience()
);

console.log(Worker.sorted([worker1, worker2, worker3], "asc"));
