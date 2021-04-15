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
        async signInWithGoogle () {
            const googleUser = await this.$gAuth.signIn();
            if (!googleUser) {
                return null;
            }
            
            let accessToken = googleUser.getAuthResponse().access_token;
            this.loginWithSocial('google', accessToken)
        },
        logInWithFacebook() {
            this.initFacebook();
            window.FB.getLoginStatus(function (response) {
                if (response.status === 'connected') {
                    let accessToken = response.authResponse.accessToken;
                    this.loginWithSocial('facebook', accessToken)
                } else {
                    window.FB.login(function (response) {
                        if (response.authResponse) {
                            let accessToken = response.authResponse.accessToken;
                            this.loginWithSocial('facebook', accessToken)
                        } else {
                            console.log('User cancelled login or did not fully authorize');
                        }
                    });
                }
            });
        },
        initFacebook() {
            window.FB.init({
                appId: '2912967285601774',
                cookie: true,
                version: 'v13.0'
            });
        },
        login() {
            const self = this

            httpAxios({
                url: self.$backendUrl + '/login',
                method: 'POST',
                data: { email: self.email, password: self.password }
            }).then(response => {
                if(response.data.role != 'admin') {
                    return self.notifyWarning('Sorry you entered invalid credentials!')
                }

                self.$store.commit('LOGGED_USER', response.data)

                self.$router.go({ name: 'admin.dashboard' })
            })
        },
        loginWithSocial(type, token) {
            const self = this

            httpAxios({
                url: self.$backendUrl + '/login-with-' + type,
                method: 'POST',
                data: { token: token }
            }).then(response => {
                if(response.data.role != 'admin') {
                    return self.notifyWarning('Sorry you entered invalid credentials!')
                }
                
                self.$store.commit('LOGGED_USER', response.data)

                self.$router.go({ name: 'admin.dashboard' })
            })
        }
    },
    created() {
        let facebookScript = document.createElement('script');
        facebookScript.setAttribute('src', 'https://connect.facebook.net/en_US/all.js');

        document.head.appendChild(facebookScript);
    },
}
