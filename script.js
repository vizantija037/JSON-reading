let content = [
  {
    id: "home",
    context: "brat moj",
    text: "Lorem Ipsum is simply dummy, Lorem Ipsum is simply dummy. PageMaker including versions of Lorem Ipsum.",
    country: "Serbia",
    flag: "img/serbia.jpg"
  

  },
  {
    id: "contact",
    context: "familija",
    text: "Lorem Ipsum is simply dum when aldus PageMaker including versions of Lorem Ipsum. aldus Pa aldus PageMaker including versions of Lorem IpsumgeMaker including versions of Lorem Ipsum",
    country: "Serbia",
    flag: "img/serbia.jpg"
  },
  {
    id: "something",
    context: "brat moj",
    text: "Lorem Ipsum is simply Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softwar",
    country: "Serbia",
    flag: "img/serbia.jpg"

  },
  {
    id: "about",
    context: "brat moj",
    text: "Lorem Ipsum is simply dummy text of the printing an text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently asdlkfjalsdkj laksdljgka lsdglaskdhglaksdhg are like Aldus PageMaker including versions of Lorem Ipsum.",
    country: "Serbia",
    flag: "img/serbia.jpg"
  },
  {
    id: "home 2",
    context: "familija",
    text: "Lorem Ipsum is simply dum when aldus PageMaker including versions of Lorem Ipsum. aldus Pa aldus PageMaker including versions of Lorem IpsumgeMaker including versions of Lorem Ipsum",
    country: "Sweden",
    flag: "img/sweden.jpg"
  },
  {
    id: "something -3",
    context: "brat moj",
    text: "Lorem Ipsum is simply Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softwar",
    country: "Hungary",
    flag: "img/hungary.jpg"
  },
  {
    id: "Senior",
    context: "familija",
    text: "Lorem Ipsum is simply dum when aldus PageMaker including versions of Lorem Ipsum. aldus Pa aldus PageMaker including versions of Lorem IpsumgeMaker including versions of Lorem Ipsum",
    country: "Swiss",
    flag: "img/swiss.jpg"
  },
  {
    id: "junior",
    context: "brat moj",
    text: "Lorem Ipsum is simply Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softwar",
    country: "Maskare",
    flag: "img/maskare.jpg"
  },
  {
    id: "about-2",
    context: "brat moj",
    text: "Lorem Ipsum is simply dummy text of the printing an text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently asdlkfjalsdkj laksdljgka lsdglaskdhglaksdhg are like Aldus PageMaker including versions of Lorem Ipsum.",
    country: "Serbia",
    flag: "img/serbia.jpg"
  },
  {
    id: "home 3",
    context: "familija",
    text: "Lorem Ipsum is simply dum when aldus PageMaker including versions of Lorem Ipsum. aldus Pa aldus PageMaker including versions of Lorem IpsumgeMaker including versions of Lorem Ipsum",
    country: "Sweden",
    flag: "img/sweden.jpg"
  },
  {
    id: "something -4",
    context: "brat moj",
    text: "Lorem Ipsum is simply Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softwar",
    country: "Hungary",
    flag: "img/hungary.jpg"
  },
  {
    id: "Senior1",
    context: "familija",
    text: "Lorem Ipsum is simply dum when aldus PageMaker including versions of Lorem Ipsum. aldus Pa aldus PageMaker including versions of Lorem IpsumgeMaker including versions of Lorem Ipsum",
    country: "Swiss",
    flag: "img/swiss.jpg"
  },
  {
    id: "junior3",
    context: "brat moj",
    text: "Lorem Ipsum is simply Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing softwar",
    country: "Maskare",
    flag: "img/maskare.jpg"
  }
];


const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btnAdd = document.querySelector(".btn-add");
const btnFind = document.querySelector(".btn-find");
const headerDiv = document.querySelector(".header");

btn1.addEventListener("click", showAll);

function showAll() {
  loaderVisible();
  setTimeout(loaderInvisible, 500)
        let output = "<h1>All data</h1>";
        content.forEach(element => {
            
            output += `
            <div class="card">
            <h3>Item - ${element.id}</h3>
            <h4>Group - ${element.context}</h4>
            <p><strong>Description</strong>:<br>${element.text}</p>
            <button class="details details-btn" data-id="${element.id}" id="details">Details</button>
            </div>
        `
        document.querySelector('.header').innerHTML = output;

    // /const btnClose = document.getElementById('details')
        
    // /console.log(btnClose)
        })

        const btnArr = document.querySelectorAll('.details-btn')
       
          btnArr.forEach((btn)=>{
            btn.addEventListener('click',showModal)
          })
        
          const close = document.getElementById('close');
          close.addEventListener('click', closeModal);
          

       /*btnArr.forEach((btn)=>{
         btn.addEventListener('click', showModal);
         
         const close = document.getElementById('close');
         close.addEventListener('click', closeModal);
         function closeModal(){
           let modalHolder = document.getElementById('modal-holder');
           modalHolder.style.display = 'none';
         }
       })*/


       console.log(btnArr)
}


const modal = document.getElementById('modal');
document.addEventListener('click', modalOut);

function modalOut (e) {
  let modalHolder = document.getElementById('modal-holder');
  if(e.target==modalHolder){
    return closeModal();
  }
}

