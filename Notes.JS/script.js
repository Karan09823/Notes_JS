const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");

///
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let deleteNoteImg=document.createElement("img");

    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    deleteNoteImg.src="images/delete.png";

    notesContainer.appendChild(inputBox).appendChild(deleteNoteImg);
    saveNote();

});

//save note
function saveNote(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

//show note
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

///delete note
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveNote();
    }

    
})

//update note
notesContainer.addEventListener("keyup",function(e){
    if(e.target.classList.contains("input-box")){
        saveNote();
    }
})
