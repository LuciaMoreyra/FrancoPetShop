app.component('carrito-de-compras', {
    props: {
        listacompras: {
            type: Array,  // array de objetos
            required: true,
        },
    },
    template:
        /*html*/
        `<div class="carrito">carrito : {{ cantidadProductos }}</div>`,
    data() {
        return {

        }
    },
    computed: {
        cantidadProductos() {
            return this.listacompras.length
        }
    }

})