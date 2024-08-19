const $loveMe = $(".loveMe");
const $times = $("#times");

let clickTime = 0;
let timesClicked = 0;

$loveMe.on("click", function (e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {
  const $heart = $("<i></i>");
  $heart.addClass("fas fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = $(e.target).offset().left;
  const topOffset = $(e.target).offset().top;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  $heart.css({
    top: `${yInside}px`,
    left: `${xInside}px`,
    position: "absolute",
  });

  $loveMe.append($heart);

  $times.text(++timesClicked);

  setTimeout(() => $heart.remove(), 1000);
}
