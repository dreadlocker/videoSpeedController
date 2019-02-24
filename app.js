window.onload = function () {
  const speedBarParent = document.getElementById("speed-wrapper");
  const speedBar = document.getElementById("speed-bar");
  const video = document.getElementsByTagName('video')[0];
  let isMouseDown = false;

  const mousedown = e => {
    isMouseDown = true;
    startX = e.pageX;
    scrollLeftVar = speedBarParent.scrollLeft;
  }

  function manageVideoSpeed(e) {
    // Uncomment the row below for mousedown + mousemove to work
    // if(!isMouseDown) return;

    e.stopPropagation();
    e.preventDefault();
    const y = e.pageY - this.offsetTop;
    const percentage = y / this.offsetHeight;
    const height = Math.round(percentage * 100) + "%";
    const min = 0.7;
    const max = 4;
    const playbackRate = percentage * (max - min) + min;

    speedBar.style.height = height;
    speedBar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
  }

  // Uncomment next 3 rows for mousedown + mousemove to work
  // speedBarParent.addEventListener("mouseleave", () => (isMouseDown = false));
  // speedBarParent.addEventListener("mouseup", () => (isMouseDown = false));
  // speedBarParent.addEventListener("mousedown", mousedown);
  speedBarParent.addEventListener("mousemove", manageVideoSpeed);
}