//1
function sumSliceArray(arr, first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError(`You must enter a number`);
  } else if (
    first <= 0 ||
    first > arr.length ||
    second <= 0 ||
    second > arr.length
  ) {
    throw new RangeError(`Out of range`);
  }
  return arr[first - 1] + arr[second - 1];
}
let arr1 = [1, 2, 3, 4, 5];
try {
  console.log(sumSliceArray(arr1, 3, 2));
} catch (error) {
  console.log(`${error.name},${error.message}`);
}

//2
function checkAge(firstname, age, status) {
  while (1) {
    try {
      firstname = prompt("Enter your name");
      if (!firstname) {
        throw new Error("The field is empty! Please enter your name");
      } else break;
    } catch (error) {
      alert(`${error.name},${error.message}`);
    }
  }
  while (1) {
    try {
      age = prompt("Enter your age");
      if (age === "") {
        throw new Error("The field is empty! Please enter your age");
      } else if (isNaN(parseInt(age))) {
        throw new TypeError(`You must enter a number`);
      } else if (+age < 18 || +age > 70) {
        throw new RangeError("Your age must be 18-70");
      } else break;
    } catch (error) {
      alert(`${error.name},${error.message}`);
    }
  }
  while (1) {
    try {
      status = prompt("Enter your status");
      if (!status) {
        throw new Error("The field is empty! Please enter your status");
      } else if (
        status !== "адмін" &&
        status !== "модератор" &&
        status !== "користувач"
      ) {
        throw new EvalError("Wrong status!");
      } else break;
    } catch (error) {
      alert(`${error.name},${error.message}`);
    }
  }
}
checkAge();

//3
function calcRectangleArea(width, height) {
  if (typeof width === "number" && typeof height === "number") {
    return width * height;
  } else {
    throw TypeError("You must enter a number");
  }
}

try {
  console.log(calcRectangleArea(10, 6));
} catch (error) {
  console.log(`${error.name},${error.message}`);
}

//4
class MonthException {
  constructor(message) {
    this.message = message;
    this.name = "MonthException";
  }
}
function showMonthName(month) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (months[month - 1]) {
    return months[month - 1];
  } else {
    throw new MonthException("Incorrect month number");
  }
}
try {
  console.log(showMonthName(12));
} catch (error) {
  console.log(error.name, error.message);
}

//5
function showUser(id) {
  if (id < 0) {
    throw new Error(`ID must not be negative: ${id}`);
  } else {
    let user = new Object();
    user.id = id;
    return user;
  }
}
function showUsers(ids) {
  let users = [];
  for (const element of ids) {
    try {
      users.push(showUser(element));
    } catch (error) {
      console.log(error.message);
      continue;
    }
  }
  return users;
}
console.log(showUsers([7, -12, 44, 22]));