function closeModal(){
  let modalHolder = document.getElementById('modal-holder');
  modalHolder.style.display = 'none';
}


function showModal(e){
  let modalHolder = document.getElementById('modal-holder');
  modalHolder.style.display = 'flex';
  const id = e.target.getAttribute('data-id')
  const obj = content.find(r => r.id === id)

  let output = `
 
            <h3 class="modal-title">Item - ${obj.id}</h3>
            <h4 class="modal-context"><strong>Group - ${obj.context}</h4></strong>
            <p class="modal-description"><strong>Description</strong>:${obj.text}</p>
            <h4 class="modal-context"><strong>Country - ${obj.country}</h4></strong>
            <img src="${obj.flag}" alt="Flag Image"/>


        `
        document.querySelector('.modal-body').innerHTML = output;

  if(!obj) {
    console.log('error')
  }

  console.log(obj)

   
}


const loader = document.querySelector('.loader-holder');

function loaderVisible(){
    loader.style.display = 'flex';
}
function loaderInvisible() {
  loader.style.display = 'none';
}
loaderInvisible();
btn2.addEventListener("click", showContext);

function showContext() {
    loaderVisible();
    setTimeout(loaderInvisible, 300)
    headerDiv.classList.remove('active');
            let output = "<h1>brat moj - context</h1>";
        content.forEach(element => {
            if(element.context==="brat moj") {           
            output += `
            <div class="card">
            <h3>Item - ${element.id}</h3>
            <h4>Group - ${element.context}</h4>
            <p><strong>Description</strong>:<br>${element.text}</p>
            <button class="details details-btn" data-id="${element.id}">Details</button>
            </div>
        `}
        }) 
          
        document.querySelector('.header').innerHTML = output;
        const btnArr = document.querySelectorAll('.details-btn')
       
        btnArr.forEach((btn)=>{
          btn.addEventListener('click',showModal)
        })

        const close = document.getElementById('close');
        close.addEventListener('click', closeModal);
    }
    



btn3.addEventListener("click", showContext2);

function showContext2(){
  loaderVisible();
    setTimeout(loaderInvisible, 300)
        let output = "<h1>familija - context</h1>";
        content.forEach(element => {
            if(element.context==="familija") {           
            output += `
            <div class="card">
            <h3>Item - ${element.id}</h3>
            <h4>Group - ${element.context}</h4>
            <p><strong>Description</strong>:<br>${element.text}</p>
            <button class="details details-btn" data-id="${element.id}">Details</button>
            </div>
        `}
        })
        document.querySelector('.header').innerHTML = output;
        const btnArr = document.querySelectorAll('.details-btn')
       
        btnArr.forEach((btn)=>{
          btn.addEventListener('click',showModal)
        })

        const close = document.getElementById('close');
        close.addEventListener('click', closeModal);
    }

btnAdd.addEventListener("click", showForm);

function showForm(){

    let output = `
    
        <form id="addItem">
        <input class="inputFind" type="text" id="itemTitle" name="itemTitle" placeholder="Insert Item Title">
        <input class="inputFind" type="text" id="itemContext" name="itemContext" placeholder="Insert Item Context">
        <textarea id="itemDescription" name="itemDescription" placeholder="Insert Item description"></textarea>
        <button type="submit" class="submitAdd" >Submit</button>
        </form>

    `;

    document.querySelector('.header').innerHTML = output;  


    const form = document.getElementById('addItem')
    form.addEventListener('submit',  (e) => {
        e.preventDefault();
        loaderVisible();
        setTimeout(loaderInvisible, 300)
        let output = `<h1>added item:</h1>`;
        
        const formData = new FormData(e.target);
        const entries = formData.entries();
        const data = Object.fromEntries(entries);

        output += `
            <div class="card">
            <h3>Item - ${data.itemTitle}</h3>
            <h4>Group - ${data.itemContext}</h4>
            <p><strong>Description</strong>:<br>${data.itemDescription}</p>
            
        `

        document.querySelector('.header').innerHTML = output;
        let newItem = {
            id: `${data.itemTitle}`,
            context: `${data.itemContext}`,
            text: `${data.itemDescription}`
        }
        console.log(newItem)
        content.push(newItem);
        })    
}
const inputField = document.getElementById('input-find');
inputField.addEventListener("keyup", findForm)
console.log(inputField)
//btnFind.addEventListener("click", findForm);



function findForm(e){
    e.preventDefault();
    
        let searchForm = document.querySelector('.searchForm');
        let searchText = document.querySelector('.inputText').value;
        let output = '';
        const regex = new RegExp(searchText,'ig')
        const arr =[...content].filter(item => regex.test(item.id))
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
                    <button class="details details-btn" data-id="${element.id}">Details</button>
                    </div>
                    `          
            })
        document.querySelector('.header').innerHTML = output;
        }
        document.querySelector('.header').innerHTML = output;
        const btnArr = document.querySelectorAll('.details-btn')
       
        btnArr.forEach((btn)=>{
          btn.addEventListener('click',showModal)
        })

        const close = document.getElementById('close');
        close.addEventListener('click', closeModal);
        
     }




  //const detailsBtn = '<button class="details">Details</button>';   



  


