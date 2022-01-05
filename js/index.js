console.log("plik zewnętrzny działa");

document.getElementById("btn").addEventListener("click", example);

function example() {
fetch("/posts", {
    method:'GET'
}).then(function (response){
    if (response) {
        response.json().then( function(data){
    console.log(data)
    document.getElementById("danePobrane1").textContent=data[0].name;
    document.getElementById("danePobrane2").textContent=data[0].rank;
})
}
})
}
