import pagination from '@maqe-vue/pagination';

export default {
  name: 'Pagination',
  props: {
    totalRows: Number,
    perPage: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalPages: function () {
      console.log(this.perPage);
      return Math.ceil(this.totalRows / this.perPage);
    },
  },
  components: {
    pagination,
  },
  methods: {
    handlePageChange(pageNum) {
      if (!isNaN(pageNum)) {
        this.$emit('pageChange', pageNum);
        this.currentPage = pageNum;
      }
    },
  },
};
