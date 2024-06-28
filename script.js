let $ = document;
let input = document.querySelector("input");
let button = document.querySelector("button");
let audio = document.querySelector(".audio");
let imgPronounce = document.querySelector(".content__pronounce");
let description = document.querySelector(".content__descrtiption");
let content = document.querySelector('.content')
function loadData() {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    .then((res) => {
      if (res.status == "200") {
        input.value = "";
        content.style.height = content.scrollHeight + 'px'
      }
      return res.json();
    })
    .then((item) => {
      console.log(item);
      $.querySelector(".content__word").innerHTML = item[0].word;
      $.querySelector(
        ".content__howPronounce"
      ).innerHTML = `${item[0].meanings[0].partOfSpeech} ${item[0].phonetic}`;
      audio.setAttribute("src", item[0].phonetics[0].audio);
      imgPronounce.addEventListener("click", () => {
        audio.play();
      });
      description.innerHTML = item[0].meanings[0].definitions[0].definition;
    })
    .catch(() => {
      console.log("hahahan :*");
    });

  function resBad() {
    alert("res is bad or ...");
  }
}

button.addEventListener("click", () => {
  if (input.value && input.value.trim() && isNaN(input.value)) {
    loadData();
  } else {
    alert("pls Enter something🙏 !dont use Number");
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("en");
    if (input.value && input.value.trim() && isNaN(input.value)) {
      loadData();
    } else {
      alert("pls Enter something🙏 !dont use Number");
    }
  }
});
