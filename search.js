function filterCommands(name){
    // remove all dots from name
    name = name.replace('.', '')
    var elements = document.getElementsByClassName("row")
    var elementsArray = Array.prototype.slice.call(elements)
    console.log(elementsArray)
    elementsArray.filter(element => {
        var elementName = element.cells[0].innerText
        if (elementName.indexOf(name)== -1){
            element.style.display = "none"
        }
    })
}