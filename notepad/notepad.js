function saveNote() {
  localStorage.setItem("noteContent", document.getElementById("notepad").value);
}

function loadNote() {
  try {
    const savedContent = localStorage.getItem("noteContent");
    if (savedContent !== null) {
      document.getElementById("notepad").value = savedContent;
    }
  } catch (error) {
    console.error("Error loading note:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadNote();
  document.getElementById("notepad").addEventListener("input", saveNote);
});