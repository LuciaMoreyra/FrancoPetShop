app.component('carrito-de-compras', {
    props: {
        listacompras: {
            type: Array,  // array de objetos
            required: true,
        },
    },
    template:
        /*html*/
        `
        <div class="carrito">
        <img src="img/shopping-cart-blanco.png" @click="toggleCarrito">  


        <div class="carrito-cartel" v-show="carritoVisible">
            
                <h4 class="titulo">Mi carrito</h4>
                
           
            <div class="lista-carrito">
                <ul>
                    <li v-for="producto in listacompras">
                    {{ producto.nombre }}   $ {{ producto.precio }} 
                    <span @click="eliminarDelCarrito(producto)">eliminar</span>
                    </li>
                </ul>
            </div>
            <div class="total">Importe total: <span>$ {{ precioTotal }}</span></div>
            <button @click="cartelCompra">COMPRAR</button>
        </div>
        
        </div>
        
        `,
    data() {
        return {
            carritoVisible: false,
        }
    },
    methods: {
        toggleCarrito() {
            this.carritoVisible = !this.carritoVisible

        },
        eliminarDelCarrito(producto) {
            this.$emit('eliminar-del-carrito', producto)
        },
        cartelCompra() {
            if(cantidadProductos != 0) {
              swal({
                title: "Gracias por su compra!",
                button: "Cerrar",
            });
            this.$emit('vaciar-carrito');  
            }
        }
    },
    computed: {
        cantidadProductos() {
            return this.listacompras.length
        },
        precioTotal() {
            let monto = 0;
            this.listacompras.forEach(producto => {
                monto += producto.precio;
            });
            return monto;
        },

    }

})