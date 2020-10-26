// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
  //console.log("The number is " + num * 2);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num * 2);
    }, 2000);
  });
};
//doublesLater(10).then((res) => console.log(res));

// 3. handleSum function (async/await)
async function handleSum(num) {
  try {
    const a = await doublesLater(await doublesLater(await doublesLater(num)));
    console.log(a);
  } catch (err) {
    console.log(err);
  }
}

// 4. verification
handleSum(10); //.then((ans) => console.log(ans));
