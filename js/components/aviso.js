app.component('aviso-item', {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    template:
        /*html*/
        `<div class="aviso-producto">
            <span v-show="ultimasUnidades" class="aviso-ultimas">Ultimas unidades!</span>
           <img :src="item.imagen" :alt="item.nombre">
           <h3>{{ item.nombre }}</h3>
           <p @click="mostrarDetalles" class="detalles">detalles</p>
           <p class="precio">$ {{ item.precio }}</p>
           <span v-show="sinStock">Sin stock</span>
           <button v-bind:disabled="sinStock" @click="agregarProducto(item)">comprar</button>
        </div>`,
    data() {
        return {

        }
    },
    methods: {
        agregarProducto(item) {

            this.$emit('agregar-al-carrito', item)
            swal({
                title: "Se agrego al carrito",
                text: this.item.nombre,
                icon: "success",
                button: "Cerrar",
            });
        },
        mostrarDetalles() {
            swal({
                title: this.item.nombre,
                text: this.item.descripcion,
                button: "Cerrar",
            });
        }
    },
    computed: {
        ultimasUnidades() {
            return this.item.stock < 5 && this.item.stock > 0
        },
        sinStock() {
            return this.item.stock == 0
        }

    },
})

