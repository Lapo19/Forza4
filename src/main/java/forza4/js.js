const container = document.getElementById("container");

function tabella(){
    const table = document.createElement("table");
    numId = 1;
    risp = true;
    table.classList.add("table");
    for(let i=0; i<6; i++)
    {
        const tr = document.createElement("tr");
        for(let j=0; j<7; j++)
    {
        const td = document.createElement("td");
        td.classList.add("td");
        td.id=numId;
        td.addEventListener("click", (listener)=>{
            aggiornaTabella(listener.target.id);
        })
        numId++;
        tr.appendChild(td);

    }
    table.appendChild(tr);
    }
    container.appendChild(table);
}

function aggiornaTabella(id){
    const td = document.querySelector("td");
    if(id%2==1)
    {
        
    }
    else
    {

    }
    console.log("Cella " + id);
}

document.addEventListener('DOMContentLoaded',tabella);