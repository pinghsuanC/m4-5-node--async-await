const request = require("request-promise");

const getGeekJoke = async () => {
  // ha hahahh
  try {
    const r = await request({
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      header: { "User-Agent": "Request-Promise" },
      json: true,
    });
    //console.log(r);
    if (r) {
      return r.joke;
    } else {
      throw "Something went wrong when gettin the geek joke...";
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
};

//getGeekJoke().then((data) => console.log(data));

module.exports = { getGeekJoke };
