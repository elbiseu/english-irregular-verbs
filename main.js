let infinitive = [
  "be",
  "beat",
  "become",
  "begin",
  "bend",
  "bet",
  "bite",
  "blow",
  "break",
  "bring",
  "broadcast",
  "build",
  "burst",
  "buy",
  "catch",
  "choose",
  "come",
  "cost",
  "creep",
  "cut",
  "deal",
  "dig",
  "do",
  "draw",
  "drink",
  "drive",
  "eat",
  "fall",
  "feed",
  "feel",
  "fight",
  "find",
  "flee",
  "fly",
  "forbid",
  "forget",
  "forgive",
  "freeze",
  "get",
  "give",
  "go",
  "grow",
  "hang",
  "have",
  "hear",
  "hide",
  "hit",
  "hold",
  "hurt",
  "keep",
  "kneel",
  "know",
  "lay",
  "lead",
  "leave",
  "lend",
  "let",
  "lie",
  "light",
  "lose",
  "make",
  "mean",
  "meet",
  "pay",
  "put",
  "read",
  "ride",
  "ring",
  "rise",
  "run",
  "say",
  "see",
  "seek",
  "sell",
  "send",
  "set",
  "sew",
  "shake",
  "shine",
  "shoot",
  "show",
  "shrink",
  "shut",
  "sing",
  "sink",
  "sit",
  "sleep",
  "slide",
  "speak",
  "spend",
  "spit",
  "split",
  "spread",
  "spring",
  "stand",
  "steal",
  "stick",
  "sting",
  "stink",
  "strike",
  "swear",
  "sweep",
  "swim",
  "swing",
  "take",
  "teach",
  "tear",
  "tell",
  "think",
  "throw",
  "understand",
  "wake",
  "wear",
  "weep",
  "win",
  "write",
];

let pastSimple = [
  "was/were",
  "beat",
  "became",
  "began",
  "bent",
  "bet",
  "bit",
  "blew",
  "broke",
  "brought",
  "broadcast",
  "built",
  "burst",
  "bought",
  "caught",
  "chose",
  "came",
  "cost",
  "crept",
  "cut",
  "dealt",
  "dug",
  "did",
  "drew",
  "drank",
  "drove",
  "ate",
  "fell",
  "fed",
  "felt",
  "fought",
  "found",
  "fled",
  "flew",
  "forbade",
  "forgot",
  "forgave",
  "froze",
  "got",
  "gave",
  "went",
  "grew",
  "hung",
  "had",
  "heard",
  "hid",
  "hit",
  "held",
  "hurt",
  "kept",
  "knelt",
  "knew",
  "laid",
  "led",
  "left",
  "lent",
  "let",
  "lay",
  "lit",
  "lost",
  "made",
  "meant",
  "met",
  "paid",
  "put",
  "read",
  "rode",
  "rang",
  "rose",
  "ran",
  "said",
  "saw",
  "sought",
  "sold",
  "sent",
  "set",
  "sewed",
  "shook",
  "shone",
  "shot",
  "showed",
  "shrank",
  "shut",
  "sang",
  "sank",
  "sat",
  "slept",
  "slid",
  "spoke",
  "spent",
  "spat",
  "split",
  "spread",
  "sprang",
  "stood",
  "stole",
  "stuck",
  "stung",
  "stank",
  "struck",
  "swore",
  "swept",
  "swam",
  "swung",
  "took",
  "taught",
  "tore",
  "told",
  "thought",
  "threw",
  "understood",
  "woke",
  "wore",
  "wept",
  "won",
  "wrote",
];

