const users = [
    {name: 'Bruno Silva', login:'brunosilva', email: 'brs.rsilva@gmail.com', password: '123456'}
];

const operators = [
    {name: 'Bruno Silva', email: 'brs.rsilva@gmail.com'},
    {name: 'Roberto Silva', email: 'rs.rsilva@gmail.com'},
    {name: 'Bruno Roberto', email: 'bruno.robertos@gmail.com'}
];


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