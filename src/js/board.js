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

function getDateToday(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function formComplete(){
    if ((target.value != "" || target < getDateToday()) && description.value != ""){
        var buttonSend = document.getElementById("btnSendForm");
        buttonSend.setAttribute("data-dismiss","modal");
        return true;
    }else{
        spanMessage = document.getElementById("message");
        spanMessage.innerHTML = "Preencher todos os campos"
        spanMessage.className = "alert alert-danger"
        return false;
    }
}

function enviar(){
    if(formComplete() == true){

        var target = document.getElementById("target").value;
        var description = document.getElementById("description").value;
        var type = document.getElementById("inputState").value;
        var assign = document.getElementById("inputOperator").value;
    
        if ((target.value != "" || target < getDateToday()) && description.value != "") {
            boxTodo = document.getElementById("itensTodo");
            newItem = newElement("newItem","new-item","div");
            newItem.setAttribute("id", generateIdentification());
            newItem.setAttribute("draggable", true);
            newItem.setAttribute("ondragstart", "dragstart_handler(event);")
    
            rowStyle = newElement("rowStyle","row-style","div");
            rowItem = newElement("rowItem","row-identity","div");
    
            spanDate = newElement("spanDate","span-date","span");
            spanDate.innerHTML = target;
            assigned = newElement("assigned","assigned","p");
            assigned.innerHTML = "Assigned to " + assign;
    
            pDescription = newElement("pDescription","description","p");
            if(description.length > 125){
                pDescription.innerHTML = description.substring(0,125) + "...";
            }else{
                pDescription.innerHTML = description;
            }
    
            typeSelect = newElement("typeSelect","type","span"); 
            typeSelect.innerHTML = type;
    
            if(type == "task"){
                rowStyle.className = "row-style task-color";
            }else if(type == "bug"){
                rowStyle.className = "row-style bug-color";
            }if(type == "feature"){
                rowStyle.className = "row-style feature-color";
            }
    
            rowItem.appendChild(assigned);
            rowItem.appendChild(pDescription);
            rowStyle.appendChild(typeSelect);
            rowStyle.appendChild(spanDate);
            newItem.appendChild(rowStyle);
            newItem.appendChild(rowItem);
            boxTodo.appendChild(newItem);
        }
    }

 }

 function getAllOperator(){
    var assignedTo = document.getElementById("inputOperator");
    
    for(var i = 0; i < operators.length; i++){
        optionOp = newElement("optionOp","","option");
        optionOp.innerHTML = operators[i].name;
        assignedTo.appendChild(optionOp) ;
    }
    
 }

 window.onload = function(){
    var dateToday = document.getElementById("date-today");
    dateToday.innerHTML = getDateToday();

    for(var i = 0; i < users.length; i++){
        var user = users[i].email;
        var userAuthenticated = document.getElementById("userAuthenticated");
        userAuthenticated.innerHTML = user;
    }

    getAllOperator();
}