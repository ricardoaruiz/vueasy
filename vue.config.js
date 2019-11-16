module.exports = { 
    css: {
      loaderOptions: {
        sass: {
            prependData: `
                @import "@/assets/styles/global.scss";
                @import "@/assets/styles/_variables.scss";
                @import "@/assets/styles/_styles.scss";
            `
        }
      }
    }
  };
  