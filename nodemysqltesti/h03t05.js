
function addList() {
    let listElem = document.getElementById("lista");
    let textElem = document.getElementById("tekstiloota");
    let li = document.createElement("li");
    li.addEventListener('click', removeItem)

    let text = document.createTextNode(textElem.value);
    li.appendChild(text);
    listElem.appendChild(li);
}

  function clearList() {
    $(document).ready(function() {
        let testi = $('#testi').text();
        
        console.log(testi);
    });
    let listElem = document.getElementById("lista");
    while (listElem.hasChildNodes()) {
      listElem.removeChild(listElem.firstChild);
    }
  }

  function removeItem(event) {
    let listElem = document.getElementById("lista");
    listElem.removeChild(event.target);
  }