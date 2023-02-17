let addPoint = document.querySelector("#addPoint");
let subPoint = document.querySelector("#subPoint");
let reset = document.querySelector("#reset");
let point = document.querySelector("#point");

addPoint.addEventListener("click", addPoints);
subPoint.addEventListener("click", subPoints);
reset.addEventListener("click", resetPoints);
point.classList.add("highlight");

setTimeout(function() {
    point.classList.remove("highlight");
}, 1000);
function addPoints(){
    if (parseInt(point.innerHTML) < 10 ){
        point.innerHTML ++;
    };
}

function subPoints(){
    if (parseInt(point.innerHTML) > 0){
        point.innerHTML --;
    }
}

function resetPoints(){
    point.innerHTML = 0;
}
