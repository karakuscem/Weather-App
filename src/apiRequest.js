// Constructor for request
class AppRequest {
  constructor(appId, location, unit) {
    this.appId = appId;
    this.location = location;
    this.unit = unit;
  }
}

// New request function
export default function newRequest(locationInput, unitInput) {
  const newApiRequest = new AppRequest(
    "d88259ccae633e2c222ea5255f00a03e",
    `${locationInput}`,
    `${unitInput}`
  );
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${newApiRequest.location}&APPID=${newApiRequest.appId}&units=${newApiRequest.unit}`;
  return url;
}
