<template>
  <div class="rounded-3 bg-c p-3 p-sm-4 p-xl-5">
    <div class="row">
      <div class="col-8">
        <!-- Logo input -->
        <div class="form-floating mb-4">
          <input
            type="text"
            id="logo"
            class="form-control bg-c"
            name="logo"
            @input="(e) => setLogoPath(e.target.value)"
            :value="logopath"
            required
          />
          <label class="form-label" for="name">Logo url</label>
        </div>
      </div>
      <div class="col-4">
        <img
          :src="logopath.replace(domain, localDomain).replace('www.', '')"
          alt=""
          width="100%"
          class="bg-white"
        />
        Localhost logo preview
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <!-- Textcolor input -->
        <div class="form-floating mb-4">
          <input
            type="text"
            id="textcolor"
            class="form-control bg-c"
            name="textcolor"
            :style="{ border: `3px solid ${textcolor}` }"
            @input="(e) => setTextColor(e.target.value)"
            :value="textcolor"
            required
          />
          <label class="form-label" for="textcolor">Text color</label>
        </div>
      </div>

      <div class="col-4">
        <!-- BG color input -->
        <div class="form-floating mb-4">
          <input
            type="text"
            id="bgcolor"
            class="form-control bg-c"
            name="bgcolor"
            @input="(e) => setBgColor(e.target.value)"
            :value="bgcolor"
            :style="{ border: `3px solid ${bgcolor}` }"
            required
          />
          <label class="form-label" for="bgcolor">Background color</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-8">
        <!-- form fields -->
        <div class="form-floating mb-4">
          <textarea
            class="form-control h-100 bg-c"
            id="fields"
            name="fields"
            rows="10"
            @input="(e) => setFields(e.target.value)"
            required
            v-model="fields"
          >
          </textarea>
          <label class="form-label" for="message">Form fields</label>
        </div>
      </div>
      <div class="col-4">
        <p>
          Try to remove irrelevant parts of the CF7 code if you get unexpected
          results.
        </p>
      </div>
    </div>

    <h2>Mail 1</h2>
    <p>Dit is de mail naar de <b>eigenaar</b> van de website.</p>

    <!-- Header input -->
    <div class="form-floating mb-4">
      <input
        type="text"
        id="header1"
        class="form-control bg-c"
        name="header1"
        @input="(e) => setHeader1(e.target.value)"
        :value="header1"
        required
      />
      <label class="form-label" for="header1">Header</label>
    </div>

    <!-- Message input -->
    <div class="form-floating mb-4">
      <textarea
        class="form-control h-100 bg-c"
        id="message1"
        name="message1"
        rows="4"
        @input="(e) => setMessage1(e.target.value)"
        v-model="message1"
        required
      ></textarea>
      <label class="form-label" for="message">Bericht</label>
    </div>

    <h2>Mail 2</h2>
    <p>Dit is de mail naar de <b>bezoeker</b> van de website.</p>

    <!-- Header input -->
    <div class="form-floating mb-4">
      <input
        type="text"
        id="header2"
        class="form-control bg-c"
        name="header2"
        @input="(e) => setHeader2(e.target.value)"
        :value="header2"
        required
      />
      <label class="form-label" for="header2">Header</label>
    </div>

    <!-- Message input -->
    <div class="form-floating mb-4">
      <textarea
        class="form-control h-100 bg-c"
        id="message2"
        name="message2"
        rows="7"
        required
        @input="(e) => setMessage2(e.target.value)"
        v-model="message2"
      ></textarea>
      <label class="form-label" for="message">Bericht</label>
    </div>

    <!-- Submit button -->
    <button
      type="submit"
      class="btn btn-secondary btn-block mb-4"
      @click="submitForm()"
      event=""
    >
      Create email templates
    </button>

    <div class="my-5">
      <h2>Mail 1</h2>

      <div v-html="mail1" class="mb-3"></div>
      <div class="btn btn-secondary" @click="copyMail1()">
        <i class="bi bi-copy"></i> Copy code
      </div>
    </div>

    <div class="my-2">
      <h2>Mail 2</h2>

      <div v-html="mail2" class="mb-3"></div>

      <div class="btn btn-secondary" @click="copyMail2()">
        <i class="bi bi-copy"></i> Copy code
      </div>
    </div>
  </div>
</template>

<script>
import tmpl from "@/data/email-template.json";

