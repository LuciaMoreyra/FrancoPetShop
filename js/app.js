const app = Vue.createApp({
    data() {
        return {
            articulos: [],
            mostrar: false,
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            fetch('https://apipetshop.herokuapp.com/api/articulos')
                .then(response => response.json())
                .then(data => this.articulos = data.response)
        },
        toggleArticulos() {
            this.mostrar = !this.mostrar;

        }
    },
    computed: {

    },
})
