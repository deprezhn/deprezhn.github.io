const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("active");
    });
});

const paragraphs = document.querySelectorAll(".typingtext p");

let delay = 0; 

paragraphs.forEach(p => {
    const text = p.textContent; 
    p.textContent = "";         
    const letters = text.split(""); 
    letters.forEach((letter, index) => {
        setTimeout(() => {
            p.textContent += letter;
        }, delay + index * 40);
    });

    delay += letters.length * 50 + 300;
});

const texts = [
  "She said, Careful, or you'll lose it",
  "But, girl, I'm only human",
  "And I know there's a blade where your heart is",
  "And you know how to use it",
  "And you can take my flesh if you want, girl",
  "But, baby, don't abuse it",
  "These voices in my head screaming, Run now",
  "I'm praying that they're human"
];

let currentText = 0;
let index = 0;
const typingSpeed = 55;
const pauseTime = 1100;

const typingDiv = document.getElementById("changingtext");

function type() {
  const text = texts[currentText];
  if (index < text.length) {
    typingDiv.textContent += text[index];
    index++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(() => {
      typingDiv.textContent = "";
      currentText = (currentText + 1) % texts.length;
      index = 0;
      type();
    }, pauseTime);
  }
}

type();