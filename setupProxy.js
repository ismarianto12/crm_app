const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("*", {
            target: "localhost:97/public/",
            secure: false,
            changeOrigin: true
        })
    );
};
