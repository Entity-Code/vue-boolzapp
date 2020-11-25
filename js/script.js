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
            accesso: currentTime(),
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
               testo: "a dopo",
               data: "23/11/2020 16:11:43",
               mioMessaggio: true,
            },
            ],
            filtered: true
         },


         {
            nome: "Francesca",
            msg: "ok",
            accesso: currentTime(),
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
            accesso: currentTime(),
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
            accesso: currentTime(),
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
               data: currentTime(),
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
            testo: randomAnswer(),
            data: currentTime(),
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
          let nome = contact.nome;
          // converto in minuscolo
          string = string.toLowerCase();
          nome = nome.toLowerCase();

          // se la stringa è contenuta nel nome inserito
          if (nome.includes(string)) {
            contact.filtered = true;
          } else { // altrimenti
            contact.filtered = false;
          }
        });
      },

      // mantenimento dello scroll in basso
      pageScroll: function () {
        this.$refs.pageScroll.scrollTop = this.$refs.pageScroll.scrollHeight;
      }
   }
});

// calcolo tempo corrente
function currentTime() {
   // aggiunge lo 0 prima della cifra, se quest'ultima è < 10
   //Es: 8/3/2020 16:8:3 -> 08/03/2020 16:08:03
   function zero(time) {
      if (time < 10) {
         time = "0" + time;
      }
      return time;
   }

   var today = new Date();
   var date = zero(today.getFullYear())+ '-' +(zero(today.getMonth()+1)) + '-' + zero(today.getDate());
   var time = zero(today.getHours()) + ":" + zero(today.getMinutes()) + ":" + zero(today.getSeconds());
   var dateTime = date+' '+time;
   return dateTime;
}

// generazione frase casuale del bot
function randomAnswer() {
   var randomPosition = Math.floor(Math.random() * 26);
   var answers = ["Hey come va?","Come ti butta?","Tutto bene grazie, a te?","Ti stavo cercando, dov'eri finito?","Non ho idea di come tu possa essere diventato così","Ho preso la lode ! Sono entusiasta!","In che senso? 🙈","Ah capito, e la famiglia come va?","Tutto okay, che si dice dalle tue parti?","COSA HAI DETTO DI MIA MADRE????","SE TI TROVO... SE TI TROVO TI riempio di bacetti 	🤬","D'accordo, se proprio insisti...","La smetti di scrivere ad un bot?","Perché ti sto rispondendo dopo quello che mi hai fatto?","Hey... mi fai uscire da questa chat? dove mi trovo????? 😳","Mi sa che ho preso il raffreddore uscendo ieri sera...","Va bene ma fa attenzione!","Andrà tutto bene, credi in te stesso ^^","Fatti forza, nessuno è nato imparato! se vuoi puoi 😀","Come sta andando il corso?","Ti voglio bene, non mollare mai ❤️","Io vado a nanna, notte notte 💤❤️","Non dimenticarti mai chi sei 💋","Dovresti provare a scrivere ad una persona reale ogni tanto 👁️‍🗨️","E' proprio carino questo vue! 'easy-to-use'😀","Io avrei qualche dubbio sul sesso di Mario... 🤨"];
   return answers[randomPosition];
}
