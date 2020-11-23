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

      mieClassi: "nonSelezionato",
      // sx
      contacts:[
         {
            nome: "Gianluigi",
            msg: "ok d'accor...",
            img:"img/avatar_3.jpg",
            chat: [
              {
                testo: "ciaoInviato",
                data: "23/11/2020 16:11:43",
              },
              {
                testo: "ciaoRicevuto",
                data: "23/11/2020 16:11:51",
              }
            ]
         },


         {
            nome: "Francesca",
            msg: "Va bene a d...",
            img:"img/avatar_4.jpg",
            chat: [
              {
                testo: "ciaoInviato",
                data: "23/11/2020 16:11:43",
              },
              {
                testo: "ciaoRicevuto",
                data: "23/11/2020 16:11:51",
              }
            ]
         },


         {
            nome: "Luigi",
            msg: "Luisa? baff...",
            img:"img/avatar_5.jpg",
            chat: [
              {
                testo: "ciaoInviato",
                data: "23/11/2020 16:11:43",
              },
              {
                testo: "ciaoRicevuto",
                data: "23/11/2020 16:11:51",
              }
            ]
         },


         {
            nome: "Mario",
            msg: "si ok ciao c...",
            img:"img/avatar_6.jpg",
            chat: [
              {
                testo: "ciaoInviato",
                data: "23/11/2020 16:11:43",
              },
              {
                testo: "ciaoRicevuto",
                data: "23/11/2020 16:11:51",
              }
            ]
         }
      ]
   },

   // methods: {
   //
   // }
});
