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
      currentTime: "",
      // main profile
      user: {
         nome: "Mattia",
         img: "img/avatar_2.jpg"
      },
      // myMessage
      myMessage: "",
      //filtraggio
      filtra: "",
      // sx contacts
      chatAttiva: 0,
      contacts:[
         {
            nome: "Gianluigi",
            msg: "ciao Anna...",
            img:"img/avatar_3.jpg",
            messaggi: [
            {
               testo: "ciao anna sono andata a fare la spesa a dopo ciao",
               data: "23/11/2020 16:11:43",
               mioMessaggio: true
            },
            {
               testo: "va bene allora ci sentiamo a dopo",
               data: "23/11/2020 16:11:51",
               mioMessaggio: false
            },
            {
               testo: "ciao anna sono andata a fare la spesa a dopo ciao",
               data: "23/11/2020 16:11:43",
               mioMessaggio: true,
            },
            ],
            filtered: true
         },


         {
            nome: "Francesca",
            msg: "ok",
            img:"img/avatar_4.jpg",
            messaggi: [
            {
               testo: "non mi è piaciuto il tuo comportamento ieri",
               data: "26/10/2020 7:11:43",
               mioMessaggio: true
            },
            {
               testo: "ok",
               data: "27/10/2020 11:14:52",
               mioMessaggio: false
            }
            ],
            filtered: true
         },


         {
            nome: "Luigi",
            msg: "si sono t...?",
            img:"img/avatar_5.jpg",
            messaggi: [
            {
               testo: "sei tornato a casa? fammi sapere",
               data: "23/11/2020 17:11:43",
               mioMessaggio: false
            },

            {
               testo: "si sono tornata da poco, tu?",
               data: "23/11/2020 18:11:51",
               mioMessaggio: true
            }
            ],
            filtered: true
         },

         {
            nome: "Mario",
            msg: "solo se t...",
            img:"img/avatar_6.jpg",
            messaggi: [
            {
               testo: "papà mi compri il nuovo cellulare?",
               data: "23/11/2020 10:34:21",
               mioMessaggio: true
            },
            {
               testo: "solo se te lo meriti",
               data: "9/9/2020 10:32:43",
               mioMessaggio: false
            }
           ],
           filtered: true
         }
      ]
   },

   methods: {
      cambiaChat: function(index) {
        this.chatAttiva = index;
        //scroll down
        setTimeout(this.pageScroll, 0);
     },

      addMyMessage: function () {
         if (this.myMessage != "") {
            // creo l'oggetto myMessage (messaggio inserito dall'utente)
            let myMessage = {
               testo: this.myMessage,
               data: dateTime,
               mioMessaggio: true
            }

            // vado in contacts/chat aperta in quel momento/ messaggi <- pusho il nuovo oggetto myMessage
            this.contacts[this.chatAttiva].messaggi.push(myMessage);
            //pulisco l'input dopo l'invio del messaggio
            this.myMessage = "";

            //scroll down
            setTimeout(this.pageScroll, 0);
            // dopo 1s attivo la risposta del bot automatica
            setTimeout(this.addBotMessage, 1000);
         }
      },

      addBotMessage: function () {
         // oggetto risposta bot
         let myMessage = {
            testo: "ok",
            data: dateTime,
            mioMessaggio:false
         }

         this.contacts[this.chatAttiva].messaggi.push(myMessage);
         //scroll down
         setTimeout(this.pageScroll, 0);
      },

      filtraggio: function(){
        // ciclo la lista contatti
        this.contacts.forEach((contact, i) => {
          let string = this.filtra;
          let nome = contact.nome
          // converto in minuscolo
          string = string.toLowerCase();
          nome = nome.toLowerCase();

          // se la stringa è contenuta nel nome
          if (nome.includes(string)) {
            contact.filtered = true;
          } else { // altrimenti
            contact.filtered = false;
          }
        });
      },

      // mantenimento dello scroll in basso
      pageScroll: function() {
        this.$refs.pageScroll.scrollTop = this.$refs.pageScroll.scrollHeight;
      }
   }
});

// calcolo tempo corrente
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
