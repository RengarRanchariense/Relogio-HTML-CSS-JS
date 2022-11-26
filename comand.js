const hourHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

const setRotation = (element, rotationPorcentage) => {
  element.style.setProperty("--rotation", rotationPorcentage * 360);
};

const setClock = () => {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = currentDate.getMinutes() / 60;
  const hours = currentDate.getHours() / 12;

  setRotation(secondsHand, seconds);
  setRotation(minutesHand, minutes);
  setRotation(hourHand, hours);
};

setClock();

setInterval(setClock, 1000);
