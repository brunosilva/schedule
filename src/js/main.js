const users = [
    {name: 'Bruno Silva', login:'brunosilva', email: 'brs.rsilva@gmail.com', password: '123456'}
];

const operators = [
    {name: 'Bruno Silva', email: 'brs.rsilva@gmail.com'},
    {name: 'Roberto Silva', email: 'rs.rsilva@gmail.com'},
    {name: 'Bruno Roberto', email: 'bruno.robertos@gmail.com'}
];

var objMeeting = new Object();

function isMobile() {
    var device;
    if (screen.width < 640 || screen.height < 480) {
        device = "smartphone";
        return device;
    } else if (screen.width < 1024 || screen.height < 768) {
        device = "tablet";
        return device;
    } else {
        device = "desktop";
        return device;
    }
};

//function create element
function newElement(name, className, tipo){
    name = document.createElement(tipo);
    name.className = className;
    return name;
}

function openMenu() {
    var elementItem = document.querySelector("#listMenu");
    elementItem.classList.add("menu-opened");
}

function closeMenu() {
    var elementItem = document.querySelector("#listMenu");
    elementItem.classList.remove("menu-opened");
}

// window.addEventListener('load',() => {
//     if(localStorage.getItem('meeting')){
//         sayMyName()
//     }else{
//         whatsYourName()
//     }
// });

function whatsYourName(){
    document.body.innerHTML = '';
    // criando um input para cadastrar o nome;
    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'Digite seu nome';
    inputName.id = 'nome';
    document.body.appendChild(inputName);

    // criando saveButton
    const saveButton = document.createElement('button');
    saveButton.innerHTML = 'Salvar';
    document.body.appendChild(saveButton);
    
    // adicionando listener para salvar a informação
    saveButton.addEventListener('click', saveName);
}


function sayMyName(){
    document.body.innerHTML = '';
    // criando mensagem
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.innerText = 'Olá' + localStorage.getItem("name");
    
    // criando removeButton
    const removeButton = document.createElement('button');
    removeButton.innerHTML = 'Excluir';
    document.body.appendChild(removeButton);
    
    // adicionando o listener para remover informação
    removeButton.addEventListener('click',removeName);
}

function removeName(){
    if(localStorage.getItem('name')){
        localStorage.removeItem('name');
        whatsYourName()
    }	
}

function saveName(){
    var nome = document.getElementById('nome').value;
    localStorage.setItem('name', nome) 
    sayMyName();
} 