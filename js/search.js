const filterNames = () => {
    let search = document.getElementById("myInput").value;
    search = search.toLowerCase();
    let names = document.getElementsByClassName("names");

    for (let name of names) {
        if (!name.innerHTML.toLowerCase().includes(search)) {
            name.style.display = "none";
        } else {
            name.style.display = "block";
        }
    }
}