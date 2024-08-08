var inp = document.getElementById('inp');
var btn = document.getElementById('btn');
var list = document.getElementById('list');
btn.addEventListener('click', addTodo);

function addTodo() {
    if (inp.value.trim() !== "") {
        list.innerHTML += `<li><input type="text" value="${inp.value}" disabled/> 
                           <button onclick="delt(event)" class="material-symbols-outlined">
delete
</button>
                           </li>`;
        inp.value = "";
    }
}

function click(event) {
    if (event.keyCode === 13) {
        addTodo();
    }
}

function delt(event) {
    event.target.parentNode.remove();
    console.log(event.target.parentNode.childNodes[0].disabled = false);
    event.target.parentNode.childNodes[0].disabled = false;
    event.target.parentNode.childNodes[0].focus();
}



