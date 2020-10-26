// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require("request-promise");

const getIssPosition = async () => {
  try {
    const response = await request("http://api.open-notify.org/iss-now.json");
    const issLocation = (await JSON.parse(response)).iss_position;
    return {
      lat: issLocation["latitude"],
      lng: issLocation["longitude"],
    };
  } catch (err) {
    console.log("Error: ", err);
  }
};

console.log(getIssPosition());
