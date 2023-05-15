import loaderComponent from '@/components/Loader';
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
    loaderComponent,
  },

  computed: {
    ...mapGetters({
      displayLoader: 'getDisplayLoader',
    }),
  },
};
