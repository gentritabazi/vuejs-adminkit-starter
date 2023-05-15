export default {
  methods: {
    getUrlExtension: function (url) {
      if (url) {
        return url.split(/[#?]/)[0].split('.').pop().trim();
      }
    },
  },
};
