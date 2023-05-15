export default {
  methods: {
    notifyWarning(text = 'Something is going wrong!', title = 'Warning') {
      return this.$notify({
        group: 'notify',
        type: 'warn',
        title: title,
        text: text,
      });
    },
    notifySuccess(text = 'The process was completed successfully.', title = 'Success') {
      return this.$notify({
        group: 'notify',
        type: 'success',
        title: title,
        text: text,
      });
    },
  },
};
