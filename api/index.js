const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://scratch.mit.edu/"; 

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", 
    },
  })(req, res);
};
