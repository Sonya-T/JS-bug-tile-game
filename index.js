const tileArray = [
  {
    name: "bee",
    img: "bug-tiles/JS-game-bee.png",
  },
  {
    name: "dragonfly",
    img: "bug-tiles/JS-game-dragonfly.png",
  },
  {
    name: "snail",
    img: "bug-tiles/JS-game-snail2.png",
  },
  {
    name: "ladybug",
    img: "bug-tiles/JS-game-ladybug.png",
  },
  {
    name: "moth1",
    img: "bug-tiles/JS-game-moth1.png",
  },
  {
    name: "moth2",
    img: "bug-tiles/JS-game-moth2.png",
  },
  {
    name: "butterfly1",
    img: "bug-tiles/JS-game-butterfly1.png",
  },
  {
    name: "butterfly2",
    img: "bug-tiles/JS-game-butterfly2.png",
  },
  {
    name: "bee",
    img: "bug-tiles/JS-game-bee.png",
  },
  {
    name: "dragonfly",
    img: "bug-tiles/JS-game-dragonfly.png",
  },
  {
    name: "snail",
    img: "bug-tiles/JS-game-snail2.png",
  },
  {
    name: "ladybug",
    img: "bug-tiles/JS-game-ladybug.png",
  },
  {
    name: "moth1",
    img: "bug-tiles/JS-game-moth1.png",
  },
  {
    name: "moth2",
    img: "bug-tiles/JS-game-moth2.png",
  },
  {
    name: "butterfly1",
    img: "bug-tiles/JS-game-butterfly1.png",
  },
  {
    name: "butterfly2",
    img: "bug-tiles/JS-game-butterfly2.png",
  },
];

// Tile Grid Display
tileArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const scoreDisplay = document.querySelector("#score");
const resultDisplay = document.querySelector("#result");
let tilesChosen = [];
let tilesChosenIds = [];
const tilesWon = [];

function createBoard() {
  for (let i = 0; i < tileArray.length; i++) {
    const tile = document.createElement("img");
    tile.setAttribute("src", "bug-tiles/JS-game-caterpillarblacktile.png");
    tile.setAttribute("data-id", i);
    tile.addEventListener("click", flipTile);
    gridDisplay.appendChild(tile);
  }
}
createBoard();

// Check for a match
function checkMatch() {
  const tiles = document.querySelectorAll("#grid img");
  const optionOneId = tilesChosenIds[0];
  const optionTwoId = tilesChosenIds[1];
  console.log(tiles);
  console.log("check for match");
  // Same tile click
  if (optionOneId == optionTwoId) {
    tiles[optionOneId].setAttribute(
      "src",
      "bug-tiles/JS-game-caterpillarblacktile.png"
    );
    tiles[optionTwoId].setAttribute(
      "src",
      "bug-tiles/JS-game-caterpillarblacktile.png"
    );
    alert("You clicked the same tile!");
  }
  // Match event
  if (tilesChosen[0] == tilesChosen[1]) {
    // alert("It's a match!");
    // Keep match tiles flipped up
    // tiles[optionOneId].setAttribute("src", "bug-tiles/white-image.png");
    // tiles[optionTwoId].setAttribute("src", "bug-tiles/white-image.png");
    tiles[optionOneId].removeEventListener("click", flipTile);
    tiles[optionTwoId].removeEventListener("click", flipTile);
    tilesWon.push(tilesChosen);
  }
  // Not a match
  else {
    tiles[optionOneId].setAttribute(
      "src",
      "bug-tiles/JS-game-caterpillarblacktile.png"
    );
    tiles[optionTwoId].setAttribute(
      "src",
      "bug-tiles/JS-game-caterpillarblacktile.png"
    );
    // alert("Not a match :(")
  }
  // innerHTML can also be textContent
  scoreDisplay.innerHTML = tilesWon.length;
  tilesChosen = [];
  tilesChosenIds = [];

  if (tilesWon.length == tileArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations! You matched all the bugs! 🐝";
  }
}

// Tile click to give name
function flipTile() {
  // console.log(tileArray);
  const tileId = this.getAttribute("data-id");
  // console.log(tileArray[tileId].name);
  tilesChosen.push(tileArray[tileId].name);
  tilesChosenIds.push(tileId);
  console.log(tilesChosen);
  console.log(tilesChosenIds);
  // console.log("clicked", tileId);
  // console.log(tilesChosen);
  this.setAttribute("src", tileArray[tileId].img);
  if (tilesChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
