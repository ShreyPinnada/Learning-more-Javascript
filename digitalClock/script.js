function currentTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  document.getElementById(
    "clock"
  ).textContent = `${hour}:${minutes}:${seconds}`;
}

currentTime();

setInterval(currentTime, 1000);
