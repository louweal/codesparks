<template>
  <div>
    <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5 mb-4">
      <form
        class="mb-3"
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

        <div class="form-floating mb-4">
          <input
            ref="accounts"
            type="text"
            id="accounts"
            class="form-control bg-c"
            :class="validAccount() !== true ? 'text-danger' : false"
            name="accounts"
            placeholder="0.0.123450; 0.0.456780"
            @input="(e) => setAccount(e.target.value)"
            required
          />
          <label class="form-label" for="accounts">Account ID</label>

          <p class="text-danger" v-if="validAccount() !== true">
            Account ID is invalid
          </p>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-secondary btn-block">
          Find rank
        </button>
      </form>

      <div class="spinner-border" role="status" v-if="fetching"></div>

      <p class="text-danger" v-if="error">
        {{ error }}. <br />
        Account balance: {{ parseFloat(this.balance / 1e8).toFixed(2) }}
      </p>

      <div v-if="submitted && !fetching && !error">
        <span>Your rank is:</span>
        <p class="display-3 f-heading">#{{ rank }}</p>
      </div>
    </div>
    <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
      <div class="spinner-border" role="status" v-if="fetchingDefault"></div>

      <template v-if="!fetchingDefault && !fetching">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Account ID</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(a, i) in leaders.slice(
                sliceStart,
                sliceStart + itemsPerPage
              )"
              :key="i"
            >
              <th scope="row">{{ sliceStart + i + 1 }}</th>
              <td>{{ a.account }}</td>
              <td>{{ parseInt(a.balance / 1e8) }}</td>
            </tr>
          </tbody>
        </table>

        <ul class="pagination">
          <li
            class="page-item"
            v-if="curPage > 1"
            @click="updatePage(curPage - 1)"
          >
            <span class="page-link"><i class="bi bi-chevron-left"></i></span>
          </li>
          <li
            class="page-item"
            :class="curPage === p + 1 ? 'disabled active' : false"
            v-for="p in numPages > 7 ? pages.slice(0, 2) : pages"
            :key="p + 1"
            @click="updatePage(p + 1)"
          >
            <span class="page-link">{{ p + 1 }}</span>
          </li>

          <li class="page-item" v-if="curPage <= 2 || curPage >= numPages - 1">
            <span class="page-link">...</span>
          </li>

          <li class="page-item" v-if="curPage > 3 && curPage < numPages - 1">
            <span class="page-link">...</span>
          </li>

          <li
            class="page-item active disabled"
            v-if="curPage > 2 && curPage < numPages - 1"
          >
            <span class="page-link"> {{ curPage }} </span>
          </li>

          <li class="page-item" v-if="curPage > 2 && curPage < numPages - 2">
            <span class="page-link">...</span>
          </li>
          <li
            class="page-item"
            :class="curPage === p + 1 ? 'disabled active' : false"
            v-for="p in numPages > 5 ? pages.slice(-2) : []"
            :key="p + 1"
            @click="updatePage(p + 1)"
          >
            <span class="page-link">{{ p + 1 }}</span>
          </li>

          <li
            class="page-item"
            v-if="curPage !== numPages"
            @click="updatePage(curPage + 1)"
          >
            <span class="page-link"><i class="bi bi-chevron-right"></i></span>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import { fetchAccountBalance } from "../utils/leaderboard";
const { fetchBalances } = require("../utils/fetchHolders.js");

export default {
  data() {
    return {
      submitted: false,
      account: "0.0.12345",
      fetching: false,
      fetchingDefault: true,
      leaders: {},
      curPage: 4,
      itemsPerPage: 25,
      numItems: 0,
      numPages: 0,
      pages: [],
      sliceStart: 0,
      balance: 0,
      error: undefined,
      rank: 0,
    };
  },

  async fetch() {
    let leaders = await fetchBalances("/api/v1/balances");

    this.setLeaderboard(leaders);

    this.fetchingDefault = false;
  },

  methods: {
    setLeaderboard(leaders) {
      this.leaders = leaders;
      if (this.leaders) {
        this.leaders = this.leaders.sort((a, b) =>
          a.balance > b.balance ? -1 : 1
        );
      }

      this.numItems = this.leaders.length;
      this.numPages = Math.ceil(this.numItems / this.itemsPerPage);
      // console.log(this.numPages);
      this.pages = this.numPages > 0 ? [...Array(this.numPages).keys()] : [];
    },
    setAccount(e) {
      this.account = e;
    },
    validAccount() {
      return this.account.startsWith("0.0.");
    },

    updatePage(p) {
      this.curPage = p;
      this.sliceStart = (p - 1) * this.itemsPerPage;
    },

    async onSubmit() {
      this.submitted = false;
      this.error = false;
      this.fetching = true;
      if (this.validAccount()) {
        this.balance = await fetchAccountBalance(this.account);
        // console.log(this.balance / 1e8);
        if (this.balance > 50000e8) {
          let ranking = await fetchBalances("/api/v1/balances", this.balance);
          ranking = ranking.sort((a, b) => (a.balance > b.balance ? -1 : 1));
          if (this.balance > 1000000e8) {
            this.leaders = [];
            this.setLeaderboard(ranking);
          }
          for (let i = ranking.length - 1; i >= 0; i--) {
            if (ranking[i].account === this.account) {
              this.rank = i + 1;
              break;
            }
          }
        } else {
          this.error = "Unable to obtain ranking";
        }
      }
      this.fetching = false;
      this.submitted = true;
    },
  },
};
</script>
