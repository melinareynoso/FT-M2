const btnAmigos = document.querySelector("#boton");
const ulAmigos = document.querySelector("#lista");

function showFriends() {
    ulAmigos.innerHTML = "";
    fetch("http://localhost:5000/amigos")
        .then(res => res.json())
        .then(amigos => {
            for (let i = 0; i < amigos.length; i++) {
                // let li = document.createElement("li");
                let li = `<li>${amigos[i].name}<button onclick="deleteFriend(${amigos[i].id})">X</button></li>`;
                // li.innerText = amigos[i].name;
                ulAmigos.innerHTML = ulAmigos.innerHTML + li;
                // ulAmigos.append(li);
            }
        });
}

function deleteFriend(idFriend) {
    if (typeof idFriend !== "number") {
        idFriend= inputDelete.value;
        inputDelete.value = "";
    }
    fetch(`http://localhost:5000/amigos/${idFriend}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(() => {
            spanDelete.innerText = "Amigo borrado exitosamente";
            showFriends();
        });
}


btnAmigos.addEventListener("click", showFriends);

const inputAmigo = document.querySelector("#input");
const btnSearch = document.querySelector("#search");
const spanAmigo = document.querySelector("#amigo");

btnSearch.addEventListener("click", function () {
    let idAmigo = inputAmigo.value;
    inputAmigo.value = "";
    fetch(`http://localhost:5000/amigos/${idAmigo}`)
        .then(res => res.json())
        .then(amigo => {
            spanAmigo.innerText = amigo.name;
        });
});

const inputDelete = document.querySelector("#inputDelete");
const btnDelete = document.querySelector("#delete");
const spanDelete = document.querySelector("#sucess");

btnDelete.addEventListener("click", deleteFriend);