const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

window.addEventListener("scroll", (event) => {
  let headerScroll = this.scrollY;
  if (headerScroll > 10) {
    document
      .querySelector(".fixed-header")
      .classList.add("fixed-header-shadow");
  } else {
    document
      .querySelector(".fixed-header")
      .classList.remove("fixed-header-shadow");
  }
});

const hamb = document.querySelector(".hamb");

console.log(hamb);

hamb.addEventListener("click", () => {
  document.getElementById("hamb-row-1").classList.toggle("hamb-row-1");

  document.getElementById("hamb-row-2").classList.toggle("hamb-row-2");

  document.getElementById("hamb-row-3").classList.toggle("hamb-row-3");

  const targetElements = document.querySelectorAll(".collapse-panel");

  targetElements.forEach((targetElement) => {
    if (targetElement.classList.contains("collapse")) {
      targetElement.classList.remove("collapse");
      targetElement.classList.add("show");
    } else {
      targetElement.classList.remove("show");
      targetElement.classList.add("collapse");
    }
  });
});
