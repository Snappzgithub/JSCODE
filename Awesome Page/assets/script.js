let addBtn = document.querySelector('#addBtn');
let boxContainer = document.querySelector('#boxContainer');
let counter = 0;

function addBox(){
    let bgUrl = prompt("Background URL:");
    let label = prompt("Enter label:");
    boxContainer.innerHTML += `
        <div class="boxContainer" style="
            background-image: url(${bgUrl});
            background-position: 50%;
        ">
            ${label}
        </div>
    `;
    counter++;
}
addBtn.addEventListener('click', addBox);