let pastParticiple = [
  "been",
  "beaten",
  "become",
  "begun",
  "bent",
  "bet",
  "bitten",
  "blown",
  "broken",
  "brought",
  "broadcast",
  "built",
  "burst",
  "bought",
  "caught",
  "chosen",
  "come",
  "cost",
  "crept",
  "cut",
  "dealt",
  "dug",
  "done",
  "drawn",
  "drunk",
  "driven",
  "eaten",
  "fallen",
  "fed",
  "felt",
  "fought",
  "found",
  "fled",
  "flown",
  "forbidden",
  "forgotten",
  "forgiven",
  "frozen",
  "got/gotten",
  "given",
  "gone",
  "grown",
  "hung",
  "had",
  "heard",
  "hidden",
  "hit",
  "held",
  "hurt",
  "kept",
  "knelt",
  "known",
  "laid",
  "led",
  "left",
  "lent",
  "let",
  "lain",
  "lit",
  "lost",
  "made",
  "meant",
  "met",
  "paid",
  "put",
  "read",
  "ridden",
  "rung",
  "risen",
  "run",
  "said",
  "seen",
  "sought",
  "sold",
  "sent",
  "set",
  "sewn/sewed",
  "shaken",
  "shone",
  "shot",
  "shown/showed",
  "shrunk",
  "shut",
  "sung",
  "sunk",
  "sat",
  "slept",
  "slid",
  "spoken",
  "spent",
  "spat",
  "split",
  "spread",
  "sprung",
  "stood",
  "stolen",
  "stuck",
  "stung",
  "stunk",
  "struck",
  "sworn",
  "swept",
  "swum",
  "swung",
  "taken",
  "taught",
  "torn",
  "told",
  "thought",
  "thrown",
  "understood",
  "woken",
  "worn",
  "wept",
  "won",
  "written",
];

let irregularVerbs = infinitive.concat(pastSimple);
irregularVerbs = irregularVerbs.concat(pastParticiple);
let identifiers = [];
console.log(identifiers.length);

while (identifiers.length !== irregularVerbs.length) {
  const random = Math.random() * irregularVerbs.length;
  const floor = Math.floor(random);
  if (!identifiers.includes(floor)) {
    identifiers.push(floor);
  }
}

for (let identifier of identifiers) {
  let irregularVerb = irregularVerbs[identifier];
  const flashcard = document.createElement("div");
  flashcard.id = identifier;
  flashcard.className = "flashcard";
  flashcard.draggable = true;
  flashcard.innerText = irregularVerb;
  flashcard.classifications = [];
  flashcard.classifications.push("flashcard");
  if (infinitive.includes(irregularVerb)) {
    flashcard.classifications.push("infinitive");
  }
  if (pastSimple.includes(irregularVerb)) {
    flashcard.classifications.push("past_simple");
  }
  if (pastParticiple.includes(irregularVerb)) {
    flashcard.classifications.push("past_participle");
  }
  flashcard.onclick = function () {
    const src = "./resources/" + irregularVerb + ".wav";
    const pronunciation = new Audio(src);
    const promise = pronunciation.play();
    if (promise !== null) {
      promise.then(function () {
        console.log("Automatic playback started!");
      }).catch(function (error) {
        console.log("Automatic playback failed!");
        console.log(error);
      });
    }
  };
  flashcard.ondragstart = function (event) {
    event.dataTransfer.setData("text/plain", this.id);
  };
  const element = document.getElementById("flashcard_container");
  element.appendChild(flashcard);
}

for (let classification of ["flashcard", "infinitive", "past_simple", "past_participle"]) {
  const id = classification + "_container";
  const container = document.getElementById(id);
  container.ondragend = function () {
    container.style.removeProperty("background-color");
  };
  container.ondragleave = function () {
    container.style.removeProperty("background-color");
  };
  container.ondragover = function (event) {
    event.preventDefault();
    container.style.backgroundColor = "lightgreen";
  };
  container.ondrop = function (event) {
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);
    const target = event.target;
    if (target.className !== "flashcard") {
      if (element.classifications.includes(classification)) {
        element.style.backgroundColor = "white";
        element.style.borderColor = "black";
        element.style.color = "black";
      } else {
        element.style.backgroundColor = "red";
        element.style.borderColor = "red";
        element.style.color = "white";
      }
      target.appendChild(element);
      container.style.removeProperty("background-color");
    }
  };
}
