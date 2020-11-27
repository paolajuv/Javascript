function EventListener(){
    document.getElementById("numedes").addEventListener("click" , numerosdescendientes());
}

function numerosdescendientes(){
    var NumDes = document.getElementById("descendientes");

    NumDes.innerText = "";
    var x = 15;

    while(x >= 5){
        var Des = document.createElement("li")

        Des.setAttribute("class", "list-group-item");
        Des.innerText = x;

        NumDes.appendChild(Des);
        x--;
    }
}