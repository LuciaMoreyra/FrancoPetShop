app.component('aviso-item', {
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    template:
        /*html*/
        `<ul>
            <li style="border: 1px solid blue;" v-for="propiedad in item">{{ propiedad }}</li>
        </ul>`,
    data() {
        return {

        }
    },
    methods: {},
    computed: {},
})


// aviso de un producto
// recibe objeto de un producto y lo muestra como un ul y a todas sus propiedades como li