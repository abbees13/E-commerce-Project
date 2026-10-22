/* pao pao ma te
泡泡玛特
    figurename: "SKULLPANDA/Hirono/Twinkle Twinkle/Dimoo/CHAKA",
    series: "",
    price: ,
    type: "Art Figure/Plush Pendant",

 */
const blindbox = [
  {
    figurename: "SKULLPANDA",
    series: "Where time Dwells",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "SKULLPANDA",
    series: "Petals in Four Acts",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "SKULLPANDA",
    series: "The Mirage",
    price: 21.99,
    type: "Art Figure",
  },
  {
    figurename: "SKULLPANDA",
    series: "You Found Me!",
    price: 29.99,
    type: "Plush Pendants",
  },
  {
    figurename: "SKULLPANDA",
    series: "L'impressionnisme",
    price: 29.99,
    type: "Plush Pendants",
  },
  {
    figurename: "SKULLPANDA",
    series: "SKULLPANDA × My Little Pony",
    price: 36.99,
    type: "Plush Pendants",
  },
  {
    figurename: "Hirono",
    series: "Tamed Wildgrass",
    price: 19.99,
    type: "Art Figures",
  },
  {
    figurename: "Hirono",
    series: "Echo",
    price: 19.99,
    type: "Art Figures",
  },
  {
    figurename: "Hirono",
    series: "The Other One",
    price: 19.99,
    type: "Art Figures",
  },
  {
    figurename: "Hirono",
    series: "Road Journal",
    price: 29.99,
    type: "Plush Pendant",
  },
  {
    figurename: "Hirono",
    series: "Mist-Walker",
    price: 29.99,
    type: "Plush Pendant",
  },
  {
    figurename: "Hirono",
    series: "After Dark",
    price: 29.99,
    type: "Plush Pendant",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Live the Ordinary",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Crush On You",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "We are Twinkle Twinkle",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Sweet Dreams Forecast",
    price: 19.99,
    type: "Plush Pendant",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Be a Little Star",
    price: 21.99,
    type: "Plush Pendant",
  },
  {
    figurename: "Twinkle Twinkle",
    series: "Savor the Moment",
    price: 17.99,
    type: "Plush Pendant",
  },
  {
    figurename: "Dimoo",
    series: "The Missing Day",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "Dimoo",
    series: "Shapes in Nature",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "Dimoo",
    series: "Moments in Bloom",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "Dimoo",
    series: "Memories We Hold",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "Dimoo",
    series: "Journal of New Life",
    price: 26.99,
    type: "Plush Pendant",
  },
  {
    figurename: "Dimoo",
    series: "The Secret Theatre Club",
    price: 29.99,
    type: "Plush Pendant",
  },
  {
    figurename: "CHAKA",
    series: "Stitch by Stitch",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "CHAKA",
    series: "Luminous Reverie",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "CHAKA",
    series: "Candlelit Wander",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "CHAKA",
    series: "Candle Whisper",
    price: 19.99,
    type: "Art Figure",
  },
  {
    figurename: "CHAKA",
    series: "Light Sprite",
    price: 19.99,
    type: "Art Figure",
  },
];

function filterCategory(cat) {
  let result = blindbox.filter((box) => box.type === cat);
  return result;
}
/* res = filterCategory("Art Figure");
console.log(res); */

/* const cart = [
  { Name: blindbox.name },
  { Series: blindbox.series },
  { Price: blindbox.price },
  { qty: 0 },
]; */

const cart = [];
function addToCart(item) {
  /* let qty = cart.push(blindbox);
  console.log(qty) */
  cart.push(item);
  total += blindbox.price;
}
console.log();
