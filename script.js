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
        data.filter(item => {
            if(item.id!==`${searchText}`){
                output = `
                <h5>Searched item : <strong>${searchText}</strong></h5>
                <div class="card">
                <p>Sorry, there is no such item<p>
                `
            }  
            document.querySelector('.header').innerHTML = output; 
            console.log(output)
        })
        
        searchForm.reset();

        data.forEach(element => {
            let output =`<h5>Searched item : <strong>${searchText}</strong></h5>`; 
            if(element.id===`${searchText}` ) { 
                       
            output += `
            
            <div class="card">
            <h3>Item - ${element.id}</h3>
            <h4>Group - ${element.context}</h4>
            <p><strong>Description</strong>:<br>${element.text}</p>
            </div>
        `
        document.querySelector('.header').innerHTML = output;
        
        } 
        
        searchForm.reset();
        
        })
        
    })

}

