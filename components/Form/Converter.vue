<template>
  <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
    <div class="ms-1 mb-3">
      <i class="bi bi-clock-history fs-2"></i>
    </div>

    <p>Available soon!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      timestamp: new Date().getTime() / 1000,
      accounts: undefined,
      balance: 0,
      currentPrice: undefined,
      currency: "hbar",
      submitted: false,
    };
  },

  async created() {
    // fetches all available currencies and their current prices
    let url = `https://api.coingecko.com/api/v3/coins/hedera-hashgraph/`; // hedera-hashgraph/history?date=1-1-2023"
    await fetch(url)
      .then((response) => response.text())
      .then(async (body) => {
        let data = JSON.parse(body);

        let marketData = data["market_data"];
        this.currentPrice = marketData["current_price"];
      });
  },

  computed: {
    isToday() {
      return (
        new Date(this.timestamp * 1000).toDateString() ===
        new Date().toDateString()
      );
    },
  },
  methods: {
    async fetchBalance(url) {
      await fetch(url)
        .then((response) => response.text())
        .then(async (body) => {
          let data = JSON.parse(body);

          if (data["balances"]) {
            if (data["balances"].length > 0) {
              let balance = data["balances"][0]["balance"];
              this.balance += balance / 1e8;
            }
          } else {
            console.log("Invalid request to Hedera Mirrornode");
          }
        });
    },
    async onSubmit() {
      this.submitted = false;
      let accounts = this.$refs["accounts"].value;
      let date = this.$refs["date"].value;
      this.setAccounts(accounts);
      this.setDate(date);

      this.currency = this.$refs["currency"].value;

      this.balance = 0;
      let url = "https://mainnet-public.mirrornode.hedera.com/api/v1/balances";

      if (typeof this.accounts === "string") {
        this.accounts = [this.accounts];
      }

      for (let i = 0; i < this.accounts.length; i++) {
        if (this.accounts[i].startsWith("0.0.")) {
          let params = `?account.id=${this.accounts[i]}&timestamp=${this.timestamp}`;
          await this.fetchBalance(url + params);
        }
      }

      await this.fetchPrice();
      this.submitted = true;
    },

    validAccount(account) {
      return account.startsWith("0.0.");
    },

    formatDate(date) {
      return new Date(date * 1000).toLocaleDateString("us-EN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },

    async fetchPrice() {
      // fetches hbar prices on given date
      let url = `https://api.coingecko.com/api/v3/coins/hedera-hashgraph/history?date=${this.date}`; // hedera-hashgraph/history?date=1-1-2023"
      if (this.inFuture()) {
        // date lies in future
        return;
      }
      await fetch(url)
        .then((response) => response.text())
        .then(async (body) => {
          let data = JSON.parse(body);

          let marketData = data["market_data"];
          this.currentPrice = marketData["current_price"];
          // console.log(Object.keys(this.currentPrice));
        });
    },
    setAccounts(e) {
      if (e.includes(";")) {
        this.accounts = e.replace(" ", "").split(";");
      } else {
        this.accounts = e;
        console.log(e);
      }
    },
    setDate(e) {
      if (this.validDate(e)) {
        this.date = e;
        let timestamp = e.split("-");
        this.timestamp =
          new Date(
            `${timestamp[2]}-${timestamp[1]}-${timestamp[0]}`
          ).getTime() / 1000;
      }
    },

    inFuture() {
      return new Date(this.timestamp * 1000) > new Date();
    },

    validDate(d) {
      let re = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;
      return re.test(d);
    },
  },
};
</script>
