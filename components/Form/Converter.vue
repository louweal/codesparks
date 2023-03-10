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

      <!-- Account input -->
      <div class="form-floating mb-4">
        <input
          ref="accounts"
          type="text"
          id="accounts"
          class="form-control bg-c"
          :class="!validBalance() ? 'text-danger' : false"
          name="accounts"
          placeholder="25000"
          @input="(e) => setBalance(e.target.value)"
          required
        />
        <label class="form-label" for="accounts">Input (HBAR only)</label>

        <p class="text-danger" v-if="!validBalance()">Invalid balance</p>
      </div>

      <div class="form-floating mb-4" v-if="currentPrice">
        <select class="form-select bg-c" id="currency" ref="currency">
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
      <span class="fs-3">
        {{ currentPrice[currency] * balance }}
        {{ currency.toUpperCase() }}
      </span>

      <span class="font-small d-block mt-2">
        HBAR price on {{ formatDate(timestamp) }}:<br />
        {{ currentPrice[currency] }}
        {{ currency.toUpperCase() }}
      </span>
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
    setBalance(e) {
      this.submitted = false;

      this.balance = e;
    },

    async onSubmit() {
      this.submitted = false;

      this.currency = this.$refs["currency"].value;

      await this.fetchPrice();
      this.submitted = true;
    },

    formatDate(date) {
      return new Date(date * 1000).toLocaleDateString("us-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },

    disableForm() {
      return !this.validDate() || this.inFuture() || !this.validBalance();
    },
    validBalance() {
      return this.balance >= 0;
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

    setDate(e) {
      this.submitted = false;

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
