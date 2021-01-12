const path = require('path')

const tianPptPlugin = (options, ctx) => ({
  define() {
    return {
      selector: options.selector || 'div[class*="language-"] pre',
      copyText: options.copyText || "复制代码",
      change: options.change
    };
  },
  clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
});


module.exports = tianPptPlugin