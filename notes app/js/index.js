const addbtn = document.getElementById("addbtn");
const main = document.getElementById("main");

addbtn.addEventListener("click", function () {
  addnote();
});

function savenotes() {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];

  notes.forEach((notes) => {
    if(notes.value!=""){
      data.push(notes.value);
    }
  });

  if(data.length === 0) {
    localStorage.removeItem("notes");
  }else{
    localStorage.setItem("notes", JSON.stringify(data));
  }
}


  const localnotes = JSON.parse(localStorage.getItem("notes"));

  if (localnotes === null) {
    addnote();
  } else {
    localnotes.forEach((localnotes) => {
      addnote(localnotes);
    });
  }



function addnote(text="") {
  const note = document.createElement("div");
  
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool" id="1"> 
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
    </div> 
    <textarea>${text}</textarea>
    `;
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    // savenotes();
  });

  note.querySelector(".save").addEventListener("click", function () {
    savenotes();
  });
  main.appendChild(note);
//   savenotes();
}

