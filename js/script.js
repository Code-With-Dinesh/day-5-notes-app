let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    const textarea = document.createElement("textarea");
    textarea.value = note;
    textarea.oninput = (e) => {
      notes[index] = e.target.value;
      saveNotes();
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deleteNote(index);

    div.appendChild(textarea);
    div.appendChild(delBtn);
    container.appendChild(div);
  });
}

function addNote() {
  notes.push("");
  saveNotes();
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

// Initial load
renderNotes();
