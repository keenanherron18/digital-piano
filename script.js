document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll("button[data-note]");

    keys.forEach((key) => {
        key.addEventListener("click", () => {
            const note = key.getAttribute("data-note");
            const audio = new Audio(`./sounds/${note}.mp3`);
            audio.play().catch(err => console.error("Audio error:", err));
        });
   });
});

const keyMap = {
  a: "C",
  w: "Db",
  s: "D",
  e: "Eb",
  d: "E",
  f: "F",
  t: "Gb",
  g: "G",
  y: "Ab",
  h: "A",
  u: "Bb",
  j: "B",
};

let currentOctave = 4;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && currentOctave < 8) {
    currentOctave++;
    console.log(`Octave: ${currentOctave}`);
    return; // Don't play a note on arrow press
  } else if (e.key === "ArrowDown" && currentOctave > 0) {
    currentOctave--;
    console.log(`Octave: ${currentOctave}`);
    return;
  }

  const noteName = keyMap[e.key.toLowerCase()];
  if (noteName) {
    const fullNote = noteName + currentOctave; // e.g. C4, Db4, etc.
    const audio = new Audio(`./sounds/${fullNote.toLowerCase()}.mp3`);
    audio.play();

    const button = document.querySelector(`[data-note="${fullNote.toLowerCase()}"]`);
    if (button) {
      button.classList.add("active");
      setTimeout(() => button.classList.remove("active"), 150);
    }
  }
});
