const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://discord.com/"; 

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", 
    },
  })(req, res);
};
