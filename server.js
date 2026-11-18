const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/", createProxyMiddleware({
  target: "https://web.cloudmoonapp.com",
  changeOrigin: true,
  ws: true,
  xfwd: true
}));

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Proxy started on port " + PORT);
});
