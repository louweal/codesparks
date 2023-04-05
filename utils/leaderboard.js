export async function fetchAccountBalance(id) {
  let path =
    "https://mainnet-public.mirrornode.hedera.com/api/v1/balances?account.id=" +
    id;

  let balance = 0;

  await fetch(path)
    .then((response) => response.text())
    .then(async (body) => {
      let data = JSON.parse(body);
      let balances = data["balances"];
      balance = balances[0]["balance"];
    });

  return +balance;
}
