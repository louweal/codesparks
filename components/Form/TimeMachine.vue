<template>
  <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
    <!-- <div class="ms-1 mb-3">
      <i class="bi bi-clock-history fs-2"></i>
    </div> -->

    <form
      name="contact"
      method="POST"
      @submit.prevent="onSubmit()"
      data-netlify="true"
      netlify
      netlify-honeypot="title"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div class="d-none">
        <label>
          Don’t fill this out if you’re human:
          <input name="title" />
        </label>
      </div>

      <!-- date input -->
      <div class="form-floating mb-4 position-relative">
        <input
          ref="date"
          type="text"
          id="date"
          class="form-control bg-c"
          :class="inFuture() || !validDate() ? 'text-danger' : false"
          name="date"
          placeholder="DD-MM-YYYY"
          :value="date"
          @input="(e) => setDate(e.target.value)"
          required
        />
        <label class="form-label" for="date">Date</label>

        <!-- <div
          v-if="isToday === true"
          class="position-absolute top-0 w-100 h-100 text-secondary text-end pe-3"
        >
          Today
        </div> -->
        <p class="text-danger">
          <span class="text-danger" v-if="inFuture()">
            Unfortunately, the time machine can't see into the future.
          </span>
          <span v-if="!validDate()"
            >Invalid date format. Use format: DD-MM-YYY</span
          >
        </p>
      </div>

      <!-- Account input -->
      <div class="form-floating mb-4">
        <input
          ref="accounts"
          type="text"
          id="accounts"
          class="form-control bg-c"
          :class="validAccounts() !== true ? 'text-danger' : false"
          name="accounts"
          placeholder="0.0.123450; 0.0.456780"
          @input="(e) => setAccounts(e.target.value)"
          required
        />
        <label class="form-label" for="accounts">Account id(s)</label>

        <p class="text-danger" v-if="validAccounts() !== true">
          <span v-if="accounts.length === 1"> Invalid Account ID </span>

          <span v-else>
            Account ID {{ this.accounts[validAccounts()] }} is invalid
          </span>
        </p>
      </div>

      <div class="form-floating mb-4" v-if="currentPrice">
        <select class="form-select bg-c" id="currency" ref="currency">
          <option value="hbar" class="bg-c">HBAR</option>
          <option
            v-for="currency in Object.keys(currentPrice)"
            :key="currency"
            :value="currency"
            :selected="currency === 'usd'"
          >
            {{ currency.toUpperCase() }}
          </option>
        </select>
        <label for="currency">Output currency</label>
      </div>

      <!-- Submit button -->
      <button
        type="submit"
        class="btn btn-secondary btn-block mb-4"
        :disabled="disableForm()"
      >
        Go
      </button>
    </form>

    <p v-if="submitted">
      You had <span class="text-secondary">{{ balance }} HBAR</span> on
      <span class="text-light">{{ formatDate(timestamp) }}</span>
      <span v-if="currency !== 'hbar' && balance > 0">
        which was equal to
        <span class="text-secondary"
          >{{ currentPrice[currency] * balance }}
          {{ currency.toUpperCase() }}</span
        >
        <span class="font-small d-block mt-2">
          HBAR price: {{ currentPrice[currency] }}
          {{ currency.toUpperCase() }}
        </span>
      </span>
      <span v-else>.</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "1-1-2023",
      timestamp: 0,
      accounts: "",
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

    let splittedDate = this.date.split("-");
    this.timestamp =
      new Date(
        `${splittedDate[2]}-${splittedDate[1]}-${splittedDate[0]}`
      ).getTime() / 1000;
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
      // let accounts = this.$refs["accounts"].value;
      // let date = this.$refs["date"].value;
      // this.setAccounts(accounts);
      // this.setDate(date);

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

    validAccounts() {
      if (typeof this.accounts === "string" && this.accounts.length >= 4) {
        return this.accounts.startsWith("0.0.");
      }
      for (let i = 0; i < this.accounts.length; i++) {
        if (
          this.accounts[i].length >= 4 &&
          !this.accounts[i].startsWith("0.0.")
        ) {
          return i;
        }
      }
      return true;
    },

    formatDate(date) {
      return new Date(date * 1000).toLocaleDateString("us-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },

    disableForm() {
      return !this.validDate() || this.inFuture() || !this.validAccounts();
    },

    async fetchPrice() {
      // fetches hbar prices on given date
      let url = `https://api.coingecko.com/api/v3/coins/hedera-hashgraph/history?date=${this.date}`; // hedera-hashgraph/history?date=1-1-2023"
      // if (!this.validDate() || this.inFuture()) {
      //   // date lies in future or is invalid
      //   return;
      // }
      await fetch(url)
        .then((response) => response.text())
        .then(async (body) => {
          let data = JSON.parse(body);
          let marketData = data["market_data"];
          this.currentPrice = marketData["current_price"];
        });
    },
    setAccounts(e) {
      if (e.includes(";")) {
        this.accounts = e.replaceAll(" ", "").split(";");
      } else {
        this.accounts = e;
      }
    },
    setDate(e) {
      this.date = e;

      if (this.validDate()) {
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

    validDate() {
      let re = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;
      return re.test(this.date);
    },
  },
};
</script>
