const { fetchBalances } = require("./fetchHolders.js");
// var fs = require("fs");

export async function fetchLeaderboard() {
  // holder lookup
  let path = "/api/v1/balances";
  let balances = await fetchBalances(path);
  console.log("Balances: " + balances.length);

  // let json = JSON.stringify(balances);
  // fs.writeFile("myjsonfile.json", json, function (err) {
  //   if (err) throw err;
  //   console.log("complete");
  // });
  return balances;
}

export async function fetchAccountBalance() {
  let path = "/api/v1/balances?account.id=0.0.1874003";
}
