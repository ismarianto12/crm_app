const { atom } = require("recoil");

const authenticated = atom({
    key: "autenticated",
    default: {
        check: false,
        user: { name: "Ismarianto" }
    }
});

export { authenticated }
