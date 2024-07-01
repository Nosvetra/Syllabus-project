document.addEventListener("DOMContentLoaded", () => {
  const allTheCards = document.querySelectorAll(".common-card");

  for (let i = 0; i < allTheCards.length; i++) {
    allTheCards[i].addEventListener("click", () => {
      const innerTextofCard = allTheCards[i].innerText;

      window.location.href = `/${innerTextofCard.toLowerCase()}`;
    });

    allTheCards[i].addEventListener("mouseenter", () => {
      const getHold = document.querySelectorAll(".common-card img")[i];
      getHold.style.opacity = "1";
    });

    allTheCards[i].addEventListener("mouseleave", () => {
      const getHold = document.querySelectorAll(".common-card img")[i];
      getHold.style.opacity = "0.4";
    });
  }

  const headerImage = document.getElementById("monkeyImage");
  headerImage.addEventListener("click", () => {
    window.location.href = `/`;
  });
});
