import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppConfig from '@/config/app';

export default {
  name: 'Guest',

  data() {
    return {
      appName: AppConfig.NAME,
      currentYear: new Date().getFullYear(),
    };
  },
};
