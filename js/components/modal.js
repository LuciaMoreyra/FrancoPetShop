app.component('modal', {
    props: {
        msg: {
            type: String,
            required: true,
        }
    },
    template:
        /*html*/
        `<div @click="cerrarModal" class="modal">
         <div class="cartel">
            <p>{{msg}}</p>
         </div>
    </div>`,
    methods: {
        cerrarModal(item) {
            this.$emit('cerrar-modal')

        }
    }
})