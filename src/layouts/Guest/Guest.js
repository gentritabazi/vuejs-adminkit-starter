import Vue from 'vue'
import GAuth from 'vue-google-oauth2'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(GAuth, {
    clientId: '961576761787-ovbuemep8q520407b2d7f85o12434qfo.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
})

export default {
    name: 'Guest',
    data() {
        return {
            appName: process.env.VUE_APP_NAME
        }
    }
}