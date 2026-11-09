let item = [
  { name: "Chaka", price: 29.99 },
  { name: "dimoo", price: 29.99 },
  { name: "hirorno", price: 29.99 },
  { name: "america", price: 29.99 },
];

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
        <img src = "chaka popmart.webp"
        alt = "chaka figure"/>
        <h2 class = "card-header"></h2>
         <p></p>
         <button id = "btn">Add to Cart</button>
    </div>`,
  );
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
  }),
);
