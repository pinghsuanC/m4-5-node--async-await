const request = require("request-promise");

const getTronaldDumpQuote = async () => {
  // write write write
  // https://api.tronalddump.io/
  try {
    const r = await request({
      uri: "https://api.tronalddump.io/random/quote",
      header: { "User-Agent": "Request-Promise" },
      json: true,
    });
    // console.log(r);
    if (r) {
      return r.value;
    } else {
      throw "Something went wrong when getting the quote...";
    }
  } catch (err) {
    console.log("Error: ", err);
  }
};

// getTronaldDumpQuote().then((data) => {
//   console.log(data);
// });
module.exports = { getTronaldDumpQuote };
