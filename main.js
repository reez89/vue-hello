/* Istruzioni:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data */

let app = new Vue({
    el: '#app', 
    data:{
        message: "Finally we meet, VueJS <3",
        image: 'vue.png',
        isHidden: 'false'
    },
});