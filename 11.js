//1
function getPromise(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}
getPromise("test promise", 2000).then(function (data) {
  console.log(data);
});

//2
function calcArrProduct(array) {
  return new Promise((resolve, reject) => {
      let result = 1;
      array.forEach((element) => {
        if (typeof element === "number") {
          result *= element;
        } else {
          reject("Error! Incorrect array!");
        }
      });
      resolve(result);
    });
  };

calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result));
// "Error! Incorrect array!"

//3
new Promise(function (resolve, reject) {
  let number = prompt();
  if (!isNaN(number) && number) {
    resolve(number);
  } else {
    reject();
  }
  // Запитуємо у користувача number за допомогою prompt()
  // Якщо користувач ввів не число - викликаємо reject()
  // Якщо користувач ввів число- викликаємо resolve(number)
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      do {
        number = prompt();
      } while (isNaN(number) || !number);
      resolve(number);

      // Запитуємо у користувача number, до тих пір, поки він його не введе
      // Після вводу числа - викликаємо resolve(number)
    });
  })
  .then(function (result) {
    console.log(result);
  });

//4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
        for (let i = 1;i <= 10; i++){
            time = Math.random() * (3000 - 1000) + 1000;
            result = await delay(i,time)
            console.log(result)
        }
}
showNumbers()
