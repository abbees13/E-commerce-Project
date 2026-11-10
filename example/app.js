const blindbox = [
  {
    figurename: "SKULLPANDA",
    series: "Where time Dwells",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "SKULLPANDA",
    series: "Petals in Four Acts",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "SKULLPANDA",
    series: "The Mirage",
    price: 21.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "SKULLPANDA",
    series: "You Found Me!",
    price: 29.99,
    type: "Plush Pendants",
    img: "",
  },
  {
    figurename: "SKULLPANDA",
    series: "L'impressionnisme",
    price: 29.99,
    type: "Plush Pendants",
    img: "",
  },
  {
    figurename: "SKULLPANDA",
    series: "× My Little Pony",
    price: 36.99,
    type: "Plush Pendants",
    img: "",
  },
  {
    figurename: "Hirono",
    series: "Tamed Wildgrass",
    price: 19.99,
    type: "Art Figures",
    img: "",
  },
  {
    figurename: "Hirono",
    series: "Echo",
    price: 19.99,
    type: "Art Figures",
    img: "",
  },
  {
    figurename: "Hirono",
    series: "The Other One",
    price: 19.99,
    type: "Art Figures",
    img: "",
  },
  {
    figurename: "Hirono",
    series: "Road Journal",
    price: 29.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "Hirono",
    series: "Mist-Walker",
    price: 29.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "Hirono",
    series: "After Dark",
    price: 29.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Live the Ordinary",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Crush On You",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "We are Twinkle Twinkle",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Sweet Dreams Forecast",
    price: 19.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Be a Little Star",
    price: 21.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Savor the Moment",
    price: 17.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "Dimoo",
    series: "The Missing Day",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "Dimoo",
    series: "Shapes in Nature",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "Dimoo",
    series: "Moments in Bloom",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "Dimoo",
    series: "Memories We Hold",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "Dimoo",
    series: "Journal of New Life",
    price: 26.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "Dimoo",
    series: "The Secret Theatre Club",
    price: 29.99,
    type: "Plush Pendant",
    img: "",
  },
  {
    figurename: "CHAKA",
    series: "Stitch by Stitch",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "CHAKA",
    series: "Luminous Reverie",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "CHAKA",
    series: "Candlelit Wander",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "CHAKA",
    series: "Candle Whisper",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
  {
    figurename: "CHAKA",
    series: "Light Sprite",
    price: 19.99,
    type: "Art Figure",
    img: "",
  },
];

function inject(blindbox) {
  blindbox.forEach((blindbox) => {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
      "beforeend",
      ` <div class = "card">
        <img src = "images/${blindbox.img}"
        alt = "figure"/>
        <h2 class = "card-header"> ${blindbox.figurename} ~ ${blindbox.series}</h2>
        <p> $${blindbox.price} </p>
        <button id = "btn">Add to Cart</button>
      </div>`,
    );
  });
}
inject(blindbox);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
  }),
);
