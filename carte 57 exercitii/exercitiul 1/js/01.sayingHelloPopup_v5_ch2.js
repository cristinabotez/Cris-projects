function hello() {
    var name = document.getElementById("name").value;
    var div = document.createElement("div");
    var textNode = document.createTextNode(greeting);
    div.appendChild(textNode);
    document.body.appendChild(div);
}

function check() {
    var name = document.getElementById("name").value;
    if (name.length<=3){
        greeting = "Hello, " + name + ", nice to meet you... you have a short name";
        hello();
    }

    else if(name.length>=4 & name.length<=8){
        greeting="Hello, " + name + ", nice to meet you... medium name";
        hello();
    }

    else if(name.length>8){
        greeting="Hello, " + name + ", nice to meet you... long name";
        hello();
    }
}
