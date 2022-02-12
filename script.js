const btn1 =document.querySelector('.btn1');
const btn2 =document.querySelector('.btn2');
const btn3 =document.querySelector('.btn3');
const btnAdd =document.querySelector('.btn-add');
const btnFind =document.querySelector('.btn-find');
const headerDiv = document.querySelector('.header')


btn1.addEventListener('click', showAll);

function showAll(){
    
    fetch('content.json')
    .then(response=>response.json())
    .then(data=>{
        
        let output = "<h1>All data</h1>";
        data.forEach(element => {
            
            output += `
            <div class="card">
            <h3>Item - ${element.id}</h3>
            <h4>Group - ${element.context}</h4>
            <p><strong>Description</strong>:<br>${element.text}</p>
            </div>
        `
        })
        document.querySelector('.header').innerHTML = output;
        
    })
   
}


btn2.addEventListener('click', showContext);

function showContext(){
    headerDiv.classList.remove('active');
    fetch('content.json')
    .then(response=>response.json())
    .then(data=>{
        
        let output = "<h1>brat moj - context</h1>";
        data.forEach(element => {
            if(element.context==="brat moj") {           
            output += `
            <div class="card">
            <h3>Item - ${element.id}</h3>
            <h4>Group - ${element.context}</h4>
            <p><strong>Description</strong>:<br>${element.text}</p>
            </div>
        `}
        }) 
          
        document.querySelector('.header').innerHTML = output;
    })
}

btn3.addEventListener('click', showContext2);

function showContext2(){
    fetch('content.json')
    .then(response=>response.json())
    .then(data=>{

        let output = "<h1>familija - context</h1>";
        data.forEach(element => {
            if(element.context==="familija") {           
            output += `
            <div class="card">
            <h3>Item - ${element.id}</h3>
            <h4>Group - ${element.context}</h4>
            <p><strong>Description</strong>:<br>${element.text}</p>
            </div>
        `}
        })
        document.querySelector('.header').innerHTML = output;
    })
}

btnAdd.addEventListener('click', showForm);

function showForm(){
    let output = "<h3>In preparation ....</h3>";
    document.querySelector('.header').innerHTML = output;

}

btnFind.addEventListener('click', findForm);

function findForm(e){
    e.preventDefault();
    fetch('content.json')
    .then(response=>response.json())
    .then(data=>{
        let searchForm = document.querySelector('.searchForm');
        let searchText = document.querySelector('.inputText').value;
        let output = '';
        /** ovo je striktno taj id 
         *  evo kako trazis like STANI MALO DA VIDIM OVO DA LI RADI 
         * ae
         */
       // const arr =[...data].filter(item => item.id===`${searchText}`)
         /**
          * regex znas staje vrovatno
          * da 
          * ali mi je ovaj nacin nepoznat
          * ???
          * 
          * evo sad ce da saznas
          * Fora je sto napravis regex koji ima flags, i - insensitive ( moze brate i velika i mala slova) 
          *  g - global All matches ( bilo gde da se nalazi )
          *  regex.test() - funkcija koja sluzi da proveri regex koji si napisao i string koji prosledjujes da li se podudara ( da li je ispravno ako jeste)
          * vraca ture ili false
          * 
          * Poso su boolean return vrednosti a filter radi na princim true/ false on filtrira niz i vrati ti tvoje potrebne podatke
          * 
          * jasno malo sada?
          * da jasno MALO sada 
          * zatecen sam kako je nadrkana ova fora
          * 
          * e sad LJUBICSTA MOLIM D:
          * 50 KINTE
          * MOZE
          * MA ZEZAM SE NIKAD OVO JE PRIJATELJSKI BRATSKI FAMILIJOOOAUUU BRATE 
          * NAUCI NESTO ONOG MALOG 
          * EL ZNA ON OVE NADRKANE FORE
          * 
          * PA NZ OVO NIJE PROBLEM SAMO AKO HOCES DA UCIS IMAS BRATE MNOGO FORICA KOJE SU PROSTE A MNOGO BOLESNO RADE
          * 
          * MALISA NZ STA SVE ZNA
          * ZNACI NIJE SVESTAN SVOJE NESVESTI
          * 
          * I NIJE SVESTAN KOLIKO MOZE DA NAUCI OD LJUDI IZ NJEGOVOG OKRUZENJA A I TI SAMO NASTAVI DOBAR SI !!!!!!!!!!!!!!!!!!!!!!!
          * BRT ocu< samo da ne batalim< moram da ga izgruvam nema mi druge 
          * bolje nego drvna industrija
          * 
        * KULTURINJE i lepse i bolje i isplativije i interesantno ( a ponekad i bolesno - malo vise )
        * ahaha
        * zavisi od naljucenog kita koji salje radio talsne signale
        * 
        * vidi ovo ja sam sa malisom pricao do pola 1 od pola 1 do malo pre sam iscukao 3 generisanja dinamickih file-ova u csv xD
        * e sad odoh da spavam 
        * 
        * I tebi zelim laku noc jer ti deca ustaju rano a ti neces da budes ok ako ne spavasoooo da
        * a zena radi od sobajle
        * nadrljao sam sutra
        * 
        * ajde senioritetski
        * fala ti mnogo
        * sada sve radi 
        * sutra pravim dodavanje novog ITEM-a
        * i to je mini APP
        * 
        * ajde laku noc
        * 
        * laku noc brate Drzim fige ide tebi ovo, mocices da izguras, jeste tesko, ali moras da se potrudis
        * ajde pozzzzz
        * 
          */
        const regex = new RegExp(searchText,'ig')
        const arr =[...data].filter(item => regex.test(item.id))
        if(!arr.length) {
             output = `
                <h5>Searched item : <strong>${searchText}</strong></h5>
                <div class="card">
                <p>Sorry, there is no such item<p>
                `
                document.querySelector('.header').innerHTML = output;
        } else {
            output =`<h5>Searched item : <strong>${searchText}</strong></h5>`;
            arr.forEach(element => {
                output += `
                    <div class="card">
                    <h3>Item - ${element.id}</h3>
                    <h4>Group - ${element.context}</h4>
                    <p><strong>Description</strong>:<br>${element.text}</p>
                    </div>
                    `          
            })
        document.querySelector('.header').innerHTML = output;
        }
        searchForm.reset()
     })}
