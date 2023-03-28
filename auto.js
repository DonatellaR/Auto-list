let autoContainer= document.querySelector('.auto-container')

const auto = 
[
{
    nome: "e-tron GT",
    prezzo: "da 112.570,00€",
    autoimg: 'imgauto/etron.jpg',
    tipo: "audi",
    des: "Funzionalità e fascino: rappresenta alla perfezione il concetto di mobilità elettrica del futuro; con la gestione termica intelligente permette scatti in accelerazione veloci e ripetibili più volte di seguito"
},

{
    nome: "A1 Sportback",
    prezzo: "da 24.200,00€",
    autoimg: 'imgauto/A1Sportback.jpg',
    tipo: "audi",
    des: "Animo sportivo: la seconda generazione di A1 Sportback, la compatta Audi più apprezzata, caratterizzata da un design sportivo che fa subito colpo e da un’ampia flessibilità nelle opzioni di equipaggiamento"
},

{
    nome: "S3 Sedan TFSI",
    prezzo: "da 53.950,00€",
    autoimg: 'imgauto/sedan.jpg',
    tipo: "audi",
    des: "Decisa, sportiva, affascinante, fin dal primo sguardo: Audi S3 Sedan si presenta nel colore carrozzeria Rosso Tango metallizzato"
},

{
    nome: "Q3 Sportback",
    prezzo: "da 41.200,00€",
    autoimg: 'imgauto/q3.webp',
    tipo: "audi",
    des: "Il carisma di un SUV coupé: l’estetica e lo stile suggestivo da coupé incontrano la potenza e la versatilità tipiche di un SUV"
},

{
    nome: "Nuova Fiat 500",
    prezzo: "da 29.950€",

    tipo: "fiat",
    des: "Scegli la tua autonomia: grazie a due diversi tipi di batteria potrai svolgere i tuoi spostamenti quotidiani"
},

{
    nome: "Fiat Panda",
    prezzo: "da 15.600€",

    tipo: "fiat",
    des: "Sempre un classico: per un approccio più rispettoso alla mobilità la gamma motori di Fiat Panda annovera l'Hybrid 1.0 GSE 70CV, il 1.2 GPL 69CV. Scegli l’alimentazione e divertiti con la tua Nuova Panda"
},

{
    nome: "E-Ulysse Lounge",
    prezzo: "da 40.600€",

    tipo: "fiat",
    des: "Un salotto a 4 ruote: sedili anteriori a regolazione elettrica, riscaldati e massaggianti, tetto in vetro panoramico"
},

{
    nome: "Fiat Tipo",
    prezzo: "da 21.500€",

    tipo: "fiat",
    des: "Più sicurezza: i sistemi di guida autonoma ADAS ti permettono di guidare al massimo della sicurezza, godendoti al meglio ogni secondo a bordo"
},

{
    nome: "Avenger",
    prezzo: "da 24.400,00€",

    tipo: "jeep",
    des: "Ti cattura: l’estetica traduce la personalità di questa nuova Jeep: i profili della griglia a sette feritoie, il tetto nero a contrasto che sottolinea la sua presenza e i fari full-LED anteriori e posteriori rendono Avenger un'auto riconoscibile al primo sguardo"
},

{
    nome: "Renegade Limited",
    prezzo: "da 41.700€",

    tipo: "jeep",
    des: "La nuova frontiera del piacere di guida: l’allestimento Limited è dotato dei sistemi di guida quali Forward collision warning Plus e Adaptive cruise control, e dotazioni di stile come il volante in pelle e i cerchi in lega da 17’’"
},

{
    nome: "Compass Upland Cross",
    prezzo: "da 48.750€",

    tipo: "jeep",
    des: "Una nuova definizione di avventura: preparati a diventare un esploratore con Jeep Compass Upland Cross, una serie speciale progettata per farti compagnia in tutte le tue avventure fuori città"
},

{
    nome: "Wrangler 4xe Sahara",
    prezzo: "da 85.000,00€",

    tipo: "jeep",
    des: "L'icona si evolve: un altro livello di esperienza, grazie a Performance sensazionali e sicurezza su strada senza paragoni"
},

{
    nome: "C40 Recharge",
    prezzo: "da 53.800,00€",

    tipo: "volvo",
    des: "Un cuore puro in un corpo intrepido: più di quello che desideri, immergiti nelle funzioni smart e nella tecnologia avanzata"
},

{
    nome: "S90 Recharge",
    prezzo: "da 78.300,00€",

    tipo: "volvo",
    des: "Aumenta le aspettative: apriti alle novità e tieni sotto controllo ogni chilometro del tuo viaggio; è la nostra berlina Plug-in Hybrid di lusso con Google integrato"
},

{
    nome: "Model S",
    prezzo: "da 104.990€",

    tipo: "tesla",
    des: "L'accelerazione più rapida rispetto a qualsiasi altro veicolo in produzione: l'architettura aggiornata della batteria per tutti gli allestimenti della Model S consente scatti fulminei consecutivi senza degrado delle prestazioni"
},

{
    nome: "Model Y",
    prezzo: "da 46.990€",

    tipo: "tesla",
    des: "Progettata per la sicurezza: ha ottenuto 5 stelle nella valutazione di sicurezza Euro NCAP del 2022 e ha vinto il premio di miglior veicolo nella categoria dei fuoristrada di piccole dimensioni"
},

{
    nome: "Aventador",
    prezzo: "da 430.730€",

    tipo: "lamborghini",
    des: "Futuro e performance: progettata per andare oltre il concetto stesso di performance"
},

{
    nome: "Huracàn",
    prezzo: "da 198.972€",

    tipo: "lamborghini",
    des: "il compromesso ideale tra tecnologia e design: linee nette, aerodinamiche, progettate per fendere l'aria e domare la strada."
}

]

const autolist = auto.map(item => {
    const listitem= `<div class="col-md-6 autobox ${item.tipo}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.autoimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">
                <!-- title -->
                <span class="title">${item.nome}</span>
                <!-- price -->
                <span class="price">${item.prezzo}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>
    </div>
    </div>`;
    autoContainer.innerHTML += listitem;
    })

    const autobox = document.querySelectorAll('.autobox');
    const menu = document.querySelectorAll('button');

menu.forEach(m =>{  //la m viene usata per dire che c'è un elemento all'interno dell'html
  m.addEventListener('click', e =>{
    console.log(e.target.innerHTML)
    autobox.forEach(box =>{
        box.classList.add('d-none')
        if(e.target.innerHTML === 'Tutto')
        {
            box.classList.remove('d-none')
        }
        else if (e.target.innerHTML === 'Audi'){
            if(box.classList.contains('audi'))
            {
                box.classList.remove('d-none')
            }
        }

        else if (e.target.innerHTML === 'Fiat'){
            if(box.classList.contains('fiat'))
            {
                box.classList.remove('d-none')
            }
        }

        else if (e.target.innerHTML === 'Jeep'){
            if(box.classList.contains('jeep'))
            {
                box.classList.remove('d-none')
            }
        }
        else if (e.target.innerHTML === 'Volvo'){
            if(box.classList.contains('volvo'))
            {
                box.classList.remove('d-none')
            }
        }
        else if (e.target.innerHTML === 'Tesla'){
            if(box.classList.contains('tesla'))
            {
                box.classList.remove('d-none')
            }
        }

        else if (e.target.innerHTML === 'Lamborghini'){
            if(box.classList.contains('lamborghini'))
            {
                box.classList.remove('d-none')
            }
        }

       
    })
})

})