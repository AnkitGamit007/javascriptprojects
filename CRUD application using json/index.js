var selectedRow = null;

let p= fetch('http://localhost:3000/GET');
p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    x=response.json;
    console.log(x);
    return x;
})
.then((data)=>{console.log(data);return data});

function showAlert(message , className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");

    container.insertBefore(div , main);

    setTimeout(()=>{
        document.querySelector(".alert").remove();
    },3000);
}




function clearfields(){
    document.querySelector("#firstName").value="";
    document.querySelector("#lastName").value="";
    document.querySelector("#rollNo").value="";
}






function onSubmit(){


const firstname= document.getElementById("firstName").value;
const lastname= document.getElementById("lastName").value;
const rollno= document.getElementById("rollNo").value;

if(firstname == "" || lastname == "" || rollno == ""){
    showAlert("Please fill in all fields" , "danger");
}else{
    if(selectedRow == null){
        const list = document.querySelector("#student-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${firstname}</td>
            <td>${lastname}</td>
            <td>${rollno}</td>
            <td>
            <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            </td>
        `

        list.appendChild(row);
        selectedRow = null;
        showAlert("Student Added", "success");
    }else{
            selectedRow.children[0].textContent = firstname;
            selectedRow.children[1].textContent = lastname;
            selectedRow.children[2].textContent = rollno;
            showAlert("Student Info Updated", "info");
    }
    clearfields();
}
}




document.querySelector("#student-list").addEventListener("click", (event) =>{
    target = event.target;
    if(target.classList.contains("edit")){
       selectedRow = target.parentElement.parentElement;
       console.log(' selected row: ' + selectedRow);
       document.querySelector("#firstName").value = selectedRow.children[0].textContent;
       document.querySelector("#lastName").value = selectedRow.children[1].textContent;
       document.querySelector("#rollNo").value = selectedRow.children[2].textContent;
    }
});




document.querySelector("#student-list").addEventListener("click", (event) =>{
target = event.target;
// console.log(event.target.classList);
if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted" , "danger");
}
});