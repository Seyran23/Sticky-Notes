const createNoteBtn = document.querySelector(".create_note_btn");
const addNoteBtn = document.querySelector(".add_note_btn");
const closeNoteBtn = document.querySelector(".close_note_btn");
const addNoteContainer = document.querySelector(".add_note_container");
const notesContainer = document.querySelector(".notes_container");
const textarea = document.querySelector("textarea");

const colors = {
  1: "#f7c1d9",
  2: "#c7bbc9",
  3: "#f6977a",
  4: "#66b2b2",
  5: "#daa520",
  6: "#05a0d1",
  7: "#ffaa00",
  8: "#bc8864",
  9: "#c9c9ff",
  10: "#f65f31",
  11: "#b8d8be",
};
const numberSigns = {
  0: "+",
  1: "-",
};

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function addNote() {
  const text = textarea.value.trim();

  if (text !== "") {
    notesContainer.innerHTML += `<div class="note"><p>${text}</p></div>`;
  } else {
    alert("Please insert your note!!!");
  }
  textarea.value = "";
}

createNoteBtn.addEventListener("click", () => {
  createNoteBtn.classList.add("active");
  setTimeout(() => {
    createNoteBtn.classList.remove("active");
  }, 500);

  addNoteContainer.classList.remove("hidden");
});

addNoteBtn.addEventListener("click", () => {
  addNote();

  const notes = document.querySelectorAll(".note");

  if (notes.length > 0) {
    const lastNote = notes[notes.length - 1];

    let signKey = getRandomNumber(0, 1);
    let rotate = getRandomNumber(1, 7) + "deg";
    let colorNumber = getRandomNumber(1, 11);
    let translateX = getRandomNumber(1, 10) + "px";
    let translateY = getRandomNumber(1, 10) + "px";
  
    let color = colors[colorNumber];
    lastNote.style.backgroundColor = `${color}`;
  
    if (signKey === 1) {
      let sign = numberSigns[signKey];
      lastNote.style.transform = `rotate(${sign}${rotate}) translate(${translateX}, ${translateY})`;
    } else {
      lastNote.style.transform = `rotate(${rotate}) translate(${translateX}, ${translateY})`;
    }

    notes.forEach(element => {
      element.addEventListener("click", () => {
        element.remove();
      });
    });

  }

});

closeNoteBtn.addEventListener("click", () => {
  textarea.value = "";
  addNoteContainer.classList.add("hidden");
});
