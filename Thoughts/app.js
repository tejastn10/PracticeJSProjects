const thought = [
  {
    id: 1,
    name: "Susan Smith",
    personality: "Thinker",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Never Say NEVER!!, Never",
  },
  {
    id: 2,
    name: "Anna Johnson",
    personality: "Maker",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Go live your dream!",
  },
  {
    id: 3,
    name: "Peter Jones",
    personality: "Philosopher",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Today's a present, Enjoy it!",
  },
  {
    id: 4,
    name: "Bill Anderson",
    personality: "Nobody",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Nobody is Perfect",
  },
];

const img = document.getElementById("person-img");
const person = document.getElementById("person");
const personality = document.getElementById("personality");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surpriseBtn = document.querySelector(".surprise-btn");

// set deafult item
let currentThought = 0;

window.addEventListener("DOMContentLoaded", () => {
  show(currentThought);
});

const show = (person) => {
  const item = thought[person];
  img.src = item.img;
  person.textContent = item.name;
  personality.textContent = item.personality;
  info.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  currentThought++;
  if (currentThought > thought.length - 1) {
    currentThought = 0;
  }
  show(currentThought);
});

prevBtn.addEventListener("click", () => {
  currentThought--;
  if (currentThought < 0) {
    currentThought = thought.length - 1;
  }
  show(currentThought);
});

surpriseBtn.addEventListener("click", () => {
  currentThought = Math.floor(Math.random() * thought.length);
  show(currentThought);
});
