const request = require("request-promise");

// 4.1
// https://icanhazdadjoke.com/

// getDadJoke
const getDadJoke = async () => {
  try {
    const response = await request({
      uri: "https://icanhazdadjoke.com/",
      headers: {
        "User-Agent": "Request-Promise",
      },
      json: true,
    });
    if (response) {
      return response.joke;
    } else {
      throw "Something went wrong when getting the joke done...";
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

// getDadJoke
//getDadJoke().then((data) => console.log(data));
module.exports = { getDadJoke };
