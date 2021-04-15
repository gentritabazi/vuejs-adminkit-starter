import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default {
    name: 'Guest',
    data() {
        return {
            appName: process.env.VUE_APP_NAME
        }
    }
}