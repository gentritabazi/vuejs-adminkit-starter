import guestLayout from '@/layouts/Guest';
import Api from '@/utils/api.js';
import AppConfig from '@/config/app.js';

export default {
  name: 'Login',

  data() {
    return {
      email: null,
      password: null,
    };
  },

  components: {
    guestLayout,
  },

  methods: {
    async login() {
      const response = await Api({
        url: AppConfig.BACKEND_URL + '/login',
        method: 'POST',
        data: { email: self.email, password: self.password },
      });

      this.$store.commit('LOGGED_USER', response.data);

      this.$router.go({ name: 'admin.dashboard' });
    },
  },
};
