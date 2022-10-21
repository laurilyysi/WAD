window.onload = function () {

    let address = "https://myjson.dit.upm.es/api/bins/h17w";

    fetch(address)
    .then(response => response.json())
    .then(json => {
        for (let obj of json) console.log(obj);
    })
    
}