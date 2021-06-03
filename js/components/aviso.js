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


// aviso de un producto
// recibe objeto de un producto y lo muestra como un ul y a todas sus propiedades como li