const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://google.com/"; 

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", 
    },
  })(req, res);
};
