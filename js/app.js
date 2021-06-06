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
            console.log(producto.stock)
            this.setListaCarrito();
        },
        eliminarDelCarrito(producto) {
            this.getListaCarrito();
            // eliminar el producto del carrito
            for (let index = 0; index < this.productoscarrito.length; index++) {
                const item = this.productoscarrito[index];
                if (producto._id == item._id) {
                    console.log(item);
                    this.productoscarrito.splice(index, 1);
                    break;
                }
            }
            // aumentar el stock en los productos totales
            for (let index = 0; index < this.productos.length; index++) {
                const item = this.productos[index];
                if (producto._id == item._id) {
                    item.stock += 1;
                    console.log(item.stock);
                }
            }
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
