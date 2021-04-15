import guestLayout from '@/layouts/Guest'
import httpAxios from '@/utils/http-axios.js'

export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null
        }
    },
    components: {
        guestLayout
    },
    methods: {
        login() {
            const self = this

            httpAxios({
                url: self.$backendUrl + '/login',
                method: 'POST',
                data: { email: self.email, password: self.password }
            }).then(async response => {
                if (response.data.role != 'admin') {
                    return self.notifyWarning('Sorry you entered invalid credentials!')
                }

                self.$store.commit('LOGGED_USER', response.data)

                self.$router.go({ name: 'admin.dashboard' })
            })
        }
    }
}
