var inputs;
var ma5zn = [];
if(localStorage.getItem("Data") != null){
    ma5zn = JSON.parse(localStorage.getItem("Data"));
    display()
}
function getData() {
    // add data
    inputs = {
        pName: document.getElementById("input1").value,
        pUrl: document.getElementById("input2").value
    }
    ma5zn.push(inputs);
    localStorage.setItem("Data" , JSON.stringify(ma5zn))
    // clear after submit
    clearData()
    // display
    display();
}

function clearData() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
}

function display() {
    var cartona = "";
    for (let i = 0; i < ma5zn.length; i++) {
        cartona += `<tr><td>` + i +`</td>
            <td id="Url"> `+ ma5zn[i].pName + `</td>
            <td>
                <button  class='btn btn-success' onclick="visitWebsite('${ma5zn[i].pUrl}') ">Visit</button>
                </td>
                <td><button class='btn btn-danger' onclick="deleteItem(`+i+`)">Delete</button></td>
            </tr>`
    }
    document.getElementById("tableContent").innerHTML = cartona;
}


function deleteItem(pIndex ){
    ma5zn.splice(pIndex , 1);
    localStorage.setItem("Data",JSON.stringify(ma5zn))
    display();
}

function visitWebsite(url){
  return  window.open(url)
}