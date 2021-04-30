const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    let number = document.getElementById("number").value;
    let range = document.getElementById("range").value;

    if ((number <= 10 && number >= 1) && (range <= 10 && range >= 1)) {
        let tableJS = document.querySelector(".table-js");
        resultPage(event);
        operation(number, range, tableJS);
    } else {
        console.log("Bye");
        let error = document.getElementById("error-message");
        error.style.display = "block";
        error.innerHTML = "Introduce a number from 1 to 10";
        setTimeout(function () {
            error.style.display = "none"
        }, 3000);
    }
    event.preventDefault()
});

const operation = (number, range, tableJS) => {
    for (let i = 1; i <= range; i++) {
        const finalResult = i * number;
        let row = document.createElement("tr");
        tableJS.appendChild(row);
        let td = document.createElement("td");
        td.innerHTML = `${number} x ${i} = ${finalResult}`;
        row.appendChild(td);
    }
}

const resultPage = (event) => {
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "block";
    event.preventDefault()
}