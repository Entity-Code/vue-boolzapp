// cliccando sulla chat vedo quella corrispondente;
// con header con dati relativi a chat attiva;
// relativa chat in elenco rimane selezionata

// 1) struttura dati da usare: array di oggetti (entità contatti)
// contenente proprietà/oggetto messaggio con proprietà ricevuto inviato
// 2) trovare la giusta posizione in un listato

// , uso dell'indice
var app = new Vue({
   el: "#app",

   data: {
      // main profile
      user: {
         nome: "Mattia",
         img: "img/avatar_2.jpg"
      },

      // myMessage
      myMessage: "",


      // sx
      chatAttiva: 0,
      contacts:[
         {
            nome: "Gianluigi",
            msg: "ok d'accor...",
            img:"img/avatar_3.jpg",
            messaggi: [
              {
                testo: "MIO MESSAGGIO ciao anna sono andata a fare la spesa a dopo ciao",
                data: "23/11/2020 16:11:43",
                mioMessaggio: true
              },
             {
                testo: "MESSAGGIO DEL BOT va bene allora ci sentiamo a dopo",
                data: "23/11/2020 16:11:51",
                mioMessaggio: false
             },
             {
               testo: "MESSAGGIO DEL BOT va bene allora ci sentiamo a dopo",
               data: "23/11/2020 16:11:51",
               mioMessaggio: false
             },
             {
               testo: "MESSAGGIO DEL BOT va bene allora ci sentiamo a dopo",
               data: "23/11/2020 16:11:51",
               mioMessaggio: false
             },
             {
               testo: "MIO MESSAGGIO ciao anna sono andata a fare la spesa a dopo ciao",
               data: "23/11/2020 16:11:43",
               mioMessaggio: true,
            },
            ]
         },


         {
            nome: "Francesca",
            msg: "Va bene a d...",
            img:"img/avatar_4.jpg",
            messaggi: [
              {
                testo: "MIO MESSAGGIO non mi è piaciuto il tuo comportamento ieri",
                data: "26/10/2020 7:11:43",
                mioMessaggio: true
              },
              {
                testo: "MESSAGGIO DEL BOT ok",
                data: "27/10/2020 11:14:52",
                mioMessaggio: false
              },
              {
                testo: "MESSAGGIO DEL BOT ok",
                data: "27/10/2020 11:14:52",
                mioMessaggio: false
              },
              {
                testo: "MIO MESSAGGIO non mi è piaciuto il tuo comportamento ieri",
                data: "26/10/2020 7:11:43",
                mioMessaggio: true
              }
            ]
         },


         {
            nome: "Luigi",
            msg: "Luisa? baff...",
            img:"img/avatar_5.jpg",
            messaggi: [
              {
                testo: "MIO MESSAGGIO sei tornato a casa? fammi sapere",
                data: "23/11/2020 17:11:43",
                mioMessaggio: true
              },
              {
                testo: "MESSAGGIO DEL BOT si sono tornata da poco, tu?",
                data: "23/11/2020 18:11:51",
                mioMessaggio: false
              },
              {
                testo: "MIO MESSAGGIO sei tornato a casa? fammi sapere",
                data: "23/11/2020 17:11:43",
                mioMessaggio: true
              },
              {
                testo: "MIO MESSAGGIO sei tornato a casa? fammi sapere",
                data: "23/11/2020 17:11:43",
                mioMessaggio: true
              },
              {
                testo: "MESSAGGIO DEL BOT si sono tornata da poco, tu?",
                data: "23/11/2020 18:11:51",
                mioMessaggio: false
              }
            ]
         },


         {
            nome: "Mario",
            msg: "si ok ciao c...",
            img:"img/avatar_6.jpg",
            messaggi: [
              {
                testo: "MIO MESSAGGIO papà mi compro il nuovo cellulare?",
                data: "23/11/2020 10:34:21",
                mioMessaggio: true
              },
              {
                testo: "MESSAGGIO DEL BOT solo se te lo meriti",
                data: "9/9/2020 10:32:43",
                mioMessaggio: false
              },
              {
                testo: "MESSAGGIO DEL BOT solo se te lo meriti",
                data: "9/9/2020 10:32:43",
                mioMessaggio: false
              },
              {
                testo: "MESSAGGIO DEL BOT solo se te lo meriti",
                data: "9/9/2020 10:32:43",
                mioMessaggio: false
              },
              {
                testo: "MIO MESSAGGIO papà mi compro il nuovo cellulare?",
                data: "23/11/2020 10:34:21",
                mioMessaggio: true
              }

            ]
         }

      ]
   },

   methods: {
      cambiaChat: function(index) {
        this.chatAttiva = index;
     },

      addMyMessage: function () {
         // creo l'oggetto myMessage (messaggio inserito dall'utente)
         let myMessage = {
            testo: this.myMessage,
            data: "23/11/2020 16:11:43",
            mioMessaggio: true
         }

         // vado in contacts/chat aperta in quel momento/ messaggi <- pusho il nuovo oggetto myMessage
         this.contacts[this.chatAttiva].messaggi.push(myMessage);
         //pulisco l'input dopo l'invio del messaggio
         this.myMessage = "";
      }


   }
});
