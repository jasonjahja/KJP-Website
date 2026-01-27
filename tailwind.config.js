module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5C91C4",
        secondary: "#2B5065",
        bw01: "#FFFFFF",
        bw02: "#F9F9F9",
        bw03: "#F0F0F0",
        bw04: "#DADADA",
        bw05: "#D6D6D6",
        bw06: "#888888",
        bw07: "#707070",
        bw08: "#333333",
        blue: "#4766E4",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        b7: ["10px", { lineHeight: "20px", fontWeight: "400" }],
        b6: ["12px", { lineHeight: "22px", fontWeight: "400" }],
        b5: ["14px", { lineHeight: "24px", fontWeight: "400" }],
        b4: ["16px", { lineHeight: "26px", fontWeight: "400" }],
        b3: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        b2: ["20px", { lineHeight: "30px", fontWeight: "400" }],
        b1: ["22px", { lineHeight: "32px", fontWeight: "400" }],

        s4: ["10px", { lineHeight: "20px", fontWeight: "600" }],
        s3: ["12px", { lineHeight: "22px", fontWeight: "600" }],
        s2: ["14px", { lineHeight: "24px", fontWeight: "600" }],
        s1: ["16px", { lineHeight: "26px", fontWeight: "600" }],

        h8: ["18px", { lineHeight: "28px", fontWeight: "600" }],
        h7: ["20px", { lineHeight: "30px", fontWeight: "600" }],
        h6: ["24px", { lineHeight: "34px", fontWeight: "600" }],
        h5: ["26px", { lineHeight: "36px", fontWeight: "600" }],
        h4: ["32px", { lineHeight: "42px", fontWeight: "600" }],
        h3: ["42px", { lineHeight: "52px", fontWeight: "600" }],
        h2: ["54px", { lineHeight: "64px", fontWeight: "600" }],
        h1: ["58px", { lineHeight: "68px", fontWeight: "600" }],
      },

      boxShadow: {
        button: "4px 4px 4px 0px rgba(0,0,0,0.1)",
        card: "4px 4px 16px 0px rgba(0,0,0,0.10)",
        navbar: "0 4px 16px 0px rgba(0,0,0,0.10)",
      },

      spacing: {
        5: "5px",
        10: "10px",
        15: "15px",
        25: "25px",
        30: "30px",
        45: "45px",
        60: "60px",
        82: "82px",
        120: "120px",
      },

      // container: {
      //   center: true,
      //   padding: "1rem",
      // },

    },
  },
  plugins: [],
};
