let count = 0;
let thisCount = 0;

const handlers = {
  startInitFunctionOrder(data) {
    count = data.count;
  },

  initFunctionInvoking(data) {
    document.querySelector(".thingy").style.left = "0%";
    document.querySelector(".thingy").style.width =
      (data.idx / count) * 100 + "%";
  },

  startDataFileEntries(data) {
    count = data.count;
  },

  performMapLoadFunction(data) {
    ++thisCount;

    document.querySelector(".thingy").style.left = "0%";
    document.querySelector(".thingy").style.width =
      (thisCount / count) * 100 + "%";
  },
};

window.addEventListener("message", function (e) {
  (handlers[e.data.eventName] || function () {})(e.data);
});

// TESTING

function toggleMute() {
  var audio = document.getElementById("audio");
  var speakerIcons = document.getElementsByClassName("speakerIcon");

  if (audio.muted) {
    audio.muted = false;
    speakerIcons[0].classList.remove("muted");
    speakerIcons[1].classList.add("muted");
  } else {
    audio.muted = true;
    speakerIcons[0].classList.add("muted");
    speakerIcons[1].classList.remove("muted");
  }
}

function toggleSVGs() {
  var svg1 = document.getElementById("svg1");
  var svg2 = document.getElementById("svg2");

  if (svg2.style.display === "none") {
    svg2.style.display = "inline-block";
    svg1.style.display = "none";
  } else {
    svg2.style.display = "none";
    svg1.style.display = "inline-block";
  }
}
