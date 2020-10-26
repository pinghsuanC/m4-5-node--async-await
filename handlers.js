// nothing here yet...
const { getDadJoke } = require("./__workshop/exercise-4.1.js");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2.js");
const { getGeekJoke } = require("./__workshop/exercise-4.3.js");

// returns the joke for specific kind
async function handleJoke(type) {
  let r = "";
  switch (type) {
    case "dad":
      try {
        r = await getDadJoke();
      } catch (err) {
        console.log("Error: ", err);
      }
      return r;
    case "tronald":
      try {
        r = await getTronaldDumpQuote();
      } catch (err) {
        console.log("Error: ", err);
      }
      return r;
    case "geek":
      try {
        r = await getGeekJoke();
      } catch (err) {
        console.log("Error: ", err);
      }
      return r;
    default:
      r = "Unrecognized joke type!";
  }

  //return r;
}

//handleJoke("dad").then((data) => console.log(data));
module.exports = { handleJoke };
