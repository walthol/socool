const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  // Replace the URL below with the site you want to unblock
  let target = "https://www.discord.com/"; 

  // This part handles the "handshake" between your Chromebook and the site
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", 
    },
  })(req, res);
};
