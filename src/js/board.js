function generateIdentification(){
    var elements = document.querySelectorAll('.itens .new-item');
    numElement = (elements.length + 1);
    return numElement;
}

function dragstart_handler(ev) {
    // Adiciona o id do elemento em questão ao objeto de transferência de dados (dataTransfer)
    ev.dataTransfer.setData("text/plain", ev.target.id);

    // Determina o efeito de arraste para:
    //copy -> indica que os dados sendo arrastados podem ser copiados da localização atual para a localização de destino (localização do drop). 
    //move -> indica que os dados sendo arrastados irá ser movido.
    //link -> indica que alguma forma de relação ou conexão será criada entre a localização de origem (source) e de destino (drop). 
    ev.dropEffect = "move";

    // Cria uma imagem e então a utiliza como a "drag image".
    // NOTA: mude "example.gif" como uma imagem existente, caso contrário
    // ela não será criada e a imagem padrão será utilizada como padrão.
    var img = new Image();
    img.src = 'assets/images/drag-and-drop.png';
    ev.dataTransfer.setDragImage(img, 10, 10);
}

function dragover_handler(ev) {
    ev.preventDefault();
    
    // Define o dropEffect para ser do tipo move
    ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {
    ev.preventDefault();

    // Pega o id do alvo e adiciona o elemento que foi movido para o DOM do alvo
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function newTask(){
    newItem = newElement("newItem","new-item","div");
    newItem.setAttribute("id", generateIdentification());
    newItem.innerHTML = "Elemento criado "+generateIdentification()
    newItem.setAttribute("draggable", true);
    newItem.setAttribute("ondragstart", "dragstart_handler(event);")
    boxTodo = document.getElementById("itensTodo");
    boxTodo.appendChild(newItem);
}


function enviar(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name.value != "" && email.value != "") {
        boxTodo = document.getElementById("itensTodo");
        newItem = newElement("newItem","new-item","div");
        newItem.setAttribute("id", generateIdentification());
        newItem.setAttribute("draggable", true);
        newItem.setAttribute("ondragstart", "dragstart_handler(event);")

        rowItem = newElement("rowItem","row-identity","div");

        spanName = newElement("spanName","span-name","span");
        spanName.innerHTML = name;
        spanEmail = newElement("spanEmail","span-email","span");
        spanEmail.innerHTML = email;

        rowItem.appendChild(spanName);
        rowItem.appendChild(spanEmail);
        newItem.appendChild(rowItem);
        boxTodo.appendChild(newItem);
    }

 }