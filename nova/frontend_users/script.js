let inputText = document.getElementById("inputText");
let lista = document.getElementById("lista");

function done(){
    let texTask = inputText.value.trim();
    if(texTask !==""){
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${texTask}</span>
            <button class="editB" onclick="editB(this)">Editar</button>
            <button class="removB" onclick="removB(this)">Apagar</button>
        `;

        lista.appendChild(li);
        inputText.value ="";
    }
}

function editB(button){
    let li = button.parentElement;
    let span = li.querySelector("span");
    let newtext = prompt("Editar: ", span.textContent);

    if(newtext !== null && newtext.trim() !==""){
        span.textContent = newtext.trim();
    }
}

function removB(button){
    let li = button.parentElement;
    lista.removeChild(li);
}

//FILTRANDO NOTAS
const filtro = document.getElementById("filtro");
const listas = document.getElementById("lista");
const itens = listas.getElementsByTagName("li");

filtro.addEventListener('input', filtrarItens);

function filtrarItens(){
    const filtre = filtro.value.toLowerCase();

    for(let i = 0; i < itens.length; i++){
        const item = itens[i];
        const textItem = item.textContent.toLocaleLowerCase();

        if(textItem.includes(filtre)){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }
    }
}
