const buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
  button.addEventListener("click", () => pS(button.id));
});

document.addEventListener("keydown", (event) => {
  const namemap = {
    "a": "a", 
    "s": "s",
    "d": "d",
    "f": "y",
    "g": "s",
    "h": "a", 
    "j": "i"
  };
  const soundId = namemap[event.key];
  if (soundId) {
    pS(soundId);
    animation_sound(soundId);
  }
});

function pS(id) {
  const sound = new Audio(`sounds/${id}.wav`);
  sound.play();
}

function animation_sound(id) {
  const button = document.getElementById(id);
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}
