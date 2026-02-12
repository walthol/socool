const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  // This takes whatever you type after the slash and uses it as the target
  // Example: your-site.vercel.app/https://scratch.mit.edu
  let target = req.url.split('/').slice(1).join('/');

  if (!target || !target.startsWith('http')) {
    res.status(400).send("Usage: socool-caxsacmar-bobs-projects-e9a24be8.vercel.app/https://discord.com");
    return;
  }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: (path) => "", // Clears the path so the target site loads correctly
  })(req, res);
};
