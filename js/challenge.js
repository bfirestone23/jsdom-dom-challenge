const counter = document.getElementById("counter");
const count = [];

function incrementCounter() {
    counter.innerText++;
    count.push(counter.innerText);
};

function decrementCounter() {
    counter.innerText--;
    count.push(counter.innerText);
};

function setLastCount() {
    counter.innerText = count.slice(-1)[0];
};

document.addEventListener("DOMContentLoaded", () => {
    counting = setInterval(incrementCounter, 1000);
});

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");

const controls = [minus, plus, heart];

minus.addEventListener("click", decrementCounter);
plus.addEventListener("click", incrementCounter);

const pauseCount = pause.addEventListener("click", () => {
    if (pause.innerText == "pause") {
        clearInterval(counting);
        setLastCount();
        controls.forEach((control) => {
            control.disabled = true;
        });
        pause.innerText = "resume";
    } else {
        counting = setInterval(incrementCounter, 1000);
        controls.forEach((control) => {
            control.disabled = false;
        });
        pause.innerText = "pause";
    };
});

const heartCount = heart.addEventListener("click", (e) => {
    const likesUl = document.querySelector("ul.likes");
    const likesLi = document.createElement("li");
    likesLi.innerText = `Liked ${count.slice(-1)[0]} ❤️ `;
    likesUl.append(likesLi);
    e.target.reset;
});

const commentForm = document.getElementById("comment-form");

const addComment = commentForm.addEventListener("submit", () => {
    
})