export default {
  tmpl,
  data() {
    return {
      logopath: "https://outhands.nl/assets/images/outhands-logo-1.svg", // https://outhands.nl/assets/images/logo-sig.png
      domain: "https://outhands.nl",
      localDomain: "",
      bgcolor: "#ffcc00",
      textcolor: "#010101",
      fields: `[text* your-name autocomplete:name placeholder "Naam"]
[email* your-email autocomplete:email placeholder "E-mail"]
[text* your-subject placeholder "Onderwerp"]
[textarea your-message placeholder "Bericht"]
[submit "Versturen"]`,
      fieldsTable: "",
      // mail 1
      mail1: "",
      header1: "Nieuw bericht via contactformulier",
      message1: `Er is een nieuw bericht verstuurd via de website. Hieronder vindt u de ingevulde informatie.

Dit is een automatisch gegenereerde e-mail. U kunt hier niet op reageren.`,
      // mail 2
      mail2: "",
      header2: "Bedankt voor je bericht!",
      message2: `Beste [your-name],

Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.

Dit is een automatisch gegenereerde e-mail. U kunt hier niet op reageren.

Bij vragen kan u contact opnemen via support@outhands.nl.`,
      parsedMessage1: "",
      parsedMessage2: "",
    };
  },
  // computed: {
  //   cleanedMessage1() {
  //     return this.message1.replaceAll("<br />", "\n");
  //   },

  //   cleanedMessage2() {
  //     return this.message2.replaceAll("<br />", "\n");
  //   },
  // },
  created() {
    let tmplCopy = { ...this.$options.tmpl };
    this.mail1 = tmplCopy.syntax;
    this.mail2 = tmplCopy.syntax;

    this.setLogoPath(this.logopath);
    this.setFields(this.fields);
    this.setHeader1(this.header1);
    this.setMessage1(this.message1);
    this.setHeader2(this.header2);
    this.setMessage2(this.message2);
  },
  methods: {
    extractEmail(text) {
      return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    },
    setLogoPath(v) {
      // check input
      if (!v.startsWith("https://") && !v.startsWith("http://")) {
        return;
      }

      //reset
      this.mail1 = this.mail1.replace(
        `src="${this.logopath}"`,
        `src="LOGOPATH"`
      );
      this.mail2 = this.mail2.replace(
        `src="${this.logopath}"`,
        `src="LOGOPATH"`
      );
      // set new path
      this.logopath = v;

      this.domain = this.logopath.split("/").slice(0, 3).join("/");

      this.localDomain = this.domain
        .replace("https://", "http://")
        .replace(/.nl|.com|.de|.ch/gi, ".local");
      this.mail1 = this.mail1.replace("LOGOPATH", this.logopath);
      this.mail2 = this.mail2.replace("LOGOPATH", this.logopath);
    },

    setTextColor(v) {
      //check input
      if (!v.startsWith("#") || v.length !== 7) {
        // console.log("invalid bgcolor");
        return;
      }
      //reset
      this.mail1 = this.mail1.replace(
        `; color: ${this.textcolor}`,
        `; color: TEXTCOLOR`
      );
      this.mail2 = this.mail2.replace(
        `; color: ${this.textcolor}`,
        `; color: TEXTCOLOR`
      );
      // set new textcolor
      this.textcolor = v;
      this.mail1 = this.mail1.replace("TEXTCOLOR", this.textcolor);
      this.mail2 = this.mail2.replace("TEXTCOLOR", this.textcolor);
    },

    setBgColor(v) {
      // check input
      if (!v.startsWith("#") || v.length !== 7) {
        // console.log("invalid bgcolor");
        return;
      }
      //reset
      this.mail1 = this.mail1.replace(
        ` background: ${this.bgcolor}`,
        ` background: BGCOLOR`
      );
      this.mail2 = this.mail2.replace(
        ` background: ${this.bgcolor}`,
        ` background: BGCOLOR`
      );

      // set new bgcolor
      this.bgcolor = v;
      this.mail1 = this.mail1.replace("BGCOLOR", this.bgcolor);
      this.mail2 = this.mail2.replace("BGCOLOR", this.bgcolor);
    },

    setHeader1(v) {
      let placeholder = "<!-- header --> HEADER <!-- header -->";
      // check input
      if (v.length < 3) {
        console.log("header1 too short");
        return;
      }
      //reset
      this.mail1 = this.mail1.replace(
        `<!-- header --> ${this.header1} <!-- header -->`,
        placeholder
      );
      // set new header1
      this.header1 = v;
      this.mail1 = this.mail1.replace(
        placeholder,
        `<!-- header --> ${this.header1} <!-- header -->`
      );
    },

    setMessage1(v) {
      let placeholder = "<!-- message --> MESSAGE <!-- message -->";
      // check input

      //reset
      this.mail1 = this.mail1.replace(
        `<!-- message --> ${this.parsedMessage1} <!-- message -->`,
        placeholder
      );
      // set new header1
      this.message1 = v;
      this.parsedMessage1 = this.message1.replaceAll("\n", "<br />");

      console.log(this.message1);

      this.mail1 = this.mail1.replace(
        placeholder,
        `<!-- message --> ${this.parsedMessage1} <!-- message -->`
      );
    },

    setMessage2(v) {
      let placeholder = "<!-- message --> MESSAGE <!-- message -->";
      // check input

      //reset
      this.mail2 = this.mail2.replace(
        `<!-- message --> ${this.parsedMessage2} <!-- message -->`,
        placeholder
      );
      this.message2 = v;
      this.parsedMessage2 = this.message2.replaceAll("\n", "<br />");

      let emailAddresses = this.extractEmail(this.message2);
      for (const email of emailAddresses) {
        this.parsedMessage2 = this.parsedMessage2.replace(
          email,
          `<a href="mailto:${email}" style="color: ${this.textcolor}; opacity: 0.75">${email}</a>`
        );
      }

      this.mail2 = this.mail2.replace(
        placeholder,
        `<!-- message --> ${this.parsedMessage2} <!-- message -->`
      );
    },

    setHeader2(v) {
      console.log("v :>> ", v);
      let placeholder = "<!-- header --> HEADER <!-- header -->";
      // check input
      if (v.length < 3) {
        console.log("header2 too short");
        return;
      }
      //reset
      this.mail2 = this.mail2.replace(
        `<!-- header --> ${this.header2} <!-- header -->`,
        placeholder
      );
      // set new header1
      this.header2 = v;
      this.mail2 = this.mail2.replace(
        placeholder,
        `<!-- header --> ${this.header2} <!-- header -->`
      );
    },

    setFields(v) {
      let placeholder = "<!-- fields --> FIELDS <!-- fields -->";
      if (v.length === 0) {
        return;
      }

      //reset
      this.mail1 = this.mail1.replace(
        `<!-- fields --> ${this.fieldsTable} <!-- fields -->`,
        placeholder
      );
      this.mail2 = this.mail2.replace(
        `<!-- fields --> ${this.fieldsTable} <!-- fields -->`,
        placeholder
      );
      // set new fields table
      this.fieldsTable = this.parseFields(v);
      this.mail1 = this.mail1.replace(
        placeholder,
        `<!-- fields --> ${this.fieldsTable} <!-- fields -->`
      );
      this.mail2 = this.mail2.replace(
        placeholder,
        `<!-- fields --> ${this.fieldsTable} <!-- fields -->`
      );
    },

    parseFields(inputString) {
      const inputStrings = inputString.split("\n");
      const results = [];

      let fieldDescription;
      for (const input of inputStrings) {
        if (!input.startsWith("[")) {
          if (input.length > 0) {
            fieldDescription = input.replace(/<\/?[^>]+(>|$)/g, ""); // store possible field description
          }
          // console.log(`Invalid input format for: ${input}`);
          continue;
        }

        const placeholderIndex = input.indexOf("placeholder");

        if (placeholderIndex === -1) {
          console.log(`hmmmm: ${input}`);

          // continue;
        } else {
          // Extract the field value
          fieldDescription = input
            .substring(placeholderIndex + "placeholder".length)
            .match(/['"](.*?)['"]/)[1];
        }

        const words = input.split(/\s+/);
        const fieldName = words[1];
        const fieldType = words[0].slice(1);

        let fieldOutput = `[${fieldName}]`;

        if (fieldType.startsWith("email")) {
          fieldOutput = `<a style="opacity: 0.75; color:${this.textcolor};" href="mailto:[${fieldName}]">[${fieldName}]</a>`;
        }
        if (fieldType.startsWith("tel")) {
          fieldOutput = `<a style="opacity: 0.75; color:${this.textcolor};" href="tel:[${fieldName}]">[${fieldName}]</a>`;
        }

        if (fieldType.startsWith("submit")) {
          continue;
        }

        // Generating the HTML output
        const output = `<tr><td width="40%" style="color:#000000; font-size:14px; font-weight:bold; font-family:sans-serif; border-right:2px solid #f8f8f8; border-bottom:2px solid #f8f8f8; padding:15px 10px">${fieldDescription}</td><td style="color:#000000; font-size:14px; font-family:sans-serif; border-bottom:2px solid #f8f8f8; padding:15px 10px;">${fieldOutput}</td></tr>`;
        results.push(output);
      }
      return results.join("\n");
    },

    copyMail1() {
      console.log("todo copy mail 1");
    },
  },
};
</script>
