const app = Vue.createApp({
    data() {
        return {
            productos: [],
            productoscarrito: [],
            visible: false,
            mostrarModal: false,
        }
    },
    created() {
        this.fetchData()
        this.getListaCarrito();
    },
    methods: {
        fetchData() {
            fetch('https://apipetshop.herokuapp.com/api/articulos')
                .then(response => response.json())
                .then(data => this.productos = data.response)
        },
        agregarAlCarrito(producto) {
            this.getListaCarrito();
            this.productoscarrito.push(producto);
            producto.stock -= 1;
            this.setListaCarrito();
        },
        eliminarDelCarrito(producto) {
            this.getListaCarrito();
            let indice = this.productoscarrito.indexOf(producto);
            this.productoscarrito.splice(indice, 1);
            producto.stock += 1;
            this.setListaCarrito();
        },
        vaciarCarrito() {
            window.sessionStorage.clear();
            this.getListaCarrito();
        },
        toggleNav() {
            this.visible = !this.visible
        },
        toggleModal() {
            this.mostrarModal = !this.mostrarModal
        },
        getListaCarrito() {
            if (window.sessionStorage.getItem('carrito') !== null) {
                this.productoscarrito = JSON.parse(window.sessionStorage.getItem('carrito'));
            } else {
                this.productoscarrito = [];
            }
        },
        setListaCarrito() {
            if (typeof (Storage) !== "undefined") {
                let carrito = JSON.stringify(this.productoscarrito);
                window.sessionStorage.setItem('carrito', carrito);
            } else {
                console.log("Sorry, your browser does not support Web Storage...")
            }
        },
    },
    computed: {
        listaFarmacia() {
            return this.productos.filter(producto => producto.tipo == 'Medicamento')
        },
        listaJuguetes() {
            return this.productos.filter(producto => producto.tipo == 'Juguete')
        },
    },
})
