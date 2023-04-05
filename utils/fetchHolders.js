// javascript module

module.exports = {
  fetchBalances: async function (path, min = 1000000e8) {
    // console.log("fetching...");
    // recursive!
    let domain = "https://mainnet-public.mirrornode.hedera.com";

    let query = domain + path;
    if (!path.includes("?account.balance=gte:" + min)) {
      query += "?account.balance=gte:" + min;
    }

    let res = [];
    let res2 = [];

    await fetch(query)
      .then((response) => response.text())
      .then(async (body) => {
        let data = JSON.parse(body);
        let balances = data["balances"];

        if (!balances) {
          return;
        }

        for (let i = 0; i < balances.length; i++) {
          let balance = balances[i];
          res.push({ account: balance.account, balance: balance.balance });
        }

        let nextpage = data["links"]["next"];
        if (nextpage !== null) {
          res2 = await module.exports.fetchBalances(nextpage, min);
        }
      });

    return res.concat(res2);
  },
};
