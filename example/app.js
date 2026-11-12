const blindbox = [
  {
    figurename: "SKULLPANDA",
    series: "Where time Dwells",
    price: 19.99,
    type: "Art Figure",
    img: "./img/time.avif",
  },
  {
    figurename: "SKULLPANDA",
    series: "Petals in Four Acts",
    price: 19.99,
    type: "Art Figure",
    img: "./img/petals.avif",
  },
  {
    figurename: "SKULLPANDA",
    series: "The Mirage",
    price: 21.99,
    type: "Art Figure",
    img: "./img/mirage.avif",
  },
  {
    figurename: "SKULLPANDA",
    series: "You Found Me!",
    price: 29.99,
    type: "Plush Pendants",
    img: "./img/found.avif",
  },
  {
    figurename: "SKULLPANDA",
    series: "L'impressionnisme",
    price: 29.99,
    type: "Plush Pendants",
    img: "./img/l'impressionisme.avif",
  },
  {
    figurename: "SKULLPANDA",
    series: "× My Little Pony",
    price: 36.99,
    type: "Plush Pendants",
    img: "./img/pony.avif",
  },
  {
    figurename: "Hirono",
    series: "Tamed Wildgrass",
    price: 19.99,
    type: "Art Figures",
    img: "./img/tamed.avif",
  },
  {
    figurename: "Hirono",
    series: "Echo",
    price: 19.99,
    type: "Art Figures",
    img: "./img/echo.avif",
  },
  {
    figurename: "Hirono",
    series: "The Other One",
    price: 19.99,
    type: "Art Figures",
    img: "./img/other.avif",
  },
  {
    figurename: "Hirono",
    series: "Road Journal",
    price: 29.99,
    type: "Plush Pendant",
    img: "./img/road.avif",
  },
  {
    figurename: "Hirono",
    series: "Mist-Walker",
    price: 29.99,
    type: "Plush Pendant",
    img: "./img/mistwalker.avif",
  },
  {
    figurename: "Hirono",
    series: "After Dark",
    price: 29.99,
    type: "Plush Pendant",
    img: "./img/dark.avif",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Live the Ordinary",
    price: 19.99,
    type: "Art Figure",
    img: "./img/ordinary.avif",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Crush On You",
    price: 19.99,
    type: "Art Figure",
    img: "./img/crush.avif",
  },
  {
    figurename: "We are Twinkle Twinkle",
    price: 19.99,
    type: "Art Figure",
    img: "./img/we.avif",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Sweet Dreams Forecast",
    price: 19.99,
    type: "Plush Pendant",
    img: "./img/dreams.avif",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Be a Little Star",
    price: 21.99,
    type: "Plush Pendant",
    img: "./img/little.png",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Savor the Moment",
    price: 17.99,
    type: "Plush Pendant",
    img: "./img/savour.avif",
  },
  {
    figurename: "Dimoo",
    series: "The Missing Day",
    price: 19.99,
    type: "Art Figure",
    img: "./img/missing.avif",
  },
  {
    figurename: "Dimoo",
    series: "Shapes in Nature",
    price: 19.99,
    type: "Art Figure",
    img: "./img/shapes.avif",
  },
  {
    figurename: "Dimoo",
    series: "Moments in Bloom",
    price: 19.99,
    type: "Art Figure",
    img: "./img/bloom.avif",
  },
  {
    figurename: "Dimoo",
    series: "Memories We Hold",
    price: 19.99,
    type: "Art Figure",
    img: "./img/memories.avif",
  },
  {
    figurename: "Dimoo",
    series: "Journal of New Life",
    price: 26.99,
    type: "Plush Pendant",
    img: "./img/journal.avif",
  },
  {
    figurename: "Dimoo",
    series: "The Secret Theatre Club",
    price: 29.99,
    type: "Plush Pendant",
    img: "./img/theatre.avif",
  },
  {
    figurename: "CHAKA",
    series: "Stitch by Stitch",
    price: 19.99,
    type: "Art Figure",
    img: "./img/stitch.avif",
  },
  {
    figurename: "CHAKA",
    series: "Luminous Reverie",
    price: 19.99,
    type: "Art Figure",
    img: "./img/luminous.avif",
  },
  {
    figurename: "CHAKA",
    series: "Candlelit Wander",
    price: 19.99,
    type: "Art Figure",
    img: "./img/candlelit.avif",
  },
  {
    figurename: "CHAKA",
    series: "Candle Whisper",
    price: 19.99,
    type: "Art Figure",
    img: "./img/whisper.avif",
  },
  {
    figurename: "CHAKA",
    series: "Light Sprite",
    price: 19.99,
    type: "Art Figure",
    img: "./img/light.png",
  },
];

function inject(blindbox) {
  blindbox.forEach((blindbox) => {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
      "beforeend",
      ` <div class = "card">
        <img src = ${blindbox.img}
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
