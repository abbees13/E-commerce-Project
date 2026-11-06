let item = [
  { name: Chaka, price: 29.99 },
  { name: dimoo, price: 29.99 },
  { name: hirorno, price: 29.99 },
  { name: america, price: 29.99 },
];

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card">
        <h2 class = "card-header"> ${item.name} </h2>
        <img src = "chaka popmart.webp"
        alt = "chaka figure"/>
         <p> ${item.price} </p>
    </div>`,
  );
}
