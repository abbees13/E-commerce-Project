const box = document.querySelector(".box");
box.style.backgroundColor = "red";
const header = document.getElementById("color");

const btn = document.querySelector("#btn");
let x = 0;

function rgb() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  header.textContent = `Clicked ${x} rgb(${r}, ${g}, ${b})`;
}

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
                <h2 class = "card-header"></h2>
                <img src=""
                alt = ""/>
                <p>blah b,ah vlah</p>
            </div>`,
  );
}
inject("bumblebee");
inject("bumblebee");
inject("bumblebee");
inject("bumblebee");

btn.addEventListener("click", function () {
  x++;
  rgb();
});

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
