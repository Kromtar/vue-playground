const app = Vue.createApp({
    data() {
        return {
            showMsg: false,
            number: 25,
            x: 0,
            y: 0,
            books: [
                { id: 1, titulo: "Libro 1", autor: "Pepe", img: "https://picsum.photos/50", fav: false },
                { id: 2, titulo: "Libro Feo", autor: "Jose", img: "https://picsum.photos/70", fav: true },
                { id: 3, titulo: "Libro Lindo", autor: "Maria", img: "https://picsum.photos/90", fav: false }
            ],
            url: "https://www.google.cl"
        }
    },
    methods: {
        add(value) {
            this.number += value
        },
        sub(value) {
            this.number -= value
        },
        handleEvents(e, data) {
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        handleFav(bookId) {
            this.books.forEach(book => {
                if(book.id == bookId) {
                    book.fav = !book.fav
                }
            });
        }, 
        handleFav2(book) {
            book.fav = !book.fav
        }
    },
    watch: {
        'number'(val) {
            if(val > 50){
                this.showMsg = true
            }else{
                this.showMsg = false
            }
        }
    },
    //Forma de computar datos dado cambios en otros datos
    //Ej: Se computa una lista de libros filtrada cada vez que cambia los books
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.fav)
        }
    }
})


app.mount("#app")