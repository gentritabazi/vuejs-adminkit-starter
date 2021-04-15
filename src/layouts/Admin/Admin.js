import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import sidebarComponent from '@/components/Sidebar'
import navbarComponent from '@/components/Navbar'

export default {
    name: 'Admin',
    components: {
        sidebarComponent,
        navbarComponent,
    },
    mounted() {
        this.setupTheme()
    },
    methods: {
        setupTheme() {
            
        }
    }
}