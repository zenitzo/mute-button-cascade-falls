let count = 0;
let thisCount = 0;
let isMuted = false;

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
  var muteButton = document.getElementById("muteButton");
  var mutedIcon = document.getElementById("mutedIcon");
  var unmutedIcon = document.getElementById("unmutedIcon");

  if (audio.muted) {
    audio.muted = false;
    muteButton.classList.remove("muted");
    mutedIcon.style.display = "none";
    unmutedIcon.style.display = "inline-block";
  } else {
    audio.muted = true;
    muteButton.classList.add("muted");
    unmutedIcon.style.display = "none";
    mutedIcon.style.display = "inline-block";
  }
}

// Update SVG icons initially based on the muted state of the audio
var audio = document.getElementById("audio");
var mutedIcon = document.getElementById("mutedIcon");
var unmutedIcon = document.getElementById("unmutedIcon");

if (audio.muted) {
  mutedIcon.style.display = "inline-block";
  unmutedIcon.style.display = "none";
} else {
  mutedIcon.style.display = "none";
  unmutedIcon.style.display = "inline-block";
